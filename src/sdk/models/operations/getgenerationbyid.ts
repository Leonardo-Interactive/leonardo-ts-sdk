/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetGenerationByIdRequest = {
  /**
   * The ID of the generation to return.
   */
  id: string;
};

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export type GetGenerationByIdGeneratedImageVariationGeneric = {
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
export type GeneratedImages = {
  /**
   * If fantasyAvatar feature was used.
   */
  fantasyAvatar?: boolean | null | undefined;
  generatedImageVariationGenerics?:
    | Array<GetGenerationByIdGeneratedImageVariationGeneric>
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
export type GetGenerationByIdLoras = {
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
 * This table captures the elements that are applied to Generations.
 */
export type GenerationElements = {
  id?: number | null | undefined;
  /**
   * Element used for the generation.
   */
  lora?: GetGenerationByIdLoras | null | undefined;
  weightApplied?: number | null | undefined;
};

/**
 * columns and relationships of "generations"
 */
export type GetGenerationByIdGenerations = {
  createdAt?: string | undefined;
  generatedImages?: Array<GeneratedImages> | undefined;
  generationElements?: Array<GenerationElements> | undefined;
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
 * Responses for GET /generations/{id}
 */
export type GetGenerationByIdResponseBody = {
  /**
   * columns and relationships of "generations"
   */
  generationsByPk?: GetGenerationByIdGenerations | null | undefined;
};

export type GetGenerationByIdResponse = {
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
   * Responses for GET /generations/{id}
   */
  object?: GetGenerationByIdResponseBody | undefined;
};

/** @internal */
export const GetGenerationByIdRequest$inboundSchema: z.ZodType<
  GetGenerationByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetGenerationByIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetGenerationByIdRequest$outboundSchema: z.ZodType<
  GetGenerationByIdRequest$Outbound,
  z.ZodTypeDef,
  GetGenerationByIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationByIdRequest$ {
  /** @deprecated use `GetGenerationByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetGenerationByIdRequest$inboundSchema;
  /** @deprecated use `GetGenerationByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetGenerationByIdRequest$outboundSchema;
  /** @deprecated use `GetGenerationByIdRequest$Outbound` instead. */
  export type Outbound = GetGenerationByIdRequest$Outbound;
}

export function getGenerationByIdRequestToJSON(
  getGenerationByIdRequest: GetGenerationByIdRequest,
): string {
  return JSON.stringify(
    GetGenerationByIdRequest$outboundSchema.parse(getGenerationByIdRequest),
  );
}

export function getGenerationByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationByIdRequest' from JSON`,
  );
}

/** @internal */
export const GetGenerationByIdGeneratedImageVariationGeneric$inboundSchema:
  z.ZodType<
    GetGenerationByIdGeneratedImageVariationGeneric,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.nullable(z.string()).optional(),
    status: shared.JobStatus$inboundSchema.optional(),
    transformType: shared.VariationType$inboundSchema.optional(),
    url: z.nullable(z.string()).optional(),
  });

/** @internal */
export type GetGenerationByIdGeneratedImageVariationGeneric$Outbound = {
  id?: string | null | undefined;
  status?: string | undefined;
  transformType?: string | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const GetGenerationByIdGeneratedImageVariationGeneric$outboundSchema:
  z.ZodType<
    GetGenerationByIdGeneratedImageVariationGeneric$Outbound,
    z.ZodTypeDef,
    GetGenerationByIdGeneratedImageVariationGeneric
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
export namespace GetGenerationByIdGeneratedImageVariationGeneric$ {
  /** @deprecated use `GetGenerationByIdGeneratedImageVariationGeneric$inboundSchema` instead. */
  export const inboundSchema =
    GetGenerationByIdGeneratedImageVariationGeneric$inboundSchema;
  /** @deprecated use `GetGenerationByIdGeneratedImageVariationGeneric$outboundSchema` instead. */
  export const outboundSchema =
    GetGenerationByIdGeneratedImageVariationGeneric$outboundSchema;
  /** @deprecated use `GetGenerationByIdGeneratedImageVariationGeneric$Outbound` instead. */
  export type Outbound =
    GetGenerationByIdGeneratedImageVariationGeneric$Outbound;
}

export function getGenerationByIdGeneratedImageVariationGenericToJSON(
  getGenerationByIdGeneratedImageVariationGeneric:
    GetGenerationByIdGeneratedImageVariationGeneric,
): string {
  return JSON.stringify(
    GetGenerationByIdGeneratedImageVariationGeneric$outboundSchema.parse(
      getGenerationByIdGeneratedImageVariationGeneric,
    ),
  );
}

export function getGenerationByIdGeneratedImageVariationGenericFromJSON(
  jsonString: string,
): SafeParseResult<
  GetGenerationByIdGeneratedImageVariationGeneric,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetGenerationByIdGeneratedImageVariationGeneric$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetGenerationByIdGeneratedImageVariationGeneric' from JSON`,
  );
}

/** @internal */
export const GeneratedImages$inboundSchema: z.ZodType<
  GeneratedImages,
  z.ZodTypeDef,
  unknown
> = z.object({
  fantasyAvatar: z.nullable(z.boolean()).optional(),
  generated_image_variation_generics: z.array(
    z.lazy(() => GetGenerationByIdGeneratedImageVariationGeneric$inboundSchema),
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
export type GeneratedImages$Outbound = {
  fantasyAvatar?: boolean | null | undefined;
  generated_image_variation_generics?:
    | Array<GetGenerationByIdGeneratedImageVariationGeneric$Outbound>
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
export const GeneratedImages$outboundSchema: z.ZodType<
  GeneratedImages$Outbound,
  z.ZodTypeDef,
  GeneratedImages
> = z.object({
  fantasyAvatar: z.nullable(z.boolean()).optional(),
  generatedImageVariationGenerics: z.array(
    z.lazy(() =>
      GetGenerationByIdGeneratedImageVariationGeneric$outboundSchema
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
export namespace GeneratedImages$ {
  /** @deprecated use `GeneratedImages$inboundSchema` instead. */
  export const inboundSchema = GeneratedImages$inboundSchema;
  /** @deprecated use `GeneratedImages$outboundSchema` instead. */
  export const outboundSchema = GeneratedImages$outboundSchema;
  /** @deprecated use `GeneratedImages$Outbound` instead. */
  export type Outbound = GeneratedImages$Outbound;
}

export function generatedImagesToJSON(
  generatedImages: GeneratedImages,
): string {
  return JSON.stringify(GeneratedImages$outboundSchema.parse(generatedImages));
}

export function generatedImagesFromJSON(
  jsonString: string,
): SafeParseResult<GeneratedImages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneratedImages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneratedImages' from JSON`,
  );
}

/** @internal */
export const GetGenerationByIdLoras$inboundSchema: z.ZodType<
  GetGenerationByIdLoras,
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
export type GetGenerationByIdLoras$Outbound = {
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
export const GetGenerationByIdLoras$outboundSchema: z.ZodType<
  GetGenerationByIdLoras$Outbound,
  z.ZodTypeDef,
  GetGenerationByIdLoras
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
export namespace GetGenerationByIdLoras$ {
  /** @deprecated use `GetGenerationByIdLoras$inboundSchema` instead. */
  export const inboundSchema = GetGenerationByIdLoras$inboundSchema;
  /** @deprecated use `GetGenerationByIdLoras$outboundSchema` instead. */
  export const outboundSchema = GetGenerationByIdLoras$outboundSchema;
  /** @deprecated use `GetGenerationByIdLoras$Outbound` instead. */
  export type Outbound = GetGenerationByIdLoras$Outbound;
}

export function getGenerationByIdLorasToJSON(
  getGenerationByIdLoras: GetGenerationByIdLoras,
): string {
  return JSON.stringify(
    GetGenerationByIdLoras$outboundSchema.parse(getGenerationByIdLoras),
  );
}

export function getGenerationByIdLorasFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationByIdLoras, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationByIdLoras$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationByIdLoras' from JSON`,
  );
}

/** @internal */
export const GenerationElements$inboundSchema: z.ZodType<
  GenerationElements,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  lora: z.nullable(z.lazy(() => GetGenerationByIdLoras$inboundSchema))
    .optional(),
  weightApplied: z.nullable(z.number()).optional(),
});

/** @internal */
export type GenerationElements$Outbound = {
  id?: number | null | undefined;
  lora?: GetGenerationByIdLoras$Outbound | null | undefined;
  weightApplied?: number | null | undefined;
};

/** @internal */
export const GenerationElements$outboundSchema: z.ZodType<
  GenerationElements$Outbound,
  z.ZodTypeDef,
  GenerationElements
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  lora: z.nullable(z.lazy(() => GetGenerationByIdLoras$outboundSchema))
    .optional(),
  weightApplied: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerationElements$ {
  /** @deprecated use `GenerationElements$inboundSchema` instead. */
  export const inboundSchema = GenerationElements$inboundSchema;
  /** @deprecated use `GenerationElements$outboundSchema` instead. */
  export const outboundSchema = GenerationElements$outboundSchema;
  /** @deprecated use `GenerationElements$Outbound` instead. */
  export type Outbound = GenerationElements$Outbound;
}

export function generationElementsToJSON(
  generationElements: GenerationElements,
): string {
  return JSON.stringify(
    GenerationElements$outboundSchema.parse(generationElements),
  );
}

export function generationElementsFromJSON(
  jsonString: string,
): SafeParseResult<GenerationElements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenerationElements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenerationElements' from JSON`,
  );
}

/** @internal */
export const GetGenerationByIdGenerations$inboundSchema: z.ZodType<
  GetGenerationByIdGenerations,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().optional(),
  generated_images: z.array(z.lazy(() => GeneratedImages$inboundSchema))
    .optional(),
  generation_elements: z.array(z.lazy(() => GenerationElements$inboundSchema))
    .optional(),
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
export type GetGenerationByIdGenerations$Outbound = {
  createdAt?: string | undefined;
  generated_images?: Array<GeneratedImages$Outbound> | undefined;
  generation_elements?: Array<GenerationElements$Outbound> | undefined;
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
export const GetGenerationByIdGenerations$outboundSchema: z.ZodType<
  GetGenerationByIdGenerations$Outbound,
  z.ZodTypeDef,
  GetGenerationByIdGenerations
> = z.object({
  createdAt: z.string().optional(),
  generatedImages: z.array(z.lazy(() => GeneratedImages$outboundSchema))
    .optional(),
  generationElements: z.array(z.lazy(() => GenerationElements$outboundSchema))
    .optional(),
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
export namespace GetGenerationByIdGenerations$ {
  /** @deprecated use `GetGenerationByIdGenerations$inboundSchema` instead. */
  export const inboundSchema = GetGenerationByIdGenerations$inboundSchema;
  /** @deprecated use `GetGenerationByIdGenerations$outboundSchema` instead. */
  export const outboundSchema = GetGenerationByIdGenerations$outboundSchema;
  /** @deprecated use `GetGenerationByIdGenerations$Outbound` instead. */
  export type Outbound = GetGenerationByIdGenerations$Outbound;
}

export function getGenerationByIdGenerationsToJSON(
  getGenerationByIdGenerations: GetGenerationByIdGenerations,
): string {
  return JSON.stringify(
    GetGenerationByIdGenerations$outboundSchema.parse(
      getGenerationByIdGenerations,
    ),
  );
}

export function getGenerationByIdGenerationsFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationByIdGenerations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationByIdGenerations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationByIdGenerations' from JSON`,
  );
}

/** @internal */
export const GetGenerationByIdResponseBody$inboundSchema: z.ZodType<
  GetGenerationByIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  generations_by_pk: z.nullable(
    z.lazy(() => GetGenerationByIdGenerations$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "generations_by_pk": "generationsByPk",
  });
});

/** @internal */
export type GetGenerationByIdResponseBody$Outbound = {
  generations_by_pk?: GetGenerationByIdGenerations$Outbound | null | undefined;
};

/** @internal */
export const GetGenerationByIdResponseBody$outboundSchema: z.ZodType<
  GetGenerationByIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetGenerationByIdResponseBody
> = z.object({
  generationsByPk: z.nullable(
    z.lazy(() => GetGenerationByIdGenerations$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    generationsByPk: "generations_by_pk",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenerationByIdResponseBody$ {
  /** @deprecated use `GetGenerationByIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetGenerationByIdResponseBody$inboundSchema;
  /** @deprecated use `GetGenerationByIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetGenerationByIdResponseBody$outboundSchema;
  /** @deprecated use `GetGenerationByIdResponseBody$Outbound` instead. */
  export type Outbound = GetGenerationByIdResponseBody$Outbound;
}

export function getGenerationByIdResponseBodyToJSON(
  getGenerationByIdResponseBody: GetGenerationByIdResponseBody,
): string {
  return JSON.stringify(
    GetGenerationByIdResponseBody$outboundSchema.parse(
      getGenerationByIdResponseBody,
    ),
  );
}

export function getGenerationByIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationByIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationByIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationByIdResponseBody' from JSON`,
  );
}

/** @internal */
export const GetGenerationByIdResponse$inboundSchema: z.ZodType<
  GetGenerationByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetGenerationByIdResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetGenerationByIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetGenerationByIdResponseBody$Outbound | undefined;
};

/** @internal */
export const GetGenerationByIdResponse$outboundSchema: z.ZodType<
  GetGenerationByIdResponse$Outbound,
  z.ZodTypeDef,
  GetGenerationByIdResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetGenerationByIdResponseBody$outboundSchema).optional(),
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
export namespace GetGenerationByIdResponse$ {
  /** @deprecated use `GetGenerationByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetGenerationByIdResponse$inboundSchema;
  /** @deprecated use `GetGenerationByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetGenerationByIdResponse$outboundSchema;
  /** @deprecated use `GetGenerationByIdResponse$Outbound` instead. */
  export type Outbound = GetGenerationByIdResponse$Outbound;
}

export function getGenerationByIdResponseToJSON(
  getGenerationByIdResponse: GetGenerationByIdResponse,
): string {
  return JSON.stringify(
    GetGenerationByIdResponse$outboundSchema.parse(getGenerationByIdResponse),
  );
}

export function getGenerationByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetGenerationByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenerationByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenerationByIdResponse' from JSON`,
  );
}
