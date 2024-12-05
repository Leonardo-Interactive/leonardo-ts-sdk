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
export type UploadCanvasInitImageRequestBody = {
  /**
   * Has to be png, jpg, jpeg, or webp.
   */
  initExtension: string;
  /**
   * Has to be png, jpg, jpeg, or webp.
   */
  maskExtension: string;
};

export type CanvasInitImageUploadOutput = {
  initFields?: string | null | undefined;
  initImageId?: string | null | undefined;
  initKey?: string | null | undefined;
  initUrl?: string | null | undefined;
  maskFields?: string | null | undefined;
  maskImageId?: string | null | undefined;
  maskKey?: string | null | undefined;
  maskUrl?: string | null | undefined;
};

/**
 * Responses for POST /canvas-init-image
 */
export type UploadCanvasInitImageResponseBody = {
  uploadCanvasInitImage?: CanvasInitImageUploadOutput | null | undefined;
};

export type UploadCanvasInitImageResponse = {
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
   * Responses for POST /canvas-init-image
   */
  object?: UploadCanvasInitImageResponseBody | undefined;
};

/** @internal */
export const UploadCanvasInitImageRequestBody$inboundSchema: z.ZodType<
  UploadCanvasInitImageRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  initExtension: z.string(),
  maskExtension: z.string(),
});

/** @internal */
export type UploadCanvasInitImageRequestBody$Outbound = {
  initExtension: string;
  maskExtension: string;
};

/** @internal */
export const UploadCanvasInitImageRequestBody$outboundSchema: z.ZodType<
  UploadCanvasInitImageRequestBody$Outbound,
  z.ZodTypeDef,
  UploadCanvasInitImageRequestBody
> = z.object({
  initExtension: z.string(),
  maskExtension: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadCanvasInitImageRequestBody$ {
  /** @deprecated use `UploadCanvasInitImageRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadCanvasInitImageRequestBody$inboundSchema;
  /** @deprecated use `UploadCanvasInitImageRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadCanvasInitImageRequestBody$outboundSchema;
  /** @deprecated use `UploadCanvasInitImageRequestBody$Outbound` instead. */
  export type Outbound = UploadCanvasInitImageRequestBody$Outbound;
}

export function uploadCanvasInitImageRequestBodyToJSON(
  uploadCanvasInitImageRequestBody: UploadCanvasInitImageRequestBody,
): string {
  return JSON.stringify(
    UploadCanvasInitImageRequestBody$outboundSchema.parse(
      uploadCanvasInitImageRequestBody,
    ),
  );
}

export function uploadCanvasInitImageRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadCanvasInitImageRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCanvasInitImageRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCanvasInitImageRequestBody' from JSON`,
  );
}

/** @internal */
export const CanvasInitImageUploadOutput$inboundSchema: z.ZodType<
  CanvasInitImageUploadOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  initFields: z.nullable(z.string()).optional(),
  initImageId: z.nullable(z.string()).optional(),
  initKey: z.nullable(z.string()).optional(),
  initUrl: z.nullable(z.string()).optional(),
  maskFields: z.nullable(z.string()).optional(),
  maskImageId: z.nullable(z.string()).optional(),
  maskKey: z.nullable(z.string()).optional(),
  maskUrl: z.nullable(z.string()).optional(),
});

/** @internal */
export type CanvasInitImageUploadOutput$Outbound = {
  initFields?: string | null | undefined;
  initImageId?: string | null | undefined;
  initKey?: string | null | undefined;
  initUrl?: string | null | undefined;
  maskFields?: string | null | undefined;
  maskImageId?: string | null | undefined;
  maskKey?: string | null | undefined;
  maskUrl?: string | null | undefined;
};

/** @internal */
export const CanvasInitImageUploadOutput$outboundSchema: z.ZodType<
  CanvasInitImageUploadOutput$Outbound,
  z.ZodTypeDef,
  CanvasInitImageUploadOutput
> = z.object({
  initFields: z.nullable(z.string()).optional(),
  initImageId: z.nullable(z.string()).optional(),
  initKey: z.nullable(z.string()).optional(),
  initUrl: z.nullable(z.string()).optional(),
  maskFields: z.nullable(z.string()).optional(),
  maskImageId: z.nullable(z.string()).optional(),
  maskKey: z.nullable(z.string()).optional(),
  maskUrl: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CanvasInitImageUploadOutput$ {
  /** @deprecated use `CanvasInitImageUploadOutput$inboundSchema` instead. */
  export const inboundSchema = CanvasInitImageUploadOutput$inboundSchema;
  /** @deprecated use `CanvasInitImageUploadOutput$outboundSchema` instead. */
  export const outboundSchema = CanvasInitImageUploadOutput$outboundSchema;
  /** @deprecated use `CanvasInitImageUploadOutput$Outbound` instead. */
  export type Outbound = CanvasInitImageUploadOutput$Outbound;
}

export function canvasInitImageUploadOutputToJSON(
  canvasInitImageUploadOutput: CanvasInitImageUploadOutput,
): string {
  return JSON.stringify(
    CanvasInitImageUploadOutput$outboundSchema.parse(
      canvasInitImageUploadOutput,
    ),
  );
}

export function canvasInitImageUploadOutputFromJSON(
  jsonString: string,
): SafeParseResult<CanvasInitImageUploadOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CanvasInitImageUploadOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CanvasInitImageUploadOutput' from JSON`,
  );
}

/** @internal */
export const UploadCanvasInitImageResponseBody$inboundSchema: z.ZodType<
  UploadCanvasInitImageResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadCanvasInitImage: z.nullable(
    z.lazy(() => CanvasInitImageUploadOutput$inboundSchema),
  ).optional(),
});

/** @internal */
export type UploadCanvasInitImageResponseBody$Outbound = {
  uploadCanvasInitImage?:
    | CanvasInitImageUploadOutput$Outbound
    | null
    | undefined;
};

/** @internal */
export const UploadCanvasInitImageResponseBody$outboundSchema: z.ZodType<
  UploadCanvasInitImageResponseBody$Outbound,
  z.ZodTypeDef,
  UploadCanvasInitImageResponseBody
> = z.object({
  uploadCanvasInitImage: z.nullable(
    z.lazy(() => CanvasInitImageUploadOutput$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadCanvasInitImageResponseBody$ {
  /** @deprecated use `UploadCanvasInitImageResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadCanvasInitImageResponseBody$inboundSchema;
  /** @deprecated use `UploadCanvasInitImageResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UploadCanvasInitImageResponseBody$outboundSchema;
  /** @deprecated use `UploadCanvasInitImageResponseBody$Outbound` instead. */
  export type Outbound = UploadCanvasInitImageResponseBody$Outbound;
}

export function uploadCanvasInitImageResponseBodyToJSON(
  uploadCanvasInitImageResponseBody: UploadCanvasInitImageResponseBody,
): string {
  return JSON.stringify(
    UploadCanvasInitImageResponseBody$outboundSchema.parse(
      uploadCanvasInitImageResponseBody,
    ),
  );
}

export function uploadCanvasInitImageResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadCanvasInitImageResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCanvasInitImageResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCanvasInitImageResponseBody' from JSON`,
  );
}

/** @internal */
export const UploadCanvasInitImageResponse$inboundSchema: z.ZodType<
  UploadCanvasInitImageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => UploadCanvasInitImageResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UploadCanvasInitImageResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: UploadCanvasInitImageResponseBody$Outbound | undefined;
};

/** @internal */
export const UploadCanvasInitImageResponse$outboundSchema: z.ZodType<
  UploadCanvasInitImageResponse$Outbound,
  z.ZodTypeDef,
  UploadCanvasInitImageResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => UploadCanvasInitImageResponseBody$outboundSchema)
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
export namespace UploadCanvasInitImageResponse$ {
  /** @deprecated use `UploadCanvasInitImageResponse$inboundSchema` instead. */
  export const inboundSchema = UploadCanvasInitImageResponse$inboundSchema;
  /** @deprecated use `UploadCanvasInitImageResponse$outboundSchema` instead. */
  export const outboundSchema = UploadCanvasInitImageResponse$outboundSchema;
  /** @deprecated use `UploadCanvasInitImageResponse$Outbound` instead. */
  export type Outbound = UploadCanvasInitImageResponse$Outbound;
}

export function uploadCanvasInitImageResponseToJSON(
  uploadCanvasInitImageResponse: UploadCanvasInitImageResponse,
): string {
  return JSON.stringify(
    UploadCanvasInitImageResponse$outboundSchema.parse(
      uploadCanvasInitImageResponse,
    ),
  );
}

export function uploadCanvasInitImageResponseFromJSON(
  jsonString: string,
): SafeParseResult<UploadCanvasInitImageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadCanvasInitImageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadCanvasInitImageResponse' from JSON`,
  );
}
