import { parseParamDecorator } from "./utils";
import { isStringRecord, isNumberRecord, isBooleanRecord, isEmpty } from "./utils";

export const ppMetadataKey = "pathParam";

export function getSimplePathParams(
  paramName: string,
  paramValue: any,
  explode: boolean
): Map<string, string> {
  const pathParams: Map<string, string> = new Map<string, string>();
  const ppVals: string[] = [];
  if (Array.isArray(paramValue)) {
    paramValue.forEach((param) => {
      ppVals.push(String(param));
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (isStringRecord(paramValue) || isNumberRecord(paramValue) || isBooleanRecord(paramValue)) {
    Object.getOwnPropertyNames(paramValue).forEach((paramKey: string) => {
      if (explode) ppVals.push(`${paramKey}=${paramValue[paramKey]}`);
      else ppVals.push(`${paramKey},${paramValue[paramKey]}`);
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (paramValue instanceof Object) {
    Object.getOwnPropertyNames(paramValue).forEach((paramKey: string) => {
      const ppAnn: string = Reflect.getMetadata(
        ppMetadataKey,
        paramValue,
        paramKey
      );
      if (ppAnn == null) return;
      const ppDecorator: ParamDecorator = parseParamDecorator(
        ppAnn,
        paramKey,
        "simple",
        explode
      );
      if (ppDecorator == null) return;

      const paramFieldValue = paramValue[paramKey];

      if (isEmpty(paramFieldValue)) return;
      else if (explode)
        ppVals.push(`${ppDecorator.ParamName}=${paramFieldValue}`);
      else ppVals.push(`${ppDecorator.ParamName},${paramFieldValue}`);
    });
    pathParams.set(paramName, ppVals.join(","));
  } else {
    pathParams.set(paramName, String(paramValue));
  }
  return pathParams;
}

export class ParamDecorator {
  Style: string;
  Explode: boolean;
  ParamName: string;
  Serialization?: string;
  constructor(
    Style: string,
    Explode: boolean,
    ParamName: string,
    Serialization?: string
  ) {
    this.Style = Style;
    this.Explode = Explode;
    this.ParamName = ParamName;
    this.Serialization = Serialization;
  }
}
