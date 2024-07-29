/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type PerformInpaintingLCMRequestBody = {
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
     * Image data of the mask layer used for inpainting. In base64 format. Prefix: `data:image/jpeg;base64,`. Mask should be white on black where generation is applied to the white area.
     */
    maskDataUrl: string;
    /**
     * The prompt used to generate images
     */
    prompt: string;
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

export type PerformInpaintingLCMLCMGenerationOutput = {
    /**
     * API credits cost, available for Production API users.
     */
    apiCreditCost?: number | null | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
};

/**
 * Responses for POST /lcm-inpainting
 */
export type PerformInpaintingLCMResponseBody = {
    lcmGenerationJob?: PerformInpaintingLCMLCMGenerationOutput | null | undefined;
};

export type PerformInpaintingLCMResponse = {
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
     * Responses for POST /lcm-inpainting
     */
    object?: PerformInpaintingLCMResponseBody | undefined;
};

/** @internal */
export const PerformInpaintingLCMRequestBody$inboundSchema: z.ZodType<
    PerformInpaintingLCMRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    guidance: z.nullable(z.number()).optional(),
    height: z.nullable(z.number().int().default(512)),
    imageDataUrl: z.string(),
    maskDataUrl: z.string(),
    prompt: z.string(),
    requestTimestamp: z.string().optional(),
    seed: z.nullable(z.number().int()).optional(),
    steps: z.nullable(z.number().int()).optional(),
    strength: z.nullable(z.number()).optional(),
    style: z.nullable(shared.LcmGenerationStyle$inboundSchema).optional(),
    width: z.nullable(z.number().int().default(512)),
});

/** @internal */
export type PerformInpaintingLCMRequestBody$Outbound = {
    guidance?: number | null | undefined;
    height: number | null;
    imageDataUrl: string;
    maskDataUrl: string;
    prompt: string;
    requestTimestamp?: string | undefined;
    seed?: number | null | undefined;
    steps?: number | null | undefined;
    strength?: number | null | undefined;
    style?: string | null | undefined;
    width: number | null;
};

/** @internal */
export const PerformInpaintingLCMRequestBody$outboundSchema: z.ZodType<
    PerformInpaintingLCMRequestBody$Outbound,
    z.ZodTypeDef,
    PerformInpaintingLCMRequestBody
> = z.object({
    guidance: z.nullable(z.number()).optional(),
    height: z.nullable(z.number().int().default(512)),
    imageDataUrl: z.string(),
    maskDataUrl: z.string(),
    prompt: z.string(),
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
export namespace PerformInpaintingLCMRequestBody$ {
    /** @deprecated use `PerformInpaintingLCMRequestBody$inboundSchema` instead. */
    export const inboundSchema = PerformInpaintingLCMRequestBody$inboundSchema;
    /** @deprecated use `PerformInpaintingLCMRequestBody$outboundSchema` instead. */
    export const outboundSchema = PerformInpaintingLCMRequestBody$outboundSchema;
    /** @deprecated use `PerformInpaintingLCMRequestBody$Outbound` instead. */
    export type Outbound = PerformInpaintingLCMRequestBody$Outbound;
}

/** @internal */
export const PerformInpaintingLCMLCMGenerationOutput$inboundSchema: z.ZodType<
    PerformInpaintingLCMLCMGenerationOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    imageDataUrl: z.array(z.string()).optional(),
    requestTimestamp: z.string().optional(),
});

/** @internal */
export type PerformInpaintingLCMLCMGenerationOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
};

/** @internal */
export const PerformInpaintingLCMLCMGenerationOutput$outboundSchema: z.ZodType<
    PerformInpaintingLCMLCMGenerationOutput$Outbound,
    z.ZodTypeDef,
    PerformInpaintingLCMLCMGenerationOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    imageDataUrl: z.array(z.string()).optional(),
    requestTimestamp: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformInpaintingLCMLCMGenerationOutput$ {
    /** @deprecated use `PerformInpaintingLCMLCMGenerationOutput$inboundSchema` instead. */
    export const inboundSchema = PerformInpaintingLCMLCMGenerationOutput$inboundSchema;
    /** @deprecated use `PerformInpaintingLCMLCMGenerationOutput$outboundSchema` instead. */
    export const outboundSchema = PerformInpaintingLCMLCMGenerationOutput$outboundSchema;
    /** @deprecated use `PerformInpaintingLCMLCMGenerationOutput$Outbound` instead. */
    export type Outbound = PerformInpaintingLCMLCMGenerationOutput$Outbound;
}

/** @internal */
export const PerformInpaintingLCMResponseBody$inboundSchema: z.ZodType<
    PerformInpaintingLCMResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    lcmGenerationJob: z
        .nullable(z.lazy(() => PerformInpaintingLCMLCMGenerationOutput$inboundSchema))
        .optional(),
});

/** @internal */
export type PerformInpaintingLCMResponseBody$Outbound = {
    lcmGenerationJob?: PerformInpaintingLCMLCMGenerationOutput$Outbound | null | undefined;
};

/** @internal */
export const PerformInpaintingLCMResponseBody$outboundSchema: z.ZodType<
    PerformInpaintingLCMResponseBody$Outbound,
    z.ZodTypeDef,
    PerformInpaintingLCMResponseBody
> = z.object({
    lcmGenerationJob: z
        .nullable(z.lazy(() => PerformInpaintingLCMLCMGenerationOutput$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformInpaintingLCMResponseBody$ {
    /** @deprecated use `PerformInpaintingLCMResponseBody$inboundSchema` instead. */
    export const inboundSchema = PerformInpaintingLCMResponseBody$inboundSchema;
    /** @deprecated use `PerformInpaintingLCMResponseBody$outboundSchema` instead. */
    export const outboundSchema = PerformInpaintingLCMResponseBody$outboundSchema;
    /** @deprecated use `PerformInpaintingLCMResponseBody$Outbound` instead. */
    export type Outbound = PerformInpaintingLCMResponseBody$Outbound;
}

/** @internal */
export const PerformInpaintingLCMResponse$inboundSchema: z.ZodType<
    PerformInpaintingLCMResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => PerformInpaintingLCMResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type PerformInpaintingLCMResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PerformInpaintingLCMResponseBody$Outbound | undefined;
};

/** @internal */
export const PerformInpaintingLCMResponse$outboundSchema: z.ZodType<
    PerformInpaintingLCMResponse$Outbound,
    z.ZodTypeDef,
    PerformInpaintingLCMResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => PerformInpaintingLCMResponseBody$outboundSchema).optional(),
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
export namespace PerformInpaintingLCMResponse$ {
    /** @deprecated use `PerformInpaintingLCMResponse$inboundSchema` instead. */
    export const inboundSchema = PerformInpaintingLCMResponse$inboundSchema;
    /** @deprecated use `PerformInpaintingLCMResponse$outboundSchema` instead. */
    export const outboundSchema = PerformInpaintingLCMResponse$outboundSchema;
    /** @deprecated use `PerformInpaintingLCMResponse$Outbound` instead. */
    export type Outbound = PerformInpaintingLCMResponse$Outbound;
}
