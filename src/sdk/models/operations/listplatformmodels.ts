/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * columns and relationships of "generated_images"
 */
export type ListPlatformModelsGeneratedImages = {
  id?: string | null | undefined;
  url?: string | undefined;
};

/**
 * columns and relationships of "custom_models"
 */
export type ListPlatformModelsCustomModels = {
  description?: string | undefined;
  featured?: boolean | undefined;
  /**
   * columns and relationships of "generated_images"
   */
  generatedImage?: ListPlatformModelsGeneratedImages | null | undefined;
  id?: string | null | undefined;
  name?: string | undefined;
  nsfw?: boolean | undefined;
};

/**
 * Responses for GET /api/rest/v1/platformModels
 */
export type ListPlatformModelsResponseBody = {
  customModels?: Array<ListPlatformModelsCustomModels> | undefined;
};

export type ListPlatformModelsResponse = {
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
   * Responses for GET /api/rest/v1/platformModels
   */
  object?: ListPlatformModelsResponseBody | undefined;
};

/** @internal */
export const ListPlatformModelsGeneratedImages$inboundSchema: z.ZodType<
  ListPlatformModelsGeneratedImages,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.string().optional(),
});

/** @internal */
export type ListPlatformModelsGeneratedImages$Outbound = {
  id?: string | null | undefined;
  url?: string | undefined;
};

/** @internal */
export const ListPlatformModelsGeneratedImages$outboundSchema: z.ZodType<
  ListPlatformModelsGeneratedImages$Outbound,
  z.ZodTypeDef,
  ListPlatformModelsGeneratedImages
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPlatformModelsGeneratedImages$ {
  /** @deprecated use `ListPlatformModelsGeneratedImages$inboundSchema` instead. */
  export const inboundSchema = ListPlatformModelsGeneratedImages$inboundSchema;
  /** @deprecated use `ListPlatformModelsGeneratedImages$outboundSchema` instead. */
  export const outboundSchema =
    ListPlatformModelsGeneratedImages$outboundSchema;
  /** @deprecated use `ListPlatformModelsGeneratedImages$Outbound` instead. */
  export type Outbound = ListPlatformModelsGeneratedImages$Outbound;
}

export function listPlatformModelsGeneratedImagesToJSON(
  listPlatformModelsGeneratedImages: ListPlatformModelsGeneratedImages,
): string {
  return JSON.stringify(
    ListPlatformModelsGeneratedImages$outboundSchema.parse(
      listPlatformModelsGeneratedImages,
    ),
  );
}

export function listPlatformModelsGeneratedImagesFromJSON(
  jsonString: string,
): SafeParseResult<ListPlatformModelsGeneratedImages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPlatformModelsGeneratedImages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPlatformModelsGeneratedImages' from JSON`,
  );
}

/** @internal */
export const ListPlatformModelsCustomModels$inboundSchema: z.ZodType<
  ListPlatformModelsCustomModels,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  featured: z.boolean().optional(),
  generated_image: z.nullable(
    z.lazy(() => ListPlatformModelsGeneratedImages$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  nsfw: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "generated_image": "generatedImage",
  });
});

/** @internal */
export type ListPlatformModelsCustomModels$Outbound = {
  description?: string | undefined;
  featured?: boolean | undefined;
  generated_image?:
    | ListPlatformModelsGeneratedImages$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  name?: string | undefined;
  nsfw?: boolean | undefined;
};

/** @internal */
export const ListPlatformModelsCustomModels$outboundSchema: z.ZodType<
  ListPlatformModelsCustomModels$Outbound,
  z.ZodTypeDef,
  ListPlatformModelsCustomModels
> = z.object({
  description: z.string().optional(),
  featured: z.boolean().optional(),
  generatedImage: z.nullable(
    z.lazy(() => ListPlatformModelsGeneratedImages$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  nsfw: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    generatedImage: "generated_image",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPlatformModelsCustomModels$ {
  /** @deprecated use `ListPlatformModelsCustomModels$inboundSchema` instead. */
  export const inboundSchema = ListPlatformModelsCustomModels$inboundSchema;
  /** @deprecated use `ListPlatformModelsCustomModels$outboundSchema` instead. */
  export const outboundSchema = ListPlatformModelsCustomModels$outboundSchema;
  /** @deprecated use `ListPlatformModelsCustomModels$Outbound` instead. */
  export type Outbound = ListPlatformModelsCustomModels$Outbound;
}

export function listPlatformModelsCustomModelsToJSON(
  listPlatformModelsCustomModels: ListPlatformModelsCustomModels,
): string {
  return JSON.stringify(
    ListPlatformModelsCustomModels$outboundSchema.parse(
      listPlatformModelsCustomModels,
    ),
  );
}

export function listPlatformModelsCustomModelsFromJSON(
  jsonString: string,
): SafeParseResult<ListPlatformModelsCustomModels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPlatformModelsCustomModels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPlatformModelsCustomModels' from JSON`,
  );
}

/** @internal */
export const ListPlatformModelsResponseBody$inboundSchema: z.ZodType<
  ListPlatformModelsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_models: z.array(
    z.lazy(() => ListPlatformModelsCustomModels$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_models": "customModels",
  });
});

/** @internal */
export type ListPlatformModelsResponseBody$Outbound = {
  custom_models?: Array<ListPlatformModelsCustomModels$Outbound> | undefined;
};

/** @internal */
export const ListPlatformModelsResponseBody$outboundSchema: z.ZodType<
  ListPlatformModelsResponseBody$Outbound,
  z.ZodTypeDef,
  ListPlatformModelsResponseBody
> = z.object({
  customModels: z.array(
    z.lazy(() => ListPlatformModelsCustomModels$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    customModels: "custom_models",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPlatformModelsResponseBody$ {
  /** @deprecated use `ListPlatformModelsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListPlatformModelsResponseBody$inboundSchema;
  /** @deprecated use `ListPlatformModelsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListPlatformModelsResponseBody$outboundSchema;
  /** @deprecated use `ListPlatformModelsResponseBody$Outbound` instead. */
  export type Outbound = ListPlatformModelsResponseBody$Outbound;
}

export function listPlatformModelsResponseBodyToJSON(
  listPlatformModelsResponseBody: ListPlatformModelsResponseBody,
): string {
  return JSON.stringify(
    ListPlatformModelsResponseBody$outboundSchema.parse(
      listPlatformModelsResponseBody,
    ),
  );
}

export function listPlatformModelsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListPlatformModelsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPlatformModelsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPlatformModelsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListPlatformModelsResponse$inboundSchema: z.ZodType<
  ListPlatformModelsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => ListPlatformModelsResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPlatformModelsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: ListPlatformModelsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListPlatformModelsResponse$outboundSchema: z.ZodType<
  ListPlatformModelsResponse$Outbound,
  z.ZodTypeDef,
  ListPlatformModelsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => ListPlatformModelsResponseBody$outboundSchema)
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
export namespace ListPlatformModelsResponse$ {
  /** @deprecated use `ListPlatformModelsResponse$inboundSchema` instead. */
  export const inboundSchema = ListPlatformModelsResponse$inboundSchema;
  /** @deprecated use `ListPlatformModelsResponse$outboundSchema` instead. */
  export const outboundSchema = ListPlatformModelsResponse$outboundSchema;
  /** @deprecated use `ListPlatformModelsResponse$Outbound` instead. */
  export type Outbound = ListPlatformModelsResponse$Outbound;
}

export function listPlatformModelsResponseToJSON(
  listPlatformModelsResponse: ListPlatformModelsResponse,
): string {
  return JSON.stringify(
    ListPlatformModelsResponse$outboundSchema.parse(listPlatformModelsResponse),
  );
}

export function listPlatformModelsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPlatformModelsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPlatformModelsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPlatformModelsResponse' from JSON`,
  );
}
