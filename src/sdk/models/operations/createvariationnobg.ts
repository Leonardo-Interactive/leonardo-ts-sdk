/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export type CreateVariationNoBGRequestBody = {
  id: string;
  isVariation?: boolean | undefined;
};

export type SDUpscaleJobOutput = {
  /**
   * API Credits Cost for No Background Variation. Available for Production API Users.
   */
  apiCreditCost?: number | null | undefined;
  id?: string | null | undefined;
};

/**
 * Responses for POST /variations/nobg
 */
export type CreateVariationNoBGResponseBody = {
  sdNobgJob?: SDUpscaleJobOutput | undefined;
};

export type CreateVariationNoBGResponse = {
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
   * Responses for POST /variations/nobg
   */
  object?: CreateVariationNoBGResponseBody | undefined;
};

/** @internal */
export const CreateVariationNoBGRequestBody$inboundSchema: z.ZodType<
  CreateVariationNoBGRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  isVariation: z.boolean().optional(),
});

/** @internal */
export type CreateVariationNoBGRequestBody$Outbound = {
  id: string;
  isVariation?: boolean | undefined;
};

/** @internal */
export const CreateVariationNoBGRequestBody$outboundSchema: z.ZodType<
  CreateVariationNoBGRequestBody$Outbound,
  z.ZodTypeDef,
  CreateVariationNoBGRequestBody
> = z.object({
  id: z.string(),
  isVariation: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationNoBGRequestBody$ {
  /** @deprecated use `CreateVariationNoBGRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateVariationNoBGRequestBody$inboundSchema;
  /** @deprecated use `CreateVariationNoBGRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateVariationNoBGRequestBody$outboundSchema;
  /** @deprecated use `CreateVariationNoBGRequestBody$Outbound` instead. */
  export type Outbound = CreateVariationNoBGRequestBody$Outbound;
}

export function createVariationNoBGRequestBodyToJSON(
  createVariationNoBGRequestBody: CreateVariationNoBGRequestBody,
): string {
  return JSON.stringify(
    CreateVariationNoBGRequestBody$outboundSchema.parse(
      createVariationNoBGRequestBody,
    ),
  );
}

export function createVariationNoBGRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateVariationNoBGRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateVariationNoBGRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateVariationNoBGRequestBody' from JSON`,
  );
}

/** @internal */
export const SDUpscaleJobOutput$inboundSchema: z.ZodType<
  SDUpscaleJobOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  id: z.nullable(z.string()).optional(),
});

/** @internal */
export type SDUpscaleJobOutput$Outbound = {
  apiCreditCost?: number | null | undefined;
  id?: string | null | undefined;
};

/** @internal */
export const SDUpscaleJobOutput$outboundSchema: z.ZodType<
  SDUpscaleJobOutput$Outbound,
  z.ZodTypeDef,
  SDUpscaleJobOutput
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDUpscaleJobOutput$ {
  /** @deprecated use `SDUpscaleJobOutput$inboundSchema` instead. */
  export const inboundSchema = SDUpscaleJobOutput$inboundSchema;
  /** @deprecated use `SDUpscaleJobOutput$outboundSchema` instead. */
  export const outboundSchema = SDUpscaleJobOutput$outboundSchema;
  /** @deprecated use `SDUpscaleJobOutput$Outbound` instead. */
  export type Outbound = SDUpscaleJobOutput$Outbound;
}

export function sdUpscaleJobOutputToJSON(
  sdUpscaleJobOutput: SDUpscaleJobOutput,
): string {
  return JSON.stringify(
    SDUpscaleJobOutput$outboundSchema.parse(sdUpscaleJobOutput),
  );
}

export function sdUpscaleJobOutputFromJSON(
  jsonString: string,
): SafeParseResult<SDUpscaleJobOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDUpscaleJobOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDUpscaleJobOutput' from JSON`,
  );
}

/** @internal */
export const CreateVariationNoBGResponseBody$inboundSchema: z.ZodType<
  CreateVariationNoBGResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  sdNobgJob: z.lazy(() => SDUpscaleJobOutput$inboundSchema).optional(),
});

/** @internal */
export type CreateVariationNoBGResponseBody$Outbound = {
  sdNobgJob?: SDUpscaleJobOutput$Outbound | undefined;
};

/** @internal */
export const CreateVariationNoBGResponseBody$outboundSchema: z.ZodType<
  CreateVariationNoBGResponseBody$Outbound,
  z.ZodTypeDef,
  CreateVariationNoBGResponseBody
> = z.object({
  sdNobgJob: z.lazy(() => SDUpscaleJobOutput$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationNoBGResponseBody$ {
  /** @deprecated use `CreateVariationNoBGResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateVariationNoBGResponseBody$inboundSchema;
  /** @deprecated use `CreateVariationNoBGResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateVariationNoBGResponseBody$outboundSchema;
  /** @deprecated use `CreateVariationNoBGResponseBody$Outbound` instead. */
  export type Outbound = CreateVariationNoBGResponseBody$Outbound;
}

export function createVariationNoBGResponseBodyToJSON(
  createVariationNoBGResponseBody: CreateVariationNoBGResponseBody,
): string {
  return JSON.stringify(
    CreateVariationNoBGResponseBody$outboundSchema.parse(
      createVariationNoBGResponseBody,
    ),
  );
}

export function createVariationNoBGResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateVariationNoBGResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateVariationNoBGResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateVariationNoBGResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateVariationNoBGResponse$inboundSchema: z.ZodType<
  CreateVariationNoBGResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => CreateVariationNoBGResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateVariationNoBGResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: CreateVariationNoBGResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateVariationNoBGResponse$outboundSchema: z.ZodType<
  CreateVariationNoBGResponse$Outbound,
  z.ZodTypeDef,
  CreateVariationNoBGResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => CreateVariationNoBGResponseBody$outboundSchema)
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
export namespace CreateVariationNoBGResponse$ {
  /** @deprecated use `CreateVariationNoBGResponse$inboundSchema` instead. */
  export const inboundSchema = CreateVariationNoBGResponse$inboundSchema;
  /** @deprecated use `CreateVariationNoBGResponse$outboundSchema` instead. */
  export const outboundSchema = CreateVariationNoBGResponse$outboundSchema;
  /** @deprecated use `CreateVariationNoBGResponse$Outbound` instead. */
  export type Outbound = CreateVariationNoBGResponse$Outbound;
}

export function createVariationNoBGResponseToJSON(
  createVariationNoBGResponse: CreateVariationNoBGResponse,
): string {
  return JSON.stringify(
    CreateVariationNoBGResponse$outboundSchema.parse(
      createVariationNoBGResponse,
    ),
  );
}

export function createVariationNoBGResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateVariationNoBGResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateVariationNoBGResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateVariationNoBGResponse' from JSON`,
  );
}
