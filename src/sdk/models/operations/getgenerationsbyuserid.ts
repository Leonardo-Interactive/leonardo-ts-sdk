/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetGenerationsByUserIdRequest = {
  limit?: number | undefined;
  offset?: number | undefined;
  userId: string;
};

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export type GetGenerationsByUserIdGeneratedImageVariationGeneric = {
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
 * columns and relationships of "generated_images"
 */
export type GetGenerationsByUserIdGeneratedImages = {
  generatedImageVariationGenerics?:
    | Array<GetGenerationsByUserIdGeneratedImageVariationGeneric>
    | undefined;
  id?: string | null | undefined;
  /**
   * If it is an image to video generation.
   */
  imageToVideo?: boolean | null | undefined;
  likeCount?: number | undefined;
  /**
   * If generation is of motion type.
   */
  motion?: boolean | null | undefined;
  /**
   * The URL of the motion MP4.
   */
  motionMp4URL?: string | null | undefined;
  /**
   * The name of the motion model.
   */
  motionModel?: string | null | undefined;
  /**
   * The motion strength.
   */
  motionStrength?: number | null | undefined;
  nsfw?: boolean | undefined;
  url?: string | undefined;
};

/**
 * Element used for the generation.
 */
export type Elements = {
  /**
   * Unique identifier for the element. Elements can be found from the List Elements endpoint.
   */
  akUUID?: string | null | undefined;
  /**
   * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models
   */
  baseModel?: shared.SdVersions | undefined;
  /**
   * Description for the element
   */
  description?: string | null | undefined;
  /**
   * Name of the element
   */
  name?: string | null | undefined;
  /**
   * URL of the element image
   */
  urlImage?: string | null | undefined;
  /**
   * Default weight for the element
   */
  weightDefault?: number | null | undefined;
  /**
   * Maximum weight for the element
   */
  weightMax?: number | null | undefined;
  /**
   * Minimum weight for the element
   */
  weightMin?: number | null | undefined;
};

/**
 * This table captures the elements that are applied to a Generations, also the order and weightings used when applied.
 */
export type GetGenerationsByUserIdGenerationElements = {
  id?: number | null | undefined;
  /**
   * Element used for the generation.
   */
  lora?: Elements | null | undefined;
  weightApplied?: number | null | undefined;
};

/**
 * columns and relationships of "generations"
 */
export type GetGenerationsByUserIdGenerations = {
  createdAt?: string | undefined;
  generatedImages?: Array<GetGenerationsByUserIdGeneratedImages> | undefined;
  generationElements?:
    | Array<GetGenerationsByUserIdGenerationElements>
    | undefined;
  guidanceScale?: number | null | undefined;
  id?: string | null | undefined;
  imageHeight?: number | undefined;
  imageWidth?: number | undefined;
  inferenceSteps?: number | null | undefined;
  initStrength?: number | null | undefined;
  modelId?: string | null | undefined;
  negativePrompt?: string | null | undefined;
  /**
   * If photoReal feature was used.
   */
  photoReal?: boolean | null | undefined;
  /**
   * Depth of field of photoReal used. 0.55 is low, 0.5 is medium, and 0.45 is high. Default is 0.55.
   */
  photoRealStrength?: number | null | undefined;
  /**
   * The style to generate images with. When photoReal is enabled, refer to the Guide section for a full list. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
   */
  presetStyle?: shared.SdGenerationStyle | null | undefined;
  prompt?: string | undefined;
  /**
   * If prompt magic was used.
   */
  promptMagic?: boolean | null | undefined;
  /**
   * Strength of prompt magic used.
   */
  promptMagicStrength?: number | null | undefined;
  /**
   * Version of prompt magic used.
   */
  promptMagicVersion?: string | null | undefined;
  public?: boolean | undefined;
  /**
   * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
   */
  scheduler?: shared.SdGenerationSchedulers | undefined;
  /**
   * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models
   */
  sdVersion?: shared.SdVersions | undefined;
  /**
   * Apply a fixed seed to maintain consistency across generation sets. The maximum seed value is 2147483637 for Flux and 9999999998 for other models
   */
  seed?: number | null | undefined;
  /**
   * The status of the current task.
   */
  status?: shared.JobStatus | undefined;
  /**
   * If ultra generation mode was used.
   */
  ultra?: boolean | null | undefined;
};

/**
 * Responses for GET /generations/user/{userId}
 */
export type GetGenerationsByUserIdResponseBody = {
  generations?: Array<GetGenerationsByUserIdGenerations> | undefined;
};

export type GetGenerationsByUserIdResponse = {
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
   * Responses for GET /generations/user/{userId}
   */
  object?: GetGenerationsByUserIdResponseBody | undefined;
};

/** @internal */
export const GetGenerationsByUserIdRequest$inboundSchema: z.ZodType<
  GetGenerationsByUserIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(0),
  userId: z.string(),
});

/** @internal */
export type GetGenerationsByUserIdRequest$Outbound = {
  limit: number;
  offset: number;
  userId: string;
};

/** @internal */
export const GetGenerationsByUserIdRequest$outboundSchema: z.ZodType<
  GetGenerationsByUserIdRequest$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(0),
  userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdRequest$ {
  /** @deprecated use `GetGenerationsByUserIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetGenerationsByUserIdRequest$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetGenerationsByUserIdRequest$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdRequest$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdRequest$Outbound;
}

export function getGenerationsByUserIdRequestToJSON(
  getGenerationsByUserIdRequest: GetGenerationsByUserIdRequest,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdRequest$outboundSchema.parse(
      getGenerationsByUserIdRequest,
    ),
  );
}

export function getGenerationsByUserIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationsByUserIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationsByUserIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationsByUserIdRequest' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdGeneratedImageVariationGeneric$inboundSchema:
  z.ZodType<
    GetGenerationsByUserIdGeneratedImageVariationGeneric,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.nullable(z.string()).optional(),
    status: shared.JobStatus$inboundSchema.optional(),
    transformType: shared.VariationType$inboundSchema.optional(),
    url: z.nullable(z.string()).optional(),
  });

/** @internal */
export type GetGenerationsByUserIdGeneratedImageVariationGeneric$Outbound = {
  id?: string | null | undefined;
  status?: string | undefined;
  transformType?: string | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const GetGenerationsByUserIdGeneratedImageVariationGeneric$outboundSchema:
  z.ZodType<
    GetGenerationsByUserIdGeneratedImageVariationGeneric$Outbound,
    z.ZodTypeDef,
    GetGenerationsByUserIdGeneratedImageVariationGeneric
  > = z.object({
    id: z.nullable(z.string()).optional(),
    status: shared.JobStatus$outboundSchema.optional(),
    transformType: shared.VariationType$outboundSchema.optional(),
    url: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdGeneratedImageVariationGeneric$ {
  /** @deprecated use `GetGenerationsByUserIdGeneratedImageVariationGeneric$inboundSchema` instead. */
  export const inboundSchema =
    GetGenerationsByUserIdGeneratedImageVariationGeneric$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGeneratedImageVariationGeneric$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationsByUserIdGeneratedImageVariationGeneric$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGeneratedImageVariationGeneric$Outbound` instead. */
  export type Outbound =
    GetGenerationsByUserIdGeneratedImageVariationGeneric$Outbound;
}

export function getGenerationsByUserIdGeneratedImageVariationGenericToJSON(
  getGenerationsByUserIdGeneratedImageVariationGeneric:
    GetGenerationsByUserIdGeneratedImageVariationGeneric,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdGeneratedImageVariationGeneric$outboundSchema.parse(
      getGenerationsByUserIdGeneratedImageVariationGeneric,
    ),
  );
}

export function getGenerationsByUserIdGeneratedImageVariationGenericFromJSON(
  jsonString: string,
): SafeParseResult<
  GetGenerationsByUserIdGeneratedImageVariationGeneric,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetGenerationsByUserIdGeneratedImageVariationGeneric$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetGenerationsByUserIdGeneratedImageVariationGeneric' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdGeneratedImages$inboundSchema: z.ZodType<
  GetGenerationsByUserIdGeneratedImages,
  z.ZodTypeDef,
  unknown
> = z.object({
  generated_image_variation_generics: z.array(
    z.lazy(() =>
      GetGenerationsByUserIdGeneratedImageVariationGeneric$inboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  imageToVideo: z.nullable(z.boolean()).optional(),
  likeCount: z.number().int().optional(),
  motion: z.nullable(z.boolean()).optional(),
  motionMP4URL: z.nullable(z.string()).optional(),
  motionModel: z.nullable(z.string()).optional(),
  motionStrength: z.nullable(z.number().int()).optional(),
  nsfw: z.boolean().optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "generated_image_variation_generics": "generatedImageVariationGenerics",
    "motionMP4URL": "motionMp4URL",
  });
});

/** @internal */
export type GetGenerationsByUserIdGeneratedImages$Outbound = {
  generated_image_variation_generics?:
    | Array<GetGenerationsByUserIdGeneratedImageVariationGeneric$Outbound>
    | undefined;
  id?: string | null | undefined;
  imageToVideo?: boolean | null | undefined;
  likeCount?: number | undefined;
  motion?: boolean | null | undefined;
  motionMP4URL?: string | null | undefined;
  motionModel?: string | null | undefined;
  motionStrength?: number | null | undefined;
  nsfw?: boolean | undefined;
  url?: string | undefined;
};

/** @internal */
export const GetGenerationsByUserIdGeneratedImages$outboundSchema: z.ZodType<
  GetGenerationsByUserIdGeneratedImages$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdGeneratedImages
> = z.object({
  generatedImageVariationGenerics: z.array(
    z.lazy(() =>
      GetGenerationsByUserIdGeneratedImageVariationGeneric$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  imageToVideo: z.nullable(z.boolean()).optional(),
  likeCount: z.number().int().optional(),
  motion: z.nullable(z.boolean()).optional(),
  motionMp4URL: z.nullable(z.string()).optional(),
  motionModel: z.nullable(z.string()).optional(),
  motionStrength: z.nullable(z.number().int()).optional(),
  nsfw: z.boolean().optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    generatedImageVariationGenerics: "generated_image_variation_generics",
    motionMp4URL: "motionMP4URL",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdGeneratedImages$ {
  /** @deprecated use `GetGenerationsByUserIdGeneratedImages$inboundSchema` instead. */
  export const inboundSchema =
    GetGenerationsByUserIdGeneratedImages$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGeneratedImages$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationsByUserIdGeneratedImages$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGeneratedImages$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdGeneratedImages$Outbound;
}

export function getGenerationsByUserIdGeneratedImagesToJSON(
  getGenerationsByUserIdGeneratedImages: GetGenerationsByUserIdGeneratedImages,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdGeneratedImages$outboundSchema.parse(
      getGenerationsByUserIdGeneratedImages,
    ),
  );
}

export function getGenerationsByUserIdGeneratedImagesFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationsByUserIdGeneratedImages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetGenerationsByUserIdGeneratedImages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationsByUserIdGeneratedImages' from JSON`,
  );
}

/** @internal */
export const Elements$inboundSchema: z.ZodType<
  Elements,
  z.ZodTypeDef,
  unknown
> = z.object({
  akUUID: z.nullable(z.string()).optional(),
  baseModel: shared.SdVersions$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  urlImage: z.nullable(z.string()).optional(),
  weightDefault: z.nullable(z.number().int()).optional(),
  weightMax: z.nullable(z.number().int()).optional(),
  weightMin: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type Elements$Outbound = {
  akUUID?: string | null | undefined;
  baseModel?: string | undefined;
  description?: string | null | undefined;
  name?: string | null | undefined;
  urlImage?: string | null | undefined;
  weightDefault?: number | null | undefined;
  weightMax?: number | null | undefined;
  weightMin?: number | null | undefined;
};

/** @internal */
export const Elements$outboundSchema: z.ZodType<
  Elements$Outbound,
  z.ZodTypeDef,
  Elements
> = z.object({
  akUUID: z.nullable(z.string()).optional(),
  baseModel: shared.SdVersions$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  urlImage: z.nullable(z.string()).optional(),
  weightDefault: z.nullable(z.number().int()).optional(),
  weightMax: z.nullable(z.number().int()).optional(),
  weightMin: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Elements$ {
  /** @deprecated use `Elements$inboundSchema` instead. */
  export const inboundSchema = Elements$inboundSchema;
  /** @deprecated use `Elements$outboundSchema` instead. */
  export const outboundSchema = Elements$outboundSchema;
  /** @deprecated use `Elements$Outbound` instead. */
  export type Outbound = Elements$Outbound;
}

export function elementsToJSON(elements: Elements): string {
  return JSON.stringify(Elements$outboundSchema.parse(elements));
}

export function elementsFromJSON(
  jsonString: string,
): SafeParseResult<Elements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Elements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Elements' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdGenerationElements$inboundSchema: z.ZodType<
  GetGenerationsByUserIdGenerationElements,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  lora: z.nullable(z.lazy(() => Elements$inboundSchema)).optional(),
  weightApplied: z.nullable(z.number()).optional(),
});

/** @internal */
export type GetGenerationsByUserIdGenerationElements$Outbound = {
  id?: number | null | undefined;
  lora?: Elements$Outbound | null | undefined;
  weightApplied?: number | null | undefined;
};

/** @internal */
export const GetGenerationsByUserIdGenerationElements$outboundSchema: z.ZodType<
  GetGenerationsByUserIdGenerationElements$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdGenerationElements
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  lora: z.nullable(z.lazy(() => Elements$outboundSchema)).optional(),
  weightApplied: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdGenerationElements$ {
  /** @deprecated use `GetGenerationsByUserIdGenerationElements$inboundSchema` instead. */
  export const inboundSchema =
    GetGenerationsByUserIdGenerationElements$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGenerationElements$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationsByUserIdGenerationElements$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGenerationElements$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdGenerationElements$Outbound;
}

export function getGenerationsByUserIdGenerationElementsToJSON(
  getGenerationsByUserIdGenerationElements:
    GetGenerationsByUserIdGenerationElements,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdGenerationElements$outboundSchema.parse(
      getGenerationsByUserIdGenerationElements,
    ),
  );
}

export function getGenerationsByUserIdGenerationElementsFromJSON(
  jsonString: string,
): SafeParseResult<
  GetGenerationsByUserIdGenerationElements,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetGenerationsByUserIdGenerationElements$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetGenerationsByUserIdGenerationElements' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdGenerations$inboundSchema: z.ZodType<
  GetGenerationsByUserIdGenerations,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().optional(),
  generated_images: z.array(
    z.lazy(() => GetGenerationsByUserIdGeneratedImages$inboundSchema),
  ).optional(),
  generation_elements: z.array(
    z.lazy(() => GetGenerationsByUserIdGenerationElements$inboundSchema),
  ).optional(),
  guidanceScale: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  imageHeight: z.number().int().optional(),
  imageWidth: z.number().int().optional(),
  inferenceSteps: z.nullable(z.number().int()).optional(),
  initStrength: z.nullable(z.number()).optional(),
  modelId: z.nullable(z.string()).optional(),
  negativePrompt: z.nullable(z.string()).optional(),
  photoReal: z.nullable(z.boolean()).optional(),
  photoRealStrength: z.nullable(z.number()).optional(),
  presetStyle: z.nullable(
    shared.SdGenerationStyle$inboundSchema.default(
      shared.SdGenerationStyle.Dynamic,
    ),
  ),
  prompt: z.string().optional(),
  promptMagic: z.nullable(z.boolean()).optional(),
  promptMagicStrength: z.nullable(z.number()).optional(),
  promptMagicVersion: z.nullable(z.string()).optional(),
  public: z.boolean().optional(),
  scheduler: shared.SdGenerationSchedulers$inboundSchema.optional(),
  sdVersion: shared.SdVersions$inboundSchema.optional(),
  seed: z.nullable(z.number().int()).optional(),
  status: shared.JobStatus$inboundSchema.optional(),
  ultra: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "generated_images": "generatedImages",
    "generation_elements": "generationElements",
  });
});

/** @internal */
export type GetGenerationsByUserIdGenerations$Outbound = {
  createdAt?: string | undefined;
  generated_images?:
    | Array<GetGenerationsByUserIdGeneratedImages$Outbound>
    | undefined;
  generation_elements?:
    | Array<GetGenerationsByUserIdGenerationElements$Outbound>
    | undefined;
  guidanceScale?: number | null | undefined;
  id?: string | null | undefined;
  imageHeight?: number | undefined;
  imageWidth?: number | undefined;
  inferenceSteps?: number | null | undefined;
  initStrength?: number | null | undefined;
  modelId?: string | null | undefined;
  negativePrompt?: string | null | undefined;
  photoReal?: boolean | null | undefined;
  photoRealStrength?: number | null | undefined;
  presetStyle: string | null;
  prompt?: string | undefined;
  promptMagic?: boolean | null | undefined;
  promptMagicStrength?: number | null | undefined;
  promptMagicVersion?: string | null | undefined;
  public?: boolean | undefined;
  scheduler?: string | undefined;
  sdVersion?: string | undefined;
  seed?: number | null | undefined;
  status?: string | undefined;
  ultra?: boolean | null | undefined;
};

/** @internal */
export const GetGenerationsByUserIdGenerations$outboundSchema: z.ZodType<
  GetGenerationsByUserIdGenerations$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdGenerations
> = z.object({
  createdAt: z.string().optional(),
  generatedImages: z.array(
    z.lazy(() => GetGenerationsByUserIdGeneratedImages$outboundSchema),
  ).optional(),
  generationElements: z.array(
    z.lazy(() => GetGenerationsByUserIdGenerationElements$outboundSchema),
  ).optional(),
  guidanceScale: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  imageHeight: z.number().int().optional(),
  imageWidth: z.number().int().optional(),
  inferenceSteps: z.nullable(z.number().int()).optional(),
  initStrength: z.nullable(z.number()).optional(),
  modelId: z.nullable(z.string()).optional(),
  negativePrompt: z.nullable(z.string()).optional(),
  photoReal: z.nullable(z.boolean()).optional(),
  photoRealStrength: z.nullable(z.number()).optional(),
  presetStyle: z.nullable(
    shared.SdGenerationStyle$outboundSchema.default(
      shared.SdGenerationStyle.Dynamic,
    ),
  ),
  prompt: z.string().optional(),
  promptMagic: z.nullable(z.boolean()).optional(),
  promptMagicStrength: z.nullable(z.number()).optional(),
  promptMagicVersion: z.nullable(z.string()).optional(),
  public: z.boolean().optional(),
  scheduler: shared.SdGenerationSchedulers$outboundSchema.optional(),
  sdVersion: shared.SdVersions$outboundSchema.optional(),
  seed: z.nullable(z.number().int()).optional(),
  status: shared.JobStatus$outboundSchema.optional(),
  ultra: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    generatedImages: "generated_images",
    generationElements: "generation_elements",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdGenerations$ {
  /** @deprecated use `GetGenerationsByUserIdGenerations$inboundSchema` instead. */
  export const inboundSchema = GetGenerationsByUserIdGenerations$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGenerations$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationsByUserIdGenerations$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdGenerations$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdGenerations$Outbound;
}

export function getGenerationsByUserIdGenerationsToJSON(
  getGenerationsByUserIdGenerations: GetGenerationsByUserIdGenerations,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdGenerations$outboundSchema.parse(
      getGenerationsByUserIdGenerations,
    ),
  );
}

export function getGenerationsByUserIdGenerationsFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationsByUserIdGenerations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationsByUserIdGenerations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationsByUserIdGenerations' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdResponseBody$inboundSchema: z.ZodType<
  GetGenerationsByUserIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  generations: z.array(
    z.lazy(() => GetGenerationsByUserIdGenerations$inboundSchema),
  ).optional(),
});

/** @internal */
export type GetGenerationsByUserIdResponseBody$Outbound = {
  generations?: Array<GetGenerationsByUserIdGenerations$Outbound> | undefined;
};

/** @internal */
export const GetGenerationsByUserIdResponseBody$outboundSchema: z.ZodType<
  GetGenerationsByUserIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdResponseBody
> = z.object({
  generations: z.array(
    z.lazy(() => GetGenerationsByUserIdGenerations$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationsByUserIdResponseBody$ {
  /** @deprecated use `GetGenerationsByUserIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetGenerationsByUserIdResponseBody$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationsByUserIdResponseBody$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdResponseBody$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdResponseBody$Outbound;
}

export function getGenerationsByUserIdResponseBodyToJSON(
  getGenerationsByUserIdResponseBody: GetGenerationsByUserIdResponseBody,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdResponseBody$outboundSchema.parse(
      getGenerationsByUserIdResponseBody,
    ),
  );
}

export function getGenerationsByUserIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationsByUserIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetGenerationsByUserIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationsByUserIdResponseBody' from JSON`,
  );
}

/** @internal */
export const GetGenerationsByUserIdResponse$inboundSchema: z.ZodType<
  GetGenerationsByUserIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetGenerationsByUserIdResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetGenerationsByUserIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetGenerationsByUserIdResponseBody$Outbound | undefined;
};

/** @internal */
export const GetGenerationsByUserIdResponse$outboundSchema: z.ZodType<
  GetGenerationsByUserIdResponse$Outbound,
  z.ZodTypeDef,
  GetGenerationsByUserIdResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetGenerationsByUserIdResponseBody$outboundSchema)
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
export namespace GetGenerationsByUserIdResponse$ {
  /** @deprecated use `GetGenerationsByUserIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetGenerationsByUserIdResponse$inboundSchema;
  /** @deprecated use `GetGenerationsByUserIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetGenerationsByUserIdResponse$outboundSchema;
  /** @deprecated use `GetGenerationsByUserIdResponse$Outbound` instead. */
  export type Outbound = GetGenerationsByUserIdResponse$Outbound;
}

export function getGenerationsByUserIdResponseToJSON(
  getGenerationsByUserIdResponse: GetGenerationsByUserIdResponse,
): string {
  return JSON.stringify(
    GetGenerationsByUserIdResponse$outboundSchema.parse(
      getGenerationsByUserIdResponse,
    ),
  );
}

export function getGenerationsByUserIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationsByUserIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationsByUserIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationsByUserIdResponse' from JSON`,
  );
}
