/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The base version of stable diffusion to use if not using a custom model.
 */
export enum SdVersions {
  Sdxl09 = "SDXL_0_9",
  Sdxl10 = "SDXL_1_0",
  LeonardoDiffusionXl = "LEONARDO_DIFFUSION_XL",
  LeonardoLightningXl = "LEONARDO_LIGHTNING_XL",
  VisionXl = "VISION_XL",
  KinoXl = "KINO_XL",
  AlbedoXl = "ALBEDO_XL",
}

/**
 * Query parameters to be provided in the request body as a JSON object.
 */
export type CreateElementRequestBody = {
  /**
   * The ID of the dataset to train the element on.
   */
  datasetId?: string | undefined;
  /**
   * The description of the element.
   */
  description?: string | null | undefined;
  /**
   * The instance prompt to use during training.Try “a” by a noun. E.g. a castle
   */
  instancePrompt?: string | undefined;
  /**
   * The speed of element learns.
   */
  learningRate?: number | undefined;
  /**
   * The category determines how the element will be trained. Options are 'General' | 'Character' | 'Style' | 'Object'.
   */
  loraFocus?: string | undefined;
  /**
   * The name of the element.
   */
  name?: string | undefined;
  /**
   * The number of times the entire training dataset is passed through the element.
   */
  numTrainEpochs?: number | undefined;
  /**
   * The resolution for training. Must be 1024.
   */
  resolution?: number | null | undefined;
  /**
   * The base version of stable diffusion to use if not using a custom model.
   */
  sdVersion?: SdVersions | undefined;
  /**
   * Whether or not encode the train text.
   */
  trainTextEncoder?: boolean | undefined;
};

export type SDTrainingOutput = {
  /**
   * API Credits Cost for Model Training. Available for Production API Users.
   */
  apiCreditCost?: number | null | undefined;
  userLoraId?: number | undefined;
};

/**
 * Responses for POST /elements.
 */
export type CreateElementResponseBody = {
  sdTrainingJob?: SDTrainingOutput | null | undefined;
};

export type CreateElementResponse = {
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
   * Responses for POST /elements.
   */
  object?: CreateElementResponseBody | undefined;
};

/** @internal */
export const SdVersions$inboundSchema: z.ZodNativeEnum<typeof SdVersions> = z
  .nativeEnum(SdVersions);

/** @internal */
export const SdVersions$outboundSchema: z.ZodNativeEnum<typeof SdVersions> =
  SdVersions$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SdVersions$ {
  /** @deprecated use `SdVersions$inboundSchema` instead. */
  export const inboundSchema = SdVersions$inboundSchema;
  /** @deprecated use `SdVersions$outboundSchema` instead. */
  export const outboundSchema = SdVersions$outboundSchema;
}

/** @internal */
export const CreateElementRequestBody$inboundSchema: z.ZodType<
  CreateElementRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasetId: z.string().default(""),
  description: z.nullable(z.string().default("")),
  instance_prompt: z.string().default("a character"),
  learning_rate: z.number().default(0.000001),
  lora_focus: z.string().default("General"),
  name: z.string().default("placeholder"),
  num_train_epochs: z.number().int().default(100),
  resolution: z.nullable(z.number().int().default(1024)),
  sd_version: SdVersions$inboundSchema.default(SdVersions.Sdxl09),
  train_text_encoder: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    "instance_prompt": "instancePrompt",
    "learning_rate": "learningRate",
    "lora_focus": "loraFocus",
    "num_train_epochs": "numTrainEpochs",
    "sd_version": "sdVersion",
    "train_text_encoder": "trainTextEncoder",
  });
});

/** @internal */
export type CreateElementRequestBody$Outbound = {
  datasetId: string;
  description: string | null;
  instance_prompt: string;
  learning_rate: number;
  lora_focus: string;
  name: string;
  num_train_epochs: number;
  resolution: number | null;
  sd_version: string;
  train_text_encoder: boolean;
};

/** @internal */
export const CreateElementRequestBody$outboundSchema: z.ZodType<
  CreateElementRequestBody$Outbound,
  z.ZodTypeDef,
  CreateElementRequestBody
> = z.object({
  datasetId: z.string().default(""),
  description: z.nullable(z.string().default("")),
  instancePrompt: z.string().default("a character"),
  learningRate: z.number().default(0.000001),
  loraFocus: z.string().default("General"),
  name: z.string().default("placeholder"),
  numTrainEpochs: z.number().int().default(100),
  resolution: z.nullable(z.number().int().default(1024)),
  sdVersion: SdVersions$outboundSchema.default(SdVersions.Sdxl09),
  trainTextEncoder: z.boolean().default(true),
}).transform((v) => {
  return remap$(v, {
    instancePrompt: "instance_prompt",
    learningRate: "learning_rate",
    loraFocus: "lora_focus",
    numTrainEpochs: "num_train_epochs",
    sdVersion: "sd_version",
    trainTextEncoder: "train_text_encoder",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateElementRequestBody$ {
  /** @deprecated use `CreateElementRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateElementRequestBody$inboundSchema;
  /** @deprecated use `CreateElementRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateElementRequestBody$outboundSchema;
  /** @deprecated use `CreateElementRequestBody$Outbound` instead. */
  export type Outbound = CreateElementRequestBody$Outbound;
}

export function createElementRequestBodyToJSON(
  createElementRequestBody: CreateElementRequestBody,
): string {
  return JSON.stringify(
    CreateElementRequestBody$outboundSchema.parse(createElementRequestBody),
  );
}

export function createElementRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateElementRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateElementRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateElementRequestBody' from JSON`,
  );
}

/** @internal */
export const SDTrainingOutput$inboundSchema: z.ZodType<
  SDTrainingOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  userLoraId: z.number().int().optional(),
});

/** @internal */
export type SDTrainingOutput$Outbound = {
  apiCreditCost?: number | null | undefined;
  userLoraId?: number | undefined;
};

/** @internal */
export const SDTrainingOutput$outboundSchema: z.ZodType<
  SDTrainingOutput$Outbound,
  z.ZodTypeDef,
  SDTrainingOutput
> = z.object({
  apiCreditCost: z.nullable(z.number().int()).optional(),
  userLoraId: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDTrainingOutput$ {
  /** @deprecated use `SDTrainingOutput$inboundSchema` instead. */
  export const inboundSchema = SDTrainingOutput$inboundSchema;
  /** @deprecated use `SDTrainingOutput$outboundSchema` instead. */
  export const outboundSchema = SDTrainingOutput$outboundSchema;
  /** @deprecated use `SDTrainingOutput$Outbound` instead. */
  export type Outbound = SDTrainingOutput$Outbound;
}

export function sdTrainingOutputToJSON(
  sdTrainingOutput: SDTrainingOutput,
): string {
  return JSON.stringify(
    SDTrainingOutput$outboundSchema.parse(sdTrainingOutput),
  );
}

export function sdTrainingOutputFromJSON(
  jsonString: string,
): SafeParseResult<SDTrainingOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDTrainingOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDTrainingOutput' from JSON`,
  );
}

/** @internal */
export const CreateElementResponseBody$inboundSchema: z.ZodType<
  CreateElementResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  sdTrainingJob: z.nullable(z.lazy(() => SDTrainingOutput$inboundSchema))
    .optional(),
});

/** @internal */
export type CreateElementResponseBody$Outbound = {
  sdTrainingJob?: SDTrainingOutput$Outbound | null | undefined;
};

/** @internal */
export const CreateElementResponseBody$outboundSchema: z.ZodType<
  CreateElementResponseBody$Outbound,
  z.ZodTypeDef,
  CreateElementResponseBody
> = z.object({
  sdTrainingJob: z.nullable(z.lazy(() => SDTrainingOutput$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateElementResponseBody$ {
  /** @deprecated use `CreateElementResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateElementResponseBody$inboundSchema;
  /** @deprecated use `CreateElementResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateElementResponseBody$outboundSchema;
  /** @deprecated use `CreateElementResponseBody$Outbound` instead. */
  export type Outbound = CreateElementResponseBody$Outbound;
}

export function createElementResponseBodyToJSON(
  createElementResponseBody: CreateElementResponseBody,
): string {
  return JSON.stringify(
    CreateElementResponseBody$outboundSchema.parse(createElementResponseBody),
  );
}

export function createElementResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateElementResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateElementResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateElementResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateElementResponse$inboundSchema: z.ZodType<
  CreateElementResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => CreateElementResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateElementResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: CreateElementResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateElementResponse$outboundSchema: z.ZodType<
  CreateElementResponse$Outbound,
  z.ZodTypeDef,
  CreateElementResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => CreateElementResponseBody$outboundSchema).optional(),
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
export namespace CreateElementResponse$ {
  /** @deprecated use `CreateElementResponse$inboundSchema` instead. */
  export const inboundSchema = CreateElementResponse$inboundSchema;
  /** @deprecated use `CreateElementResponse$outboundSchema` instead. */
  export const outboundSchema = CreateElementResponse$outboundSchema;
  /** @deprecated use `CreateElementResponse$Outbound` instead. */
  export type Outbound = CreateElementResponse$Outbound;
}

export function createElementResponseToJSON(
  createElementResponse: CreateElementResponse,
): string {
  return JSON.stringify(
    CreateElementResponse$outboundSchema.parse(createElementResponse),
  );
}

export function createElementResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateElementResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateElementResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateElementResponse' from JSON`,
  );
}