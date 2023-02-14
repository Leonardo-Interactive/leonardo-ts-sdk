import FormData from "form-data";

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
    const fieldNames: string[] = Object.getOwnPropertyNames(requestBodyObj);
    let [requestHeaders, requestBody]: [object, any] = [{}, {}];
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
                    {"Content-Type": `${requestDecorator.MediaType}`},
                    encodeFormUrlEncodeData(requestBodyObj[fname])
                ];
                break;
            case "application/json":
            case "text/json":
                [requestHeaders, requestBody] = [
                    {"Content-Type": `${requestDecorator.MediaType}`},
                    {...requestBodyObj[fname]},
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
                    requestHeaders = {"Content-Type": `${requestDecorator.MediaType}`};
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
    fieldNames.forEach((fname) => {
        const formAnn: string = Reflect.getMetadata(
            "form",
            data,
            fname
        );
        if (formAnn === null) {
            return;
        }
        const annotation = parseFormMetadata(formAnn);

        if (annotation.json) {
            formData.append(annotation.name ?? fname, JSON.stringify(data[fname]));
            return;
        }

        if (annotation.style === "form") {
            let parsed: Record<string, string[]>;
            if (annotation.explode === true) {
                parsed = formExplode(fname, data[fname]);
            } else {
                parsed = formNotExplode(fname, data[fname])
            }

            Object.keys(parsed).forEach(key => {
                parsed[key].forEach(v =>
                    formData.append(key, v));
            });
            return;
        }
    });
    return formData;
}

const formExplode = (fname: string, data: any): Record<string, string[]> => {
    const exploded: Record<string, string[]> = {};
    if (Array.isArray(data)) {
        data.forEach(value => {
            if (!exploded[fname]) {
                exploded[fname] = [];
            }
            exploded[fname].push(value);
        });
    } else {
        if (typeof data === "object") {
            Object.keys(data).forEach(key => {
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
}

const formNotExplode = (fname: string, data: any): Record<string, string[]> => {
    const notExploded: Record<string, string[]> = {};
    if (Array.isArray(data)) {
        if (!notExploded[fname]) {
            notExploded[fname] = [];
        }
        notExploded[fname].push(data
            .map(item => item.toString())
            .join(","));
    } else {
        if (typeof data === "object") {
            Object.keys(data).forEach(key => {
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
}

const parseFormMetadata = (formAnn: string): FormAnnotation =>
    formAnn.split(";").map((keyValue) => {
        const split = keyValue.split("=");
        if (split.length !== 2) {
            throw new Error(`Unable to parse form metadata "${keyValue}"`);
        }
        const obj: Record<string, string | boolean> = {};
        obj[split[0]] = split[0] === "explode" || split[0] === "json" ? split[1] === "true" : split[1];

        return obj;
    }).reduce((accum, cur) => ({...accum, ...cur}));

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
            formData.append(mpFormDecorator.Name, JSON.stringify(form[fname]));
        } else {
            if (Array.isArray(form[fname])) {
                form[fname].forEach((val: any) => {
                    formData.append(mpFormDecorator.Name + "[]", String(val));
                });
            } else {
                formData.append(mpFormDecorator.Name, String(form[fname]));
            }
        }
    });
    return formData;
}

function encodeMultipartFormDataFile(formData: FormData, file: any): FormData {
    if (typeof file !== "object" || Array.isArray(file) || file == null) {
        throw new Error("invalid type for multipart/form-data file");
    }
    const fieldNames: string[] = Object.getOwnPropertyNames(file);
    let content: any = null;
    let fileName = "";
    let mpFormDecoratorName = "";

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
    formData.append(
        "file",
        Buffer.from(content),
        fileName
    );
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
        }
    });

    return mpFormDecorator;
}

class MultipartFormDecorator {
    File: boolean;
    Content: boolean;
    JSON: boolean;
    Name: string;

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
