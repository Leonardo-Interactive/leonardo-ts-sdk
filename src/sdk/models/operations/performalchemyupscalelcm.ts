/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type PerformAlchemyUpscaleLCMRequestBody = {
    /**
     * How strongly the generation should reflect the prompt. Must be a float between 0.5 and 20.
     */
    guidance?: number | null | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    height?: number | null | undefined;
    /**
     * Image data used to generate image. In base64 format. Prefix: `data:image/jpeg;base64,`
     */
    imageDataUrl: string;
    /**
     * The prompt used to generate images
     */
    prompt: string;
    /**
     * Refine creative
     */
    refineCreative?: boolean | null | undefined;
    /**
     * Must be a float between 0.5 and 0.9.
     */
    refineStrength?: number | null | undefined;
    requestTimestamp?: string | undefined;
    seed?: number | null | undefined;
    /**
     * The number of steps to use for the generation. Must be between 4 and 16.
     */
    steps?: number | null | undefined;
    /**
     * Creativity strength of generation. Higher strength will deviate more from the original image supplied in imageDataUrl. Must be a float between 0.1 and 1.
     */
    strength?: number | null | undefined;
    /**
     * The style to generate LCM images with.
     */
    style?: shared.LcmGenerationStyle | null | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    width?: number | null | undefined;
};

export type PerformAlchemyUpscaleLCMLCMGenerationOutput = {
    /**
     * API credits cost, available for Production API users.
     */
    apiCreditCost?: number | null | undefined;
    generatedImageId?: string | undefined;
    generationId?: Array<string> | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
    variationId?: Array<string> | undefined;
};

/**
 * Responses for POST /lcm-upscale
 */
export type PerformAlchemyUpscaleLCMResponseBody = {
    lcmGenerationJob?: PerformAlchemyUpscaleLCMLCMGenerationOutput | null | undefined;
};

export type PerformAlchemyUpscaleLCMResponse = {
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
     * Responses for POST /lcm-upscale
     */
    object?: PerformAlchemyUpscaleLCMResponseBody | undefined;
};

/** @internal */
export const PerformAlchemyUpscaleLCMRequestBody$inboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    guidance: z.nullable(z.number()).optional(),
    height: z.nullable(z.number().int().default(512)),
    imageDataUrl: z.string(),
    prompt: z.string(),
    refineCreative: z.nullable(z.boolean()).optional(),
    refineStrength: z.nullable(z.number()).optional(),
    requestTimestamp: z.string().optional(),
    seed: z.nullable(z.number().int()).optional(),
    steps: z.nullable(z.number().int()).optional(),
    strength: z.nullable(z.number()).optional(),
    style: z.nullable(shared.LcmGenerationStyle$inboundSchema).optional(),
    width: z.nullable(z.number().int().default(512)),
});

/** @internal */
export type PerformAlchemyUpscaleLCMRequestBody$Outbound = {
    guidance?: number | null | undefined;
    height: number | null;
    imageDataUrl: string;
    prompt: string;
    refineCreative?: boolean | null | undefined;
    refineStrength?: number | null | undefined;
    requestTimestamp?: string | undefined;
    seed?: number | null | undefined;
    steps?: number | null | undefined;
    strength?: number | null | undefined;
    style?: string | null | undefined;
    width: number | null;
};

/** @internal */
export const PerformAlchemyUpscaleLCMRequestBody$outboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMRequestBody$Outbound,
    z.ZodTypeDef,
    PerformAlchemyUpscaleLCMRequestBody
> = z.object({
    guidance: z.nullable(z.number()).optional(),
    height: z.nullable(z.number().int().default(512)),
    imageDataUrl: z.string(),
    prompt: z.string(),
    refineCreative: z.nullable(z.boolean()).optional(),
    refineStrength: z.nullable(z.number()).optional(),
    requestTimestamp: z.string().optional(),
    seed: z.nullable(z.number().int()).optional(),
    steps: z.nullable(z.number().int()).optional(),
    strength: z.nullable(z.number()).optional(),
    style: z.nullable(shared.LcmGenerationStyle$outboundSchema).optional(),
    width: z.nullable(z.number().int().default(512)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformAlchemyUpscaleLCMRequestBody$ {
    /** @deprecated use `PerformAlchemyUpscaleLCMRequestBody$inboundSchema` instead. */
    export const inboundSchema = PerformAlchemyUpscaleLCMRequestBody$inboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMRequestBody$outboundSchema` instead. */
    export const outboundSchema = PerformAlchemyUpscaleLCMRequestBody$outboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMRequestBody$Outbound` instead. */
    export type Outbound = PerformAlchemyUpscaleLCMRequestBody$Outbound;
}

/** @internal */
export const PerformAlchemyUpscaleLCMLCMGenerationOutput$inboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMLCMGenerationOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    generatedImageId: z.string().optional(),
    generationId: z.array(z.string()).optional(),
    imageDataUrl: z.array(z.string()).optional(),
    requestTimestamp: z.string().optional(),
    variationId: z.array(z.string()).optional(),
});

/** @internal */
export type PerformAlchemyUpscaleLCMLCMGenerationOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    generatedImageId?: string | undefined;
    generationId?: Array<string> | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
    variationId?: Array<string> | undefined;
};

/** @internal */
export const PerformAlchemyUpscaleLCMLCMGenerationOutput$outboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMLCMGenerationOutput$Outbound,
    z.ZodTypeDef,
    PerformAlchemyUpscaleLCMLCMGenerationOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    generatedImageId: z.string().optional(),
    generationId: z.array(z.string()).optional(),
    imageDataUrl: z.array(z.string()).optional(),
    requestTimestamp: z.string().optional(),
    variationId: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformAlchemyUpscaleLCMLCMGenerationOutput$ {
    /** @deprecated use `PerformAlchemyUpscaleLCMLCMGenerationOutput$inboundSchema` instead. */
    export const inboundSchema = PerformAlchemyUpscaleLCMLCMGenerationOutput$inboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMLCMGenerationOutput$outboundSchema` instead. */
    export const outboundSchema = PerformAlchemyUpscaleLCMLCMGenerationOutput$outboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMLCMGenerationOutput$Outbound` instead. */
    export type Outbound = PerformAlchemyUpscaleLCMLCMGenerationOutput$Outbound;
}

/** @internal */
export const PerformAlchemyUpscaleLCMResponseBody$inboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    lcmGenerationJob: z
        .nullable(z.lazy(() => PerformAlchemyUpscaleLCMLCMGenerationOutput$inboundSchema))
        .optional(),
});

/** @internal */
export type PerformAlchemyUpscaleLCMResponseBody$Outbound = {
    lcmGenerationJob?: PerformAlchemyUpscaleLCMLCMGenerationOutput$Outbound | null | undefined;
};

/** @internal */
export const PerformAlchemyUpscaleLCMResponseBody$outboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMResponseBody$Outbound,
    z.ZodTypeDef,
    PerformAlchemyUpscaleLCMResponseBody
> = z.object({
    lcmGenerationJob: z
        .nullable(z.lazy(() => PerformAlchemyUpscaleLCMLCMGenerationOutput$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformAlchemyUpscaleLCMResponseBody$ {
    /** @deprecated use `PerformAlchemyUpscaleLCMResponseBody$inboundSchema` instead. */
    export const inboundSchema = PerformAlchemyUpscaleLCMResponseBody$inboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMResponseBody$outboundSchema` instead. */
    export const outboundSchema = PerformAlchemyUpscaleLCMResponseBody$outboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMResponseBody$Outbound` instead. */
    export type Outbound = PerformAlchemyUpscaleLCMResponseBody$Outbound;
}

/** @internal */
export const PerformAlchemyUpscaleLCMResponse$inboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => PerformAlchemyUpscaleLCMResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type PerformAlchemyUpscaleLCMResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PerformAlchemyUpscaleLCMResponseBody$Outbound | undefined;
};

/** @internal */
export const PerformAlchemyUpscaleLCMResponse$outboundSchema: z.ZodType<
    PerformAlchemyUpscaleLCMResponse$Outbound,
    z.ZodTypeDef,
    PerformAlchemyUpscaleLCMResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => PerformAlchemyUpscaleLCMResponseBody$outboundSchema).optional(),
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
export namespace PerformAlchemyUpscaleLCMResponse$ {
    /** @deprecated use `PerformAlchemyUpscaleLCMResponse$inboundSchema` instead. */
    export const inboundSchema = PerformAlchemyUpscaleLCMResponse$inboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMResponse$outboundSchema` instead. */
    export const outboundSchema = PerformAlchemyUpscaleLCMResponse$outboundSchema;
    /** @deprecated use `PerformAlchemyUpscaleLCMResponse$Outbound` instead. */
    export type Outbound = PerformAlchemyUpscaleLCMResponse$Outbound;
}
