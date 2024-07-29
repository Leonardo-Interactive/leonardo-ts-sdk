/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type CreateModelRequestBody = {
    /**
     * The ID of the dataset to train the model on.
     */
    datasetId: string;
    /**
     * The description of the model.
     */
    description?: string | null | undefined;
    /**
     * The instance prompt to use during training.
     */
    instancePrompt: string;
    /**
     * The category the most accurately reflects the model.
     */
    modelType?: shared.CustomModelType | undefined;
    /**
     * The name of the model.
     */
    name: string;
    /**
     * Whether or not the model is NSFW.
     */
    nsfw?: boolean | null | undefined;
    /**
     * The resolution for training. Must be 512 or 768.
     */
    resolution?: number | null | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models
     */
    sdVersion?: shared.SdVersions | undefined;
    /**
     * When training using the PIXEL_ART model type, this influences the training strength.
     */
    strength?: shared.Strength | undefined;
};

export type SDTrainingOutput = {
    /**
     * API Credits Cost for Model Training. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    customModelId?: string | undefined;
};

/**
 * Responses for POST /models
 */
export type CreateModelResponseBody = {
    sdTrainingJob?: SDTrainingOutput | null | undefined;
};

export type CreateModelResponse = {
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
     * Responses for POST /models
     */
    object?: CreateModelResponseBody | undefined;
};

/** @internal */
export const CreateModelRequestBody$inboundSchema: z.ZodType<
    CreateModelRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        datasetId: z.string(),
        description: z.nullable(z.string().default("")),
        instance_prompt: z.string(),
        modelType: shared.CustomModelType$inboundSchema.default(shared.CustomModelType.General),
        name: z.string(),
        nsfw: z.nullable(z.boolean().default(false)),
        resolution: z.nullable(z.number().int().default(512)),
        sd_Version: shared.SdVersions$inboundSchema.optional(),
        strength: shared.Strength$inboundSchema.default(shared.Strength.Medium),
    })
    .transform((v) => {
        return remap$(v, {
            instance_prompt: "instancePrompt",
            sd_Version: "sdVersion",
        });
    });

/** @internal */
export type CreateModelRequestBody$Outbound = {
    datasetId: string;
    description: string | null;
    instance_prompt: string;
    modelType: string;
    name: string;
    nsfw: boolean | null;
    resolution: number | null;
    sd_Version?: string | undefined;
    strength: string;
};

/** @internal */
export const CreateModelRequestBody$outboundSchema: z.ZodType<
    CreateModelRequestBody$Outbound,
    z.ZodTypeDef,
    CreateModelRequestBody
> = z
    .object({
        datasetId: z.string(),
        description: z.nullable(z.string().default("")),
        instancePrompt: z.string(),
        modelType: shared.CustomModelType$outboundSchema.default(shared.CustomModelType.General),
        name: z.string(),
        nsfw: z.nullable(z.boolean().default(false)),
        resolution: z.nullable(z.number().int().default(512)),
        sdVersion: shared.SdVersions$outboundSchema.optional(),
        strength: shared.Strength$outboundSchema.default(shared.Strength.Medium),
    })
    .transform((v) => {
        return remap$(v, {
            instancePrompt: "instance_prompt",
            sdVersion: "sd_Version",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModelRequestBody$ {
    /** @deprecated use `CreateModelRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateModelRequestBody$inboundSchema;
    /** @deprecated use `CreateModelRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateModelRequestBody$outboundSchema;
    /** @deprecated use `CreateModelRequestBody$Outbound` instead. */
    export type Outbound = CreateModelRequestBody$Outbound;
}

/** @internal */
export const SDTrainingOutput$inboundSchema: z.ZodType<SDTrainingOutput, z.ZodTypeDef, unknown> =
    z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        customModelId: z.string().optional(),
    });

/** @internal */
export type SDTrainingOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    customModelId?: string | undefined;
};

/** @internal */
export const SDTrainingOutput$outboundSchema: z.ZodType<
    SDTrainingOutput$Outbound,
    z.ZodTypeDef,
    SDTrainingOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    customModelId: z.string().optional(),
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

/** @internal */
export const CreateModelResponseBody$inboundSchema: z.ZodType<
    CreateModelResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    sdTrainingJob: z.nullable(z.lazy(() => SDTrainingOutput$inboundSchema)).optional(),
});

/** @internal */
export type CreateModelResponseBody$Outbound = {
    sdTrainingJob?: SDTrainingOutput$Outbound | null | undefined;
};

/** @internal */
export const CreateModelResponseBody$outboundSchema: z.ZodType<
    CreateModelResponseBody$Outbound,
    z.ZodTypeDef,
    CreateModelResponseBody
> = z.object({
    sdTrainingJob: z.nullable(z.lazy(() => SDTrainingOutput$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModelResponseBody$ {
    /** @deprecated use `CreateModelResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateModelResponseBody$inboundSchema;
    /** @deprecated use `CreateModelResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateModelResponseBody$outboundSchema;
    /** @deprecated use `CreateModelResponseBody$Outbound` instead. */
    export type Outbound = CreateModelResponseBody$Outbound;
}

/** @internal */
export const CreateModelResponse$inboundSchema: z.ZodType<
    CreateModelResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => CreateModelResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateModelResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: CreateModelResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateModelResponse$outboundSchema: z.ZodType<
    CreateModelResponse$Outbound,
    z.ZodTypeDef,
    CreateModelResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => CreateModelResponseBody$outboundSchema).optional(),
    })
    .transform((v) => {
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
export namespace CreateModelResponse$ {
    /** @deprecated use `CreateModelResponse$inboundSchema` instead. */
    export const inboundSchema = CreateModelResponse$inboundSchema;
    /** @deprecated use `CreateModelResponse$outboundSchema` instead. */
    export const outboundSchema = CreateModelResponse$outboundSchema;
    /** @deprecated use `CreateModelResponse$Outbound` instead. */
    export type Outbound = CreateModelResponse$Outbound;
}
