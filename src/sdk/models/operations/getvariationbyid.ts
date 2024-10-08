/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetVariationByIdRequest = {
  /**
   * "id" is required
   */
  id: string;
};

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export type GeneratedImageVariationGeneric = {
  createdAt?: string | undefined;
  id?: string | null | undefined;
  /**
   * The status of the current task.
   */
  status?: shared.JobStatus | undefined;
  /**
   * The type of variation.
   */
  transformType?: shared.VariationType | undefined;
  url?: string | null | undefined;
};

/**
 * Responses for GET /variations/{id}
 */
export type GetVariationByIdResponseBody = {
  generatedImageVariationGeneric?:
    | Array<GeneratedImageVariationGeneric>
    | undefined;
};

export type GetVariationByIdResponse = {
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
   * Responses for GET /variations/{id}
   */
  object?: GetVariationByIdResponseBody | undefined;
};

/** @internal */
export const GetVariationByIdRequest$inboundSchema: z.ZodType<
  GetVariationByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetVariationByIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetVariationByIdRequest$outboundSchema: z.ZodType<
  GetVariationByIdRequest$Outbound,
  z.ZodTypeDef,
  GetVariationByIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVariationByIdRequest$ {
  /** @deprecated use `GetVariationByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetVariationByIdRequest$inboundSchema;
  /** @deprecated use `GetVariationByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetVariationByIdRequest$outboundSchema;
  /** @deprecated use `GetVariationByIdRequest$Outbound` instead. */
  export type Outbound = GetVariationByIdRequest$Outbound;
}

/** @internal */
export const GeneratedImageVariationGeneric$inboundSchema: z.ZodType<
  GeneratedImageVariationGeneric,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  status: shared.JobStatus$inboundSchema.optional(),
  transformType: shared.VariationType$inboundSchema.optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type GeneratedImageVariationGeneric$Outbound = {
  createdAt?: string | undefined;
  id?: string | null | undefined;
  status?: string | undefined;
  transformType?: string | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const GeneratedImageVariationGeneric$outboundSchema: z.ZodType<
  GeneratedImageVariationGeneric$Outbound,
  z.ZodTypeDef,
  GeneratedImageVariationGeneric
> = z.object({
  createdAt: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  status: shared.JobStatus$outboundSchema.optional(),
  transformType: shared.VariationType$outboundSchema.optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedImageVariationGeneric$ {
  /** @deprecated use `GeneratedImageVariationGeneric$inboundSchema` instead. */
  export const inboundSchema = GeneratedImageVariationGeneric$inboundSchema;
  /** @deprecated use `GeneratedImageVariationGeneric$outboundSchema` instead. */
  export const outboundSchema = GeneratedImageVariationGeneric$outboundSchema;
  /** @deprecated use `GeneratedImageVariationGeneric$Outbound` instead. */
  export type Outbound = GeneratedImageVariationGeneric$Outbound;
}

/** @internal */
export const GetVariationByIdResponseBody$inboundSchema: z.ZodType<
  GetVariationByIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  generated_image_variation_generic: z.array(
    z.lazy(() => GeneratedImageVariationGeneric$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "generated_image_variation_generic": "generatedImageVariationGeneric",
  });
});

/** @internal */
export type GetVariationByIdResponseBody$Outbound = {
  generated_image_variation_generic?:
    | Array<GeneratedImageVariationGeneric$Outbound>
    | undefined;
};

/** @internal */
export const GetVariationByIdResponseBody$outboundSchema: z.ZodType<
  GetVariationByIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetVariationByIdResponseBody
> = z.object({
  generatedImageVariationGeneric: z.array(
    z.lazy(() => GeneratedImageVariationGeneric$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    generatedImageVariationGeneric: "generated_image_variation_generic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVariationByIdResponseBody$ {
  /** @deprecated use `GetVariationByIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetVariationByIdResponseBody$inboundSchema;
  /** @deprecated use `GetVariationByIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetVariationByIdResponseBody$outboundSchema;
  /** @deprecated use `GetVariationByIdResponseBody$Outbound` instead. */
  export type Outbound = GetVariationByIdResponseBody$Outbound;
}

/** @internal */
export const GetVariationByIdResponse$inboundSchema: z.ZodType<
  GetVariationByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetVariationByIdResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetVariationByIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetVariationByIdResponseBody$Outbound | undefined;
};

/** @internal */
export const GetVariationByIdResponse$outboundSchema: z.ZodType<
  GetVariationByIdResponse$Outbound,
  z.ZodTypeDef,
  GetVariationByIdResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetVariationByIdResponseBody$outboundSchema).optional(),
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
export namespace GetVariationByIdResponse$ {
  /** @deprecated use `GetVariationByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetVariationByIdResponse$inboundSchema;
  /** @deprecated use `GetVariationByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetVariationByIdResponse$outboundSchema;
  /** @deprecated use `GetVariationByIdResponse$Outbound` instead. */
  export type Outbound = GetVariationByIdResponse$Outbound;
}
