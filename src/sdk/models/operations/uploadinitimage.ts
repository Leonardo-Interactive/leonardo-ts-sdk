/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Query parameters provided in the request body as a JSON object
 */
export type UploadInitImageRequestBody = {
  /**
   * Has to be png, jpg, jpeg, or webp.
   */
  extension: string;
};

export type InitImageUploadOutput = {
  fields?: string | null | undefined;
  id?: string | null | undefined;
  key?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Responses for POST /init-image
 */
export type UploadInitImageResponseBody = {
  uploadInitImage?: InitImageUploadOutput | null | undefined;
};

export type UploadInitImageResponse = {
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
   * Responses for POST /init-image
   */
  object?: UploadInitImageResponseBody | undefined;
};

/** @internal */
export const UploadInitImageRequestBody$inboundSchema: z.ZodType<
  UploadInitImageRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  extension: z.string(),
});

/** @internal */
export type UploadInitImageRequestBody$Outbound = {
  extension: string;
};

/** @internal */
export const UploadInitImageRequestBody$outboundSchema: z.ZodType<
  UploadInitImageRequestBody$Outbound,
  z.ZodTypeDef,
  UploadInitImageRequestBody
> = z.object({
  extension: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadInitImageRequestBody$ {
  /** @deprecated use `UploadInitImageRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadInitImageRequestBody$inboundSchema;
  /** @deprecated use `UploadInitImageRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadInitImageRequestBody$outboundSchema;
  /** @deprecated use `UploadInitImageRequestBody$Outbound` instead. */
  export type Outbound = UploadInitImageRequestBody$Outbound;
}

export function uploadInitImageRequestBodyToJSON(
  uploadInitImageRequestBody: UploadInitImageRequestBody,
): string {
  return JSON.stringify(
    UploadInitImageRequestBody$outboundSchema.parse(uploadInitImageRequestBody),
  );
}

export function uploadInitImageRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadInitImageRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadInitImageRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadInitImageRequestBody' from JSON`,
  );
}

/** @internal */
export const InitImageUploadOutput$inboundSchema: z.ZodType<
  InitImageUploadOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  key: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type InitImageUploadOutput$Outbound = {
  fields?: string | null | undefined;
  id?: string | null | undefined;
  key?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const InitImageUploadOutput$outboundSchema: z.ZodType<
  InitImageUploadOutput$Outbound,
  z.ZodTypeDef,
  InitImageUploadOutput
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  key: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InitImageUploadOutput$ {
  /** @deprecated use `InitImageUploadOutput$inboundSchema` instead. */
  export const inboundSchema = InitImageUploadOutput$inboundSchema;
  /** @deprecated use `InitImageUploadOutput$outboundSchema` instead. */
  export const outboundSchema = InitImageUploadOutput$outboundSchema;
  /** @deprecated use `InitImageUploadOutput$Outbound` instead. */
  export type Outbound = InitImageUploadOutput$Outbound;
}

export function initImageUploadOutputToJSON(
  initImageUploadOutput: InitImageUploadOutput,
): string {
  return JSON.stringify(
    InitImageUploadOutput$outboundSchema.parse(initImageUploadOutput),
  );
}

export function initImageUploadOutputFromJSON(
  jsonString: string,
): SafeParseResult<InitImageUploadOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InitImageUploadOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InitImageUploadOutput' from JSON`,
  );
}

/** @internal */
export const UploadInitImageResponseBody$inboundSchema: z.ZodType<
  UploadInitImageResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadInitImage: z.nullable(z.lazy(() => InitImageUploadOutput$inboundSchema))
    .optional(),
});

/** @internal */
export type UploadInitImageResponseBody$Outbound = {
  uploadInitImage?: InitImageUploadOutput$Outbound | null | undefined;
};

/** @internal */
export const UploadInitImageResponseBody$outboundSchema: z.ZodType<
  UploadInitImageResponseBody$Outbound,
  z.ZodTypeDef,
  UploadInitImageResponseBody
> = z.object({
  uploadInitImage: z.nullable(
    z.lazy(() => InitImageUploadOutput$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadInitImageResponseBody$ {
  /** @deprecated use `UploadInitImageResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadInitImageResponseBody$inboundSchema;
  /** @deprecated use `UploadInitImageResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadInitImageResponseBody$outboundSchema;
  /** @deprecated use `UploadInitImageResponseBody$Outbound` instead. */
  export type Outbound = UploadInitImageResponseBody$Outbound;
}

export function uploadInitImageResponseBodyToJSON(
  uploadInitImageResponseBody: UploadInitImageResponseBody,
): string {
  return JSON.stringify(
    UploadInitImageResponseBody$outboundSchema.parse(
      uploadInitImageResponseBody,
    ),
  );
}

export function uploadInitImageResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadInitImageResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadInitImageResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadInitImageResponseBody' from JSON`,
  );
}

/** @internal */
export const UploadInitImageResponse$inboundSchema: z.ZodType<
  UploadInitImageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => UploadInitImageResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UploadInitImageResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: UploadInitImageResponseBody$Outbound | undefined;
};

/** @internal */
export const UploadInitImageResponse$outboundSchema: z.ZodType<
  UploadInitImageResponse$Outbound,
  z.ZodTypeDef,
  UploadInitImageResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => UploadInitImageResponseBody$outboundSchema).optional(),
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
export namespace UploadInitImageResponse$ {
  /** @deprecated use `UploadInitImageResponse$inboundSchema` instead. */
  export const inboundSchema = UploadInitImageResponse$inboundSchema;
  /** @deprecated use `UploadInitImageResponse$outboundSchema` instead. */
  export const outboundSchema = UploadInitImageResponse$outboundSchema;
  /** @deprecated use `UploadInitImageResponse$Outbound` instead. */
  export type Outbound = UploadInitImageResponse$Outbound;
}

export function uploadInitImageResponseToJSON(
  uploadInitImageResponse: UploadInitImageResponse,
): string {
  return JSON.stringify(
    UploadInitImageResponse$outboundSchema.parse(uploadInitImageResponse),
  );
}

export function uploadInitImageResponseFromJSON(
  jsonString: string,
): SafeParseResult<UploadInitImageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadInitImageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadInitImageResponse' from JSON`,
  );
}
