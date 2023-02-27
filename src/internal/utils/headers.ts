import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";
import {
  isBooleanRecord,
  isEmpty,
  isNumberRecord,
  isStringRecord,
  parseParamDecorator,
  ParamDecorator,
  convertIfDateObjectToISOString,
} from "./utils";

export const headerMetadataKey = "header";

export function getHeadersFromRequest(headerParams: any): any {
  if (headerParams == null) return;

  let headers: any = {};

  const fieldNames: string[] = Object.getOwnPropertyNames(headerParams);
  fieldNames.forEach((fname) => {
    const headerAnn: string = Reflect.getMetadata(
      headerMetadataKey,
      headerParams,
      fname
    );

    if (headerAnn == null) return;

    const headerDecorator: ParamDecorator = parseParamDecorator(
      headerAnn,
      fname,
      "simple",
      false
    );

    if (headerDecorator == null) return;

    const value: string = serializeHeader(
      headerParams[fname],
      headerDecorator.Explode,
      headerDecorator.DateTimeFormat
    );

    if (value != "") headers[headerDecorator.ParamName] = value;
  });

  return headers;
}

export function getHeadersFromResponse(
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
): Record<string, string[]> {
  const reponseHeaders: Record<string, string[]> = {};

  Object.keys(headers).forEach((key) => {
    const value = headers[key];

    if (!value) return;

    if (Array.isArray(value)) {
      const h: string[] = [];

      value.forEach((val: any) => {
        if (val) {
          h.push(String(val));
        }
      });

      reponseHeaders[key] = h;
    } else {
      reponseHeaders[key] = [value];
    }
  });

  return reponseHeaders;
}

function serializeHeader(
  header: any,
  explode: boolean,
  dateTimeFormat?: string
): string {
  const headerVals: string[] = [];

  if (Array.isArray(header)) {
    header.forEach((val: any) => {
      headerVals.push(convertIfDateObjectToISOString(val, dateTimeFormat));
    });
  } else if (
    isStringRecord(header) ||
    isNumberRecord(header) ||
    isBooleanRecord(header)
  ) {
    Object.getOwnPropertyNames(header).forEach((headerKey: string) => {
      if (explode) headerVals.push(`${headerKey}=${header[headerKey]}`);
      else headerVals.push(`${headerKey},${header[headerKey]}`);
    });
  } else if (header instanceof Object) {
    Object.getOwnPropertyNames(header).forEach((headerKey: string) => {
      const headerAnn: string = Reflect.getMetadata(
        headerMetadataKey,
        header,
        headerKey
      );

      if (headerAnn == null) return;

      const headerDecorator: ParamDecorator = parseParamDecorator(
        headerAnn,
        headerKey,
        "simple",
        explode
      );

      if (headerDecorator == null) return;

      const headerFieldValue = convertIfDateObjectToISOString(
        header[headerKey],
        headerDecorator.DateTimeFormat
      );

      if (isEmpty(headerFieldValue)) return;
      else if (explode)
        headerVals.push(`${headerDecorator.ParamName}=${headerFieldValue}`);
      else headerVals.push(`${headerDecorator.ParamName},${headerFieldValue}`);
    });
  } else {
    return String(header);
  }
  return headerVals.join(",");
}
