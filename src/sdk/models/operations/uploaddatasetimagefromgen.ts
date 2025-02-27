/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type UploadDatasetImageFromGenRequestBody = {
  /**
   * The ID of the image to upload to the dataset.
   */
  generatedImageId: string;
};

export type UploadDatasetImageFromGenRequest = {
  /**
   * Query parameters to be provided in the request body as a JSON object
   */
  requestBody: UploadDatasetImageFromGenRequestBody;
  /**
   * The ID of the dataset to upload the image to.
   */
  datasetId: string;
};

export type DatasetGenUploadOutput = {
  id?: string | null | undefined;
};

/**
 * Responses for POST /datasets/{datasetId}/upload/gen
 */
export type UploadDatasetImageFromGenResponseBody = {
  uploadDatasetImageFromGen?: DatasetGenUploadOutput | null | undefined;
};

export type UploadDatasetImageFromGenResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Responses for POST /datasets/{datasetId}/upload/gen
   */
  object?: UploadDatasetImageFromGenResponseBody | undefined;
};

/** @internal */
export const UploadDatasetImageFromGenRequestBody$inboundSchema: z.ZodType<
  UploadDatasetImageFromGenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  generatedImageId: z.string(),
});

/** @internal */
export type UploadDatasetImageFromGenRequestBody$Outbound = {
  generatedImageId: string;
};

/** @internal */
export const UploadDatasetImageFromGenRequestBody$outboundSchema: z.ZodType<
  UploadDatasetImageFromGenRequestBody$Outbound,
  z.ZodTypeDef,
  UploadDatasetImageFromGenRequestBody
> = z.object({
  generatedImageId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDatasetImageFromGenRequestBody$ {
  /** @deprecated use `UploadDatasetImageFromGenRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    UploadDatasetImageFromGenRequestBody$inboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UploadDatasetImageFromGenRequestBody$outboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenRequestBody$Outbound` instead. */
  export type Outbound = UploadDatasetImageFromGenRequestBody$Outbound;
}

export function uploadDatasetImageFromGenRequestBodyToJSON(
  uploadDatasetImageFromGenRequestBody: UploadDatasetImageFromGenRequestBody,
): string {
  return JSON.stringify(
    UploadDatasetImageFromGenRequestBody$outboundSchema.parse(
      uploadDatasetImageFromGenRequestBody,
    ),
  );
}

export function uploadDatasetImageFromGenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadDatasetImageFromGenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UploadDatasetImageFromGenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDatasetImageFromGenRequestBody' from JSON`,
  );
}

/** @internal */
export const UploadDatasetImageFromGenRequest$inboundSchema: z.ZodType<
  UploadDatasetImageFromGenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.lazy(() => UploadDatasetImageFromGenRequestBody$inboundSchema),
  datasetId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UploadDatasetImageFromGenRequest$Outbound = {
  RequestBody: UploadDatasetImageFromGenRequestBody$Outbound;
  datasetId: string;
};

/** @internal */
export const UploadDatasetImageFromGenRequest$outboundSchema: z.ZodType<
  UploadDatasetImageFromGenRequest$Outbound,
  z.ZodTypeDef,
  UploadDatasetImageFromGenRequest
> = z.object({
  requestBody: z.lazy(() =>
    UploadDatasetImageFromGenRequestBody$outboundSchema
  ),
  datasetId: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDatasetImageFromGenRequest$ {
  /** @deprecated use `UploadDatasetImageFromGenRequest$inboundSchema` instead. */
  export const inboundSchema = UploadDatasetImageFromGenRequest$inboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenRequest$outboundSchema` instead. */
  export const outboundSchema = UploadDatasetImageFromGenRequest$outboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenRequest$Outbound` instead. */
  export type Outbound = UploadDatasetImageFromGenRequest$Outbound;
}

export function uploadDatasetImageFromGenRequestToJSON(
  uploadDatasetImageFromGenRequest: UploadDatasetImageFromGenRequest,
): string {
  return JSON.stringify(
    UploadDatasetImageFromGenRequest$outboundSchema.parse(
      uploadDatasetImageFromGenRequest,
    ),
  );
}

export function uploadDatasetImageFromGenRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadDatasetImageFromGenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadDatasetImageFromGenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDatasetImageFromGenRequest' from JSON`,
  );
}

/** @internal */
export const DatasetGenUploadOutput$inboundSchema: z.ZodType<
  DatasetGenUploadOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
});

/** @internal */
export type DatasetGenUploadOutput$Outbound = {
  id?: string | null | undefined;
};

/** @internal */
export const DatasetGenUploadOutput$outboundSchema: z.ZodType<
  DatasetGenUploadOutput$Outbound,
  z.ZodTypeDef,
  DatasetGenUploadOutput
> = z.object({
  id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DatasetGenUploadOutput$ {
  /** @deprecated use `DatasetGenUploadOutput$inboundSchema` instead. */
  export const inboundSchema = DatasetGenUploadOutput$inboundSchema;
  /** @deprecated use `DatasetGenUploadOutput$outboundSchema` instead. */
  export const outboundSchema = DatasetGenUploadOutput$outboundSchema;
  /** @deprecated use `DatasetGenUploadOutput$Outbound` instead. */
  export type Outbound = DatasetGenUploadOutput$Outbound;
}

export function datasetGenUploadOutputToJSON(
  datasetGenUploadOutput: DatasetGenUploadOutput,
): string {
  return JSON.stringify(
    DatasetGenUploadOutput$outboundSchema.parse(datasetGenUploadOutput),
  );
}

export function datasetGenUploadOutputFromJSON(
  jsonString: string,
): SafeParseResult<DatasetGenUploadOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DatasetGenUploadOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DatasetGenUploadOutput' from JSON`,
  );
}

/** @internal */
export const UploadDatasetImageFromGenResponseBody$inboundSchema: z.ZodType<
  UploadDatasetImageFromGenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadDatasetImageFromGen: z.nullable(
    z.lazy(() => DatasetGenUploadOutput$inboundSchema),
  ).optional(),
});

/** @internal */
export type UploadDatasetImageFromGenResponseBody$Outbound = {
  uploadDatasetImageFromGen?:
    | DatasetGenUploadOutput$Outbound
    | null
    | undefined;
};

/** @internal */
export const UploadDatasetImageFromGenResponseBody$outboundSchema: z.ZodType<
  UploadDatasetImageFromGenResponseBody$Outbound,
  z.ZodTypeDef,
  UploadDatasetImageFromGenResponseBody
> = z.object({
  uploadDatasetImageFromGen: z.nullable(
    z.lazy(() => DatasetGenUploadOutput$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDatasetImageFromGenResponseBody$ {
  /** @deprecated use `UploadDatasetImageFromGenResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UploadDatasetImageFromGenResponseBody$inboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UploadDatasetImageFromGenResponseBody$outboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenResponseBody$Outbound` instead. */
  export type Outbound = UploadDatasetImageFromGenResponseBody$Outbound;
}

export function uploadDatasetImageFromGenResponseBodyToJSON(
  uploadDatasetImageFromGenResponseBody: UploadDatasetImageFromGenResponseBody,
): string {
  return JSON.stringify(
    UploadDatasetImageFromGenResponseBody$outboundSchema.parse(
      uploadDatasetImageFromGenResponseBody,
    ),
  );
}

export function uploadDatasetImageFromGenResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadDatasetImageFromGenResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UploadDatasetImageFromGenResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDatasetImageFromGenResponseBody' from JSON`,
  );
}

/** @internal */
export const UploadDatasetImageFromGenResponse$inboundSchema: z.ZodType<
  UploadDatasetImageFromGenResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => UploadDatasetImageFromGenResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UploadDatasetImageFromGenResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: UploadDatasetImageFromGenResponseBody$Outbound | undefined;
};

/** @internal */
export const UploadDatasetImageFromGenResponse$outboundSchema: z.ZodType<
  UploadDatasetImageFromGenResponse$Outbound,
  z.ZodTypeDef,
  UploadDatasetImageFromGenResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => UploadDatasetImageFromGenResponseBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDatasetImageFromGenResponse$ {
  /** @deprecated use `UploadDatasetImageFromGenResponse$inboundSchema` instead. */
  export const inboundSchema = UploadDatasetImageFromGenResponse$inboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenResponse$outboundSchema` instead. */
  export const outboundSchema =
    UploadDatasetImageFromGenResponse$outboundSchema;
  /** @deprecated use `UploadDatasetImageFromGenResponse$Outbound` instead. */
  export type Outbound = UploadDatasetImageFromGenResponse$Outbound;
}

export function uploadDatasetImageFromGenResponseToJSON(
  uploadDatasetImageFromGenResponse: UploadDatasetImageFromGenResponse,
): string {
  return JSON.stringify(
    UploadDatasetImageFromGenResponse$outboundSchema.parse(
      uploadDatasetImageFromGenResponse,
    ),
  );
}

export function uploadDatasetImageFromGenResponseFromJSON(
  jsonString: string,
): SafeParseResult<UploadDatasetImageFromGenResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadDatasetImageFromGenResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDatasetImageFromGenResponse' from JSON`,
  );
}
