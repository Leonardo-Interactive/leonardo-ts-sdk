import {
  convertIfDateObjectToISOString,
  encodeAndConvertPrimitiveVal,
  parseParamDecorator,
  populateFromGlobals,
} from "./utils";

import { ParamDecorator } from "./utils";

export const qpMetadataKey = "queryParam";
const queryStringPrefix = "?";

export function serializeQueryParams(queryParams: any, globals?: any): string {
  let queryStringParts: string[] = [];
  if (!queryParams) return queryStringParts.join("&");

  const fieldNames: string[] =
    "__props__" in queryParams
      ? queryParams["__props__"].map((prop: any) => prop.key)
      : Object.getOwnPropertyNames(queryParams);

  fieldNames.forEach((fname) => {
    const qpAnn: string = Reflect.getMetadata(
      qpMetadataKey,
      queryParams,
      fname
    );

    if (!qpAnn) return { serialize: (params: any) => "" };

    const qpDecorator: ParamDecorator = parseParamDecorator(
      qpAnn,
      fname,
      "form",
      true
    );

    if (!qpDecorator) return;

    let value = queryParams[fname];
    value = populateFromGlobals(value, fname, "queryParam", globals);

    if (qpDecorator.Serialization === "json")
      queryStringParts.push(jsonSerializer({ [fname]: value }));
    else {
      switch (qpDecorator.Style) {
        case "deepObject":
          queryStringParts.push(
            deepObjectSerializer({ [fname]: value }, qpDecorator.DateTimeFormat)
          );
          return;
        case "form":
          if (!qpDecorator.Explode)
            queryStringParts.push(
              formSerializer({ [fname]: value }, qpDecorator.DateTimeFormat)
            );
          else
            queryStringParts.push(
              formSerializerExplode(
                { [fname]: value },
                qpDecorator.DateTimeFormat
              )
            );
          return;
        default:
          queryStringParts.push(
            formSerializerExplode(
              { [fname]: value },
              qpDecorator.DateTimeFormat
            )
          );
      }
    }
  });
  return queryStringPrefix + queryStringParts.join("&");
}

// TODO: Add support for disabling percent encoding for reserved characters
function jsonSerializer(params: Record<string, any>): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    const values: string = Object.getOwnPropertyNames(value)
      .map((paramKey: string) => {
        const qpAnn: string = Reflect.getMetadata(
          qpMetadataKey,
          value,
          paramKey
        );

        const qpDecorator: ParamDecorator = parseParamDecorator(
          qpAnn,
          paramKey,
          "form",
          true
        );

        if (qpDecorator == null) return;

        return `"${paramKey}":${JSON.stringify(
          convertIfDateObjectToISOString(
            value[paramKey],
            qpDecorator.DateTimeFormat
          )
        )}`;
      })
      .join(",");
    query.push(`${key}={${encodeURIComponent(values)}}`);
  });
  return query.join("&");
}

// TODO: Add support for disabling percent encoding for reserved characters
function formSerializer(
  params: Record<string, any>,
  dateTimeFormat?: string
): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!value) return;
    if (value !== Object(value))
      query.push(
        `${key}=${encodeAndConvertPrimitiveVal(value, dateTimeFormat)}`
      );
    else if (Array.isArray(value)) {
      const values: string = value
        .map((aValue) => convertIfDateObjectToISOString(aValue, dateTimeFormat))
        .join(",");

      query.push(`${key}=${encodeURIComponent(values)}`);
    } else {
      const values: string = Object.getOwnPropertyNames(value)
        .map((paramKey: string) => {
          const qpAnn: string = Reflect.getMetadata(
            qpMetadataKey,
            value,
            paramKey
          );

          const qpDecorator: ParamDecorator = parseParamDecorator(
            qpAnn,
            paramKey,
            "form",
            true
          );

          if (qpDecorator == null) return;

          return `${paramKey},${convertIfDateObjectToISOString(
            value[paramKey],
            qpDecorator.DateTimeFormat
          )}`;
        })
        .join(",");
      query.push(`${key}=${encodeURIComponent(values)}`);
    }
  });
  return query.join("&");
}

// TODO: Add support for disabling percent encoding for reserved characters
function formSerializerExplode(
  params: Record<string, any>,
  dateTimeFormat?: string
): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!value) return;
    if (value !== Object(value))
      query.push(
        `${key}=${encodeAndConvertPrimitiveVal(value, dateTimeFormat)}`
      );
    else if (Array.isArray(value)) {
      query.push(
        value
          .map(
            (aValue) =>
              `${key}=${encodeAndConvertPrimitiveVal(aValue, dateTimeFormat)}`
          )
          .join("&")
      );
    } else
      query.push(
        Object.getOwnPropertyNames(value)
          .map((paramKey: string) => {
            const qpAnn: string = Reflect.getMetadata(
              qpMetadataKey,
              value,
              paramKey
            );

            const qpDecorator: ParamDecorator = parseParamDecorator(
              qpAnn,
              paramKey,
              "form",
              true
            );

            if (qpDecorator == null) return;

            return `${paramKey}=${encodeAndConvertPrimitiveVal(
              value[paramKey],
              qpDecorator.DateTimeFormat
            )}`;
          })
          .join("&")
      );
  });
  return query.join("&");
}

// TODO: Add support for disabling percent encoding for reserved characters
function deepObjectSerializer(
  params: Record<string, any>,
  dateTimeFormat?: string
): string {
  const query: string[] = [];

  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (!value) return;
    if (value !== Object(value))
      query.push(
        `${key}=${encodeAndConvertPrimitiveVal(value, dateTimeFormat)}`
      );
    else if (Array.isArray(value)) {
      query.push(
        value
          .map(
            ([objKey, objValue]) =>
              `${key}[${objKey}]=${encodeAndConvertPrimitiveVal(
                objValue,
                dateTimeFormat
              )}`
          )
          .join("&")
      );
    } else
      query.push(
        Object.getOwnPropertyNames(value)
          .map((paramKey: string) => {
            const qpAnn: string = Reflect.getMetadata(
              qpMetadataKey,
              value,
              paramKey
            );

            const qpDecorator: ParamDecorator = parseParamDecorator(
              qpAnn,
              paramKey,
              "form",
              true
            );

            if (qpDecorator == null) return;

            // For deep objects, arr is wrapped inside object
            if (Array.isArray(value[paramKey]))
              return value[paramKey]
                .map(
                  (arrValue: any) =>
                    `${key}[${paramKey}]=${encodeAndConvertPrimitiveVal(
                      arrValue,
                      qpDecorator.DateTimeFormat
                    )}`
                )
                .join("&");
            return `${key}[${paramKey}]=${encodeAndConvertPrimitiveVal(
              value[paramKey],
              qpDecorator.DateTimeFormat
            )}`;
          })
          .join("&")
      );
  });
  return query.join("&");
}
