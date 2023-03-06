import {
  encodeAndConvertPrimitiveVal,
  ParamDecorator,
  parseParamDecorator,
} from "./utils";
import {
  isStringRecord,
  isNumberRecord,
  isBooleanRecord,
  isEmpty,
} from "./utils";

export const ppMetadataKey = "pathParam";

export function getSimplePathParams(
  paramName: string,
  paramValue: any,
  explode: boolean,
  dateTimeFormat?: string
): Map<string, string> {
  const pathParams: Map<string, string> = new Map<string, string>();
  const ppVals: string[] = [];

  if (Array.isArray(paramValue)) {
    paramValue.forEach((param) => {
      ppVals.push(encodeAndConvertPrimitiveVal(param, dateTimeFormat));
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (
    isStringRecord(paramValue) ||
    isNumberRecord(paramValue) ||
    isBooleanRecord(paramValue)
  ) {
    Object.getOwnPropertyNames(paramValue).forEach((paramKey: string) => {
      const paramFieldValue = encodeAndConvertPrimitiveVal(
        paramValue[paramKey],
        dateTimeFormat
      );

      if (explode) ppVals.push(`${paramKey}=${paramFieldValue}`);
      else ppVals.push(`${paramKey},${paramFieldValue}`);
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

      const paramFieldValue = encodeAndConvertPrimitiveVal(
        paramValue[paramKey],
        ppDecorator.DateTimeFormat
      );

      if (isEmpty(paramFieldValue)) return;
      else if (explode)
        ppVals.push(`${ppDecorator.ParamName}=${paramFieldValue}`);
      else ppVals.push(`${ppDecorator.ParamName},${paramFieldValue}`);
    });

    pathParams.set(paramName, ppVals.join(","));
  } else {
    pathParams.set(
      paramName,
      encodeAndConvertPrimitiveVal(paramValue, dateTimeFormat)
    );
  }
  return pathParams;
}
