/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type CreateSVDMotionGenerationRequestBody = {
  /**
   * The ID of the image, supports generated images, variation images, and init images.
   */
  imageId: string;
  /**
   * If it is an init image uploaded by the user. This image is uploaded from endpoint: Upload init image.
   */
  isInitImage?: boolean | null | undefined;
  /**
   * Whether the generation is public or not
   */
  isPublic?: boolean | null | undefined;
  /**
   * If it is a variation image.
   */
  isVariation?: boolean | null | undefined;
  /**
   * The motion strength.
   */
  motionStrength?: number | null | undefined;
};

export type MotionSvdGenerationOutput = {
  /**
   * API credits cost, available for Production API users.
   */
  apiCreditCost?: number | null | undefined;
  generationId?: string | undefined;
};

/**
 * Responses for POST /generations-motion-svd
 */
export type CreateSVDMotionGenerationResponseBody = {
  motionSvdGenerationJob?: MotionSvdGenerationOutput | null | undefined;
};

export type CreateSVDMotionGenerationResponse = {
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
   * Responses for POST /generations-motion-svd
   */
  object?: CreateSVDMotionGenerationResponseBody | undefined;
};

/** @internal */
export const CreateSVDMotionGenerationRequestBody$inboundSchema: z.ZodType<
  CreateSVDMotionGenerationRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  imageId: z.string(),
  isInitImage: z.nullable(z.boolean()).optional(),
  isPublic: z.nullable(z.boolean()).optional(),
  isVariation: z.nullable(z.boolean()).optional(),
  motionStrength: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type CreateSVDMotionGenerationRequestBody$Outbound = {
  imageId: string;
  isInitImage?: boolean | null | undefined;
  isPublic?: boolean | null | undefined;
  isVariation?: boolean | null | undefined;
  motionStrength?: number | null | undefined;
};

/** @internal */
export const CreateSVDMotionGenerationRequestBody$outboundSchema: z.ZodType<
  CreateSVDMotionGenerationRequestBody$Outbound,
  z.ZodTypeDef,
  CreateSVDMotionGenerationRequestBody
> = z.object({
  imageId: z.string(),
  isInitImage: z.nullable(z.boolean()).optional(),
  isPublic: z.nullable(z.boolean()).optional(),
  isVariation: z.nullable(z.boolean()).optional(),
  motionStrength: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSVDMotionGenerationRequestBody$ {
  /** @deprecated use `CreateSVDMotionGenerationRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateSVDMotionGenerationRequestBody$inboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateSVDMotionGenerationRequestBody$outboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationRequestBody$Outbound` instead. */
  export type Outbound = CreateSVDMotionGenerationRequestBody$Outbound;
}

export function createSVDMotionGenerationRequestBodyToJSON(
  createSVDMotionGenerationRequestBody: CreateSVDMotionGenerationRequestBody,
): string {
  return JSON.stringify(
    CreateSVDMotionGenerationRequestBody$outboundSchema.parse(
      createSVDMotionGenerationRequestBody,
    ),
  );
}

export function createSVDMotionGenerationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSVDMotionGenerationRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSVDMotionGenerationRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSVDMotionGenerationRequestBody' from JSON`,
  );
}

/** @internal */
export const MotionSvdGenerationOutput$inboundSchema: z.ZodType<
  MotionSvdGenerationOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  generationId: z.string().optional(),
});

/** @internal */
export type MotionSvdGenerationOutput$Outbound = {
  apiCreditCost?: number | null | undefined;
  generationId?: string | undefined;
};

/** @internal */
export const MotionSvdGenerationOutput$outboundSchema: z.ZodType<
  MotionSvdGenerationOutput$Outbound,
  z.ZodTypeDef,
  MotionSvdGenerationOutput
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  generationId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MotionSvdGenerationOutput$ {
  /** @deprecated use `MotionSvdGenerationOutput$inboundSchema` instead. */
  export const inboundSchema = MotionSvdGenerationOutput$inboundSchema;
  /** @deprecated use `MotionSvdGenerationOutput$outboundSchema` instead. */
  export const outboundSchema = MotionSvdGenerationOutput$outboundSchema;
  /** @deprecated use `MotionSvdGenerationOutput$Outbound` instead. */
  export type Outbound = MotionSvdGenerationOutput$Outbound;
}

export function motionSvdGenerationOutputToJSON(
  motionSvdGenerationOutput: MotionSvdGenerationOutput,
): string {
  return JSON.stringify(
    MotionSvdGenerationOutput$outboundSchema.parse(motionSvdGenerationOutput),
  );
}

export function motionSvdGenerationOutputFromJSON(
  jsonString: string,
): SafeParseResult<MotionSvdGenerationOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MotionSvdGenerationOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MotionSvdGenerationOutput' from JSON`,
  );
}

/** @internal */
export const CreateSVDMotionGenerationResponseBody$inboundSchema: z.ZodType<
  CreateSVDMotionGenerationResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  motionSvdGenerationJob: z.nullable(
    z.lazy(() => MotionSvdGenerationOutput$inboundSchema),
  ).optional(),
});

/** @internal */
export type CreateSVDMotionGenerationResponseBody$Outbound = {
  motionSvdGenerationJob?:
    | MotionSvdGenerationOutput$Outbound
    | null
    | undefined;
};

/** @internal */
export const CreateSVDMotionGenerationResponseBody$outboundSchema: z.ZodType<
  CreateSVDMotionGenerationResponseBody$Outbound,
  z.ZodTypeDef,
  CreateSVDMotionGenerationResponseBody
> = z.object({
  motionSvdGenerationJob: z.nullable(
    z.lazy(() => MotionSvdGenerationOutput$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSVDMotionGenerationResponseBody$ {
  /** @deprecated use `CreateSVDMotionGenerationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateSVDMotionGenerationResponseBody$inboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateSVDMotionGenerationResponseBody$outboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationResponseBody$Outbound` instead. */
  export type Outbound = CreateSVDMotionGenerationResponseBody$Outbound;
}

export function createSVDMotionGenerationResponseBodyToJSON(
  createSVDMotionGenerationResponseBody: CreateSVDMotionGenerationResponseBody,
): string {
  return JSON.stringify(
    CreateSVDMotionGenerationResponseBody$outboundSchema.parse(
      createSVDMotionGenerationResponseBody,
    ),
  );
}

export function createSVDMotionGenerationResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSVDMotionGenerationResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSVDMotionGenerationResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSVDMotionGenerationResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateSVDMotionGenerationResponse$inboundSchema: z.ZodType<
  CreateSVDMotionGenerationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => CreateSVDMotionGenerationResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateSVDMotionGenerationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: CreateSVDMotionGenerationResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateSVDMotionGenerationResponse$outboundSchema: z.ZodType<
  CreateSVDMotionGenerationResponse$Outbound,
  z.ZodTypeDef,
  CreateSVDMotionGenerationResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => CreateSVDMotionGenerationResponseBody$outboundSchema)
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
export namespace CreateSVDMotionGenerationResponse$ {
  /** @deprecated use `CreateSVDMotionGenerationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSVDMotionGenerationResponse$inboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateSVDMotionGenerationResponse$outboundSchema;
  /** @deprecated use `CreateSVDMotionGenerationResponse$Outbound` instead. */
  export type Outbound = CreateSVDMotionGenerationResponse$Outbound;
}

export function createSVDMotionGenerationResponseToJSON(
  createSVDMotionGenerationResponse: CreateSVDMotionGenerationResponse,
): string {
  return JSON.stringify(
    CreateSVDMotionGenerationResponse$outboundSchema.parse(
      createSVDMotionGenerationResponse,
    ),
  );
}

export function createSVDMotionGenerationResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSVDMotionGenerationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSVDMotionGenerationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSVDMotionGenerationResponse' from JSON`,
  );
}
