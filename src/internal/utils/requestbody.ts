import FormData from "form-data";
import {
  convertIfDateObjectToISOString,
  isBooleanRecord,
  isNumberRecord,
  isStringRecord,
} from "./utils";

const requestMetadataKey = "request";
const mpFormMetadataKey = "multipart_form";

export function serializeRequestBody(request: any): [object, any] {
  if (!request.hasOwnProperty(requestMetadataKey)) {
    throw new Error("request body not found");
  }

  let requestBodyObj = request;

  const firstLevelRequestAnn: string = Reflect.getMetadata(
    requestMetadataKey,
    request,
    requestMetadataKey
  );
  if (firstLevelRequestAnn == null)
    requestBodyObj = request[requestMetadataKey];

  let [requestHeaders, requestBody]: [object, any] = [{}, {}];

  const fieldNames: string[] = Object.getOwnPropertyNames(requestBodyObj);
  fieldNames.forEach((fname) => {
    const requestAnn: string = Reflect.getMetadata(
      requestMetadataKey,
      requestBodyObj,
      fname
    );
    if (requestAnn == null) return;

    const requestDecorator: RequestDecorator =
      parseRequestDecorator(requestAnn);

    switch (requestDecorator.MediaType) {
      case "multipart/form-data":
      case "multipart/mixed":
        requestBody = encodeMultipartFormData(requestBodyObj[fname]);
        requestHeaders = (requestBody as FormData).getHeaders();
        break;

      case "application/x-www-form-urlencoded":
        [requestHeaders, requestBody] = [
          { "Content-Type": `${requestDecorator.MediaType}` },
          encodeFormUrlEncodeData(requestBodyObj[fname]),
        ];
        break;

      case "application/json":
      case "text/json":
        [requestHeaders, requestBody] = [
          { "Content-Type": `${requestDecorator.MediaType}` },
          { ...requestBodyObj[fname] },
        ];
        break;

      default:
        requestBody = requestBodyObj[fname];
        const requestBodyType: string = typeof requestBody;
        if (
          requestBodyType === "string" ||
          requestBody instanceof String ||
          requestBody instanceof Uint8Array
        )
          requestHeaders = { "Content-Type": `${requestDecorator.MediaType}` };
        else
          throw new Error(
            `invalid request body type ${requestBodyType} for mediaType ${requestDecorator.MediaType}`
          );
    }
  });
  return [requestHeaders, requestBody];
}

type FormAnnotation = {
  name?: string;
  style?: string;
  explode?: boolean;
  json?: boolean;
};

const encodeFormUrlEncodeData = (data: any): FormData => {
  const formData: FormData = new FormData();
  const fieldNames: string[] = Object.getOwnPropertyNames(data);

  if (isNumberRecord(data) || isBooleanRecord(data) || isStringRecord(data)) {
    fieldNames.forEach((fname) => {
      formData.append(fname, String(data[fname]));
    });
  } else {
    fieldNames.forEach((fname) => {
      const formAnn: string = Reflect.getMetadata("form", data, fname);
      if (formAnn === null) {
        return;
      }
      const formDecorator: FormDecorator = parseFormDecorator(formAnn);

      if (formDecorator.JSON) {
        formData.append(
          formDecorator.Name ?? fname,
          JSON.stringify(data[fname])
        );
        return;
      }

      if (formDecorator.Style === "form") {
        let parsed: Record<string, string[]>;
        if (formDecorator.Explode === true) {
          parsed = formExplode(
            fname,
            data[fname],
            formDecorator.DateTimeFormat
          );
        } else {
          parsed = formNotExplode(
            fname,
            data[fname],
            formDecorator.DateTimeFormat
          );
        }

        Object.keys(parsed).forEach((key) => {
          parsed[key].forEach((v) => formData.append(key, v));
        });
        return;
      }
    });
  }
  return formData;
};

const formExplode = (
  fname: string,
  data: any,
  dateTimeFormat?: string
): Record<string, string[]> => {
  const exploded: Record<string, string[]> = {};

  if (Array.isArray(data)) {
    data.forEach((value) => {
      if (!exploded[fname]) {
        exploded[fname] = [];
      }
      exploded[fname].push(value);
    });
  } else {
    if (typeof data === "object") {
      if (data instanceof Date) {
        if (!exploded[fname]) {
          exploded[fname] = [];
        }
        exploded[fname].push(
          convertIfDateObjectToISOString(data, dateTimeFormat)
        );
        return exploded;
      }
      Object.keys(data).forEach((key) => {
        if (!exploded[key]) {
          exploded[key] = [];
        }
        exploded[key].push(data[key]);
      });
    } else {
      if (!exploded[fname]) {
        exploded[fname] = [];
      }
      exploded[fname].push(data.toString());
    }
  }
  return exploded;
};

const formNotExplode = (
  fname: string,
  data: any,
  dateTimeFormat?: string
): Record<string, string[]> => {
  const notExploded: Record<string, string[]> = {};

  if (Array.isArray(data)) {
    if (!notExploded[fname]) {
      notExploded[fname] = [];
    }
    notExploded[fname].push(data.map((item) => item.toString()).join(","));
  } else {
    if (typeof data === "object") {
      if (data instanceof Date) {
        if (!notExploded[fname]) {
          notExploded[fname] = [];
        }
        notExploded[fname].push(
          convertIfDateObjectToISOString(data, dateTimeFormat)
        );
        return notExploded;
      }
      Object.keys(data).forEach((key) => {
        if (!notExploded[key]) {
          notExploded[key] = [];
        }
        notExploded[fname].push(`${key}=${data[key]}`);
      });
    } else {
      if (!notExploded[fname]) {
        notExploded[fname] = [];
      }
      notExploded[fname].push(data.toString());
    }
  }
  return notExploded;
};

function parseFormDecorator(formAnn: string): FormDecorator {
  const formDecorator: FormDecorator = new FormDecorator(
    "",
    "form",
    false,
    false
  );
  formAnn.split(";").forEach((formAnnPart) => {
    const [formKey, formVal]: string[] = formAnnPart.split("=");
    switch (formKey) {
      case "name":
        formDecorator.Name = formVal;
        break;
      case "style":
        formDecorator.Style = formVal;
        break;
      case "explode":
        formDecorator.Explode = formVal === "true";
        break;
      case "json":
        formDecorator.JSON = formVal === "true";
        break;
      case "dateTimeFormat":
        formDecorator.DateTimeFormat = formVal;
    }
  });

  return formDecorator;
}

class FormDecorator {
  Name?: string;
  Style?: string;
  Explode?: boolean;
  JSON?: boolean;
  DateTimeFormat?: string;

  constructor(
    Name?: string,
    Style?: string,
    Explode?: boolean,
    JSON?: boolean
  ) {
    this.Name = Name;
    this.Style = Style;
    this.Explode = Explode;
    this.JSON = JSON;
  }
}

function encodeMultipartFormData(form: any): FormData {
  const formData: FormData = new FormData();

  const fieldNames: string[] = Object.getOwnPropertyNames(form);
  fieldNames.forEach((fname) => {

    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      form,
      fname
    );

    if (mpFormAnn == null) return;

    const mpFormDecorator: MultipartFormDecorator =
      parseMultipartFormDecorator(mpFormAnn);

    if (mpFormDecorator.File)
      return encodeMultipartFormDataFile(formData, form[fname]);
    else if (mpFormDecorator.JSON) {
      formData.append(
        mpFormDecorator.Name,
        JSON.stringify(form[fname], (key, value) => {
          return convertIfDateObjectToISOString(
            value,
            mpFormDecorator.DateTimeFormat
          );
        })
      );
    } else {
      if (Array.isArray(form[fname])) {
        form[fname].forEach((val: any) => {
          formData.append(
            mpFormDecorator.Name + "[]",
            String(
              convertIfDateObjectToISOString(
                val,
                mpFormDecorator.DateTimeFormat
              )
            )
          );
        });
      } else {
        formData.append(
          mpFormDecorator.Name,
          String(
            convertIfDateObjectToISOString(
              form[fname],
              mpFormDecorator.DateTimeFormat
            )
          )
        );
      }
    }
  });
  return formData;
}

function encodeMultipartFormDataFile(formData: FormData, file: any): FormData {
  if (typeof file !== "object" || Array.isArray(file) || file == null) {
    throw new Error("invalid type for multipart/form-data file");
  }
  let content: any = null;
  let fileName = "";
  let mpFormDecoratorName = "";

  const fieldNames: string[] = Object.getOwnPropertyNames(file);
  fieldNames.forEach((fname) => {

    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      file,
      fname
    );

    if (mpFormAnn == null) return;

    const mpFormDecorator: MultipartFormDecorator =
      parseMultipartFormDecorator(mpFormAnn);

    if (!mpFormDecorator.Content && mpFormDecorator.Name == "") return;
    if (mpFormDecorator.Content) content = file[fname];
    else {
      mpFormDecoratorName = mpFormDecorator.Name;
      fileName = file[fname];
    }
  });

  if (mpFormDecoratorName === "" || fileName === "" || content == null) {
    throw new Error("invalid multipart/form-data file");
  }
  formData.append("file", Buffer.from(content), fileName);
  return formData;
}

function parseMultipartFormDecorator(
  mpFormAnn: string
): MultipartFormDecorator {
  // example "name=file"
  const mpFormDecorator: MultipartFormDecorator = new MultipartFormDecorator(
    false,
    false,
    false,
    ""
  );
  mpFormAnn.split(";").forEach((mpFormAnnPart) => {
    const [mpFormKey, mpFormVal]: string[] = mpFormAnnPart.split("=");
    switch (mpFormKey) {
      case "file":
        mpFormDecorator.File = mpFormVal == "true";
        break;
      case "content":
        mpFormDecorator.Content = mpFormVal == "true";
        break;
      case "name":
        mpFormDecorator.Name = mpFormVal;
        break;
      case "json":
        mpFormDecorator.JSON = mpFormVal == "true";
        break;
      case "dateTimeFormat":
        mpFormDecorator.DateTimeFormat = mpFormVal;
    }
  });

  return mpFormDecorator;
}

class MultipartFormDecorator {
  File: boolean;
  Content: boolean;
  JSON: boolean;
  Name: string;
  DateTimeFormat?: string;

  constructor(File: boolean, Content: boolean, JSON: boolean, Name: string) {
    this.File = File;
    this.Content = Content;
    this.JSON = JSON;
    this.Name = Name;
  }
}

function parseRequestDecorator(requestAnn: string): RequestDecorator {
  // example "media_type=multipart/form-data"
  const requestDecorator: RequestDecorator = new RequestDecorator(
    "application/octet-stream"
  );
  const [mediaTypeKey, mediaTypeVal]: string[] = requestAnn.split("=");
  if (mediaTypeKey === "media_type") requestDecorator.MediaType = mediaTypeVal;
  return requestDecorator;
}

class RequestDecorator {
  MediaType: string;

  constructor(MediaType: string) {
    this.MediaType = MediaType;
  }
}
