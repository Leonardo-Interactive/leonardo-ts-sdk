/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDatasetByIdRequest = {
  /**
   * The ID of the dataset to return.
   */
  id: string;
};

/**
 * columns and relationships of "dataset_images"
 */
export type DatasetImages = {
  createdAt?: string | undefined;
  id?: string | null | undefined;
  url?: string | undefined;
};

/**
 * columns and relationships of "datasets"
 */
export type GetDatasetByIdDatasets = {
  createdAt?: string | undefined;
  datasetImages?: Array<DatasetImages> | undefined;
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | undefined;
  updatedAt?: string | undefined;
};

/**
 * Responses for GET /datasets/{id}
 */
export type GetDatasetByIdResponseBody = {
  /**
   * columns and relationships of "datasets"
   */
  datasetsByPk?: GetDatasetByIdDatasets | null | undefined;
};

export type GetDatasetByIdResponse = {
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
   * Responses for GET /datasets/{id}
   */
  object?: GetDatasetByIdResponseBody | undefined;
};

/** @internal */
export const GetDatasetByIdRequest$inboundSchema: z.ZodType<
  GetDatasetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetDatasetByIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetDatasetByIdRequest$outboundSchema: z.ZodType<
  GetDatasetByIdRequest$Outbound,
  z.ZodTypeDef,
  GetDatasetByIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDatasetByIdRequest$ {
  /** @deprecated use `GetDatasetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetDatasetByIdRequest$inboundSchema;
  /** @deprecated use `GetDatasetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetDatasetByIdRequest$outboundSchema;
  /** @deprecated use `GetDatasetByIdRequest$Outbound` instead. */
  export type Outbound = GetDatasetByIdRequest$Outbound;
}

export function getDatasetByIdRequestToJSON(
  getDatasetByIdRequest: GetDatasetByIdRequest,
): string {
  return JSON.stringify(
    GetDatasetByIdRequest$outboundSchema.parse(getDatasetByIdRequest),
  );
}

export function getDatasetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDatasetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDatasetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDatasetByIdRequest' from JSON`,
  );
}

/** @internal */
export const DatasetImages$inboundSchema: z.ZodType<
  DatasetImages,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  url: z.string().optional(),
});

/** @internal */
export type DatasetImages$Outbound = {
  createdAt?: string | undefined;
  id?: string | null | undefined;
  url?: string | undefined;
};

/** @internal */
export const DatasetImages$outboundSchema: z.ZodType<
  DatasetImages$Outbound,
  z.ZodTypeDef,
  DatasetImages
> = z.object({
  createdAt: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DatasetImages$ {
  /** @deprecated use `DatasetImages$inboundSchema` instead. */
  export const inboundSchema = DatasetImages$inboundSchema;
  /** @deprecated use `DatasetImages$outboundSchema` instead. */
  export const outboundSchema = DatasetImages$outboundSchema;
  /** @deprecated use `DatasetImages$Outbound` instead. */
  export type Outbound = DatasetImages$Outbound;
}

export function datasetImagesToJSON(datasetImages: DatasetImages): string {
  return JSON.stringify(DatasetImages$outboundSchema.parse(datasetImages));
}

export function datasetImagesFromJSON(
  jsonString: string,
): SafeParseResult<DatasetImages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DatasetImages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DatasetImages' from JSON`,
  );
}

/** @internal */
export const GetDatasetByIdDatasets$inboundSchema: z.ZodType<
  GetDatasetByIdDatasets,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().optional(),
  dataset_images: z.array(z.lazy(() => DatasetImages$inboundSchema)).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  updatedAt: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "dataset_images": "datasetImages",
  });
});

/** @internal */
export type GetDatasetByIdDatasets$Outbound = {
  createdAt?: string | undefined;
  dataset_images?: Array<DatasetImages$Outbound> | undefined;
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | undefined;
  updatedAt?: string | undefined;
};

/** @internal */
export const GetDatasetByIdDatasets$outboundSchema: z.ZodType<
  GetDatasetByIdDatasets$Outbound,
  z.ZodTypeDef,
  GetDatasetByIdDatasets
> = z.object({
  createdAt: z.string().optional(),
  datasetImages: z.array(z.lazy(() => DatasetImages$outboundSchema)).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  updatedAt: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    datasetImages: "dataset_images",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDatasetByIdDatasets$ {
  /** @deprecated use `GetDatasetByIdDatasets$inboundSchema` instead. */
  export const inboundSchema = GetDatasetByIdDatasets$inboundSchema;
  /** @deprecated use `GetDatasetByIdDatasets$outboundSchema` instead. */
  export const outboundSchema = GetDatasetByIdDatasets$outboundSchema;
  /** @deprecated use `GetDatasetByIdDatasets$Outbound` instead. */
  export type Outbound = GetDatasetByIdDatasets$Outbound;
}

export function getDatasetByIdDatasetsToJSON(
  getDatasetByIdDatasets: GetDatasetByIdDatasets,
): string {
  return JSON.stringify(
    GetDatasetByIdDatasets$outboundSchema.parse(getDatasetByIdDatasets),
  );
}

export function getDatasetByIdDatasetsFromJSON(
  jsonString: string,
): SafeParseResult<GetDatasetByIdDatasets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDatasetByIdDatasets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDatasetByIdDatasets' from JSON`,
  );
}

/** @internal */
export const GetDatasetByIdResponseBody$inboundSchema: z.ZodType<
  GetDatasetByIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasets_by_pk: z.nullable(z.lazy(() => GetDatasetByIdDatasets$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "datasets_by_pk": "datasetsByPk",
  });
});

/** @internal */
export type GetDatasetByIdResponseBody$Outbound = {
  datasets_by_pk?: GetDatasetByIdDatasets$Outbound | null | undefined;
};

/** @internal */
export const GetDatasetByIdResponseBody$outboundSchema: z.ZodType<
  GetDatasetByIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetDatasetByIdResponseBody
> = z.object({
  datasetsByPk: z.nullable(z.lazy(() => GetDatasetByIdDatasets$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    datasetsByPk: "datasets_by_pk",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDatasetByIdResponseBody$ {
  /** @deprecated use `GetDatasetByIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetDatasetByIdResponseBody$inboundSchema;
  /** @deprecated use `GetDatasetByIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetDatasetByIdResponseBody$outboundSchema;
  /** @deprecated use `GetDatasetByIdResponseBody$Outbound` instead. */
  export type Outbound = GetDatasetByIdResponseBody$Outbound;
}

export function getDatasetByIdResponseBodyToJSON(
  getDatasetByIdResponseBody: GetDatasetByIdResponseBody,
): string {
  return JSON.stringify(
    GetDatasetByIdResponseBody$outboundSchema.parse(getDatasetByIdResponseBody),
  );
}

export function getDatasetByIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetDatasetByIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDatasetByIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDatasetByIdResponseBody' from JSON`,
  );
}

/** @internal */
export const GetDatasetByIdResponse$inboundSchema: z.ZodType<
  GetDatasetByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetDatasetByIdResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetDatasetByIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetDatasetByIdResponseBody$Outbound | undefined;
};

/** @internal */
export const GetDatasetByIdResponse$outboundSchema: z.ZodType<
  GetDatasetByIdResponse$Outbound,
  z.ZodTypeDef,
  GetDatasetByIdResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetDatasetByIdResponseBody$outboundSchema).optional(),
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
export namespace GetDatasetByIdResponse$ {
  /** @deprecated use `GetDatasetByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetDatasetByIdResponse$inboundSchema;
  /** @deprecated use `GetDatasetByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetDatasetByIdResponse$outboundSchema;
  /** @deprecated use `GetDatasetByIdResponse$Outbound` instead. */
  export type Outbound = GetDatasetByIdResponse$Outbound;
}

export function getDatasetByIdResponseToJSON(
  getDatasetByIdResponse: GetDatasetByIdResponse,
): string {
  return JSON.stringify(
    GetDatasetByIdResponse$outboundSchema.parse(getDatasetByIdResponse),
  );
}

export function getDatasetByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDatasetByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDatasetByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDatasetByIdResponse' from JSON`,
  );
}
