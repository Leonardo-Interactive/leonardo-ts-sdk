/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export type CreateUniversalUpscalerJobRequestBody = {
    /**
     * The creativity strength of the universal upscaler, must be integer between 1 and 10
     */
    creativityStrength?: number | null | undefined;
    /**
     * The ID of the generated image
     */
    generatedImageId?: string | null | undefined;
    /**
     * The ID of the init image uploaded
     */
    initImageId?: string | null | undefined;
    /**
     * The prompt for the universal upscaler
     */
    prompt?: string | null | undefined;
    /**
     * The upscale multiplier of the universal upscaler, must be number between 1.00 and 2.00
     */
    upscaleMultiplier?: number | null | undefined;
    /**
     * The style to upscale images using universal upscaler with.
     */
    upscalerStyle?: shared.UniversalUpscalerStyle | null | undefined;
    /**
     * The ID of the variation image
     */
    variationId?: string | null | undefined;
};

export type UniversalUpscalerOutput = {
    /**
     * API Credits Cost for Universal Upscaler Variation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    id?: string | null | undefined;
};

/**
 * Responses for POST /variations/universal-upscaler
 */
export type CreateUniversalUpscalerJobResponseBody = {
    universalUpscaler?: UniversalUpscalerOutput | undefined;
};

export type CreateUniversalUpscalerJobResponse = {
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
     * Responses for POST /variations/universal-upscaler
     */
    object?: CreateUniversalUpscalerJobResponseBody | undefined;
};

/** @internal */
export const CreateUniversalUpscalerJobRequestBody$inboundSchema: z.ZodType<
    CreateUniversalUpscalerJobRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    creativityStrength: z.nullable(z.number().int().default(5)),
    generatedImageId: z.nullable(z.string()).optional(),
    initImageId: z.nullable(z.string()).optional(),
    prompt: z.nullable(z.string()).optional(),
    upscaleMultiplier: z.nullable(z.number().default(1.5)),
    upscalerStyle: z.nullable(
        shared.UniversalUpscalerStyle$inboundSchema.default(shared.UniversalUpscalerStyle.General)
    ),
    variationId: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateUniversalUpscalerJobRequestBody$Outbound = {
    creativityStrength: number | null;
    generatedImageId?: string | null | undefined;
    initImageId?: string | null | undefined;
    prompt?: string | null | undefined;
    upscaleMultiplier: number | null;
    upscalerStyle: string | null;
    variationId?: string | null | undefined;
};

/** @internal */
export const CreateUniversalUpscalerJobRequestBody$outboundSchema: z.ZodType<
    CreateUniversalUpscalerJobRequestBody$Outbound,
    z.ZodTypeDef,
    CreateUniversalUpscalerJobRequestBody
> = z.object({
    creativityStrength: z.nullable(z.number().int().default(5)),
    generatedImageId: z.nullable(z.string()).optional(),
    initImageId: z.nullable(z.string()).optional(),
    prompt: z.nullable(z.string()).optional(),
    upscaleMultiplier: z.nullable(z.number().default(1.5)),
    upscalerStyle: z.nullable(
        shared.UniversalUpscalerStyle$outboundSchema.default(shared.UniversalUpscalerStyle.General)
    ),
    variationId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUniversalUpscalerJobRequestBody$ {
    /** @deprecated use `CreateUniversalUpscalerJobRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateUniversalUpscalerJobRequestBody$inboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateUniversalUpscalerJobRequestBody$outboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobRequestBody$Outbound` instead. */
    export type Outbound = CreateUniversalUpscalerJobRequestBody$Outbound;
}

/** @internal */
export const UniversalUpscalerOutput$inboundSchema: z.ZodType<
    UniversalUpscalerOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    id: z.nullable(z.string()).optional(),
});

/** @internal */
export type UniversalUpscalerOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    id?: string | null | undefined;
};

/** @internal */
export const UniversalUpscalerOutput$outboundSchema: z.ZodType<
    UniversalUpscalerOutput$Outbound,
    z.ZodTypeDef,
    UniversalUpscalerOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UniversalUpscalerOutput$ {
    /** @deprecated use `UniversalUpscalerOutput$inboundSchema` instead. */
    export const inboundSchema = UniversalUpscalerOutput$inboundSchema;
    /** @deprecated use `UniversalUpscalerOutput$outboundSchema` instead. */
    export const outboundSchema = UniversalUpscalerOutput$outboundSchema;
    /** @deprecated use `UniversalUpscalerOutput$Outbound` instead. */
    export type Outbound = UniversalUpscalerOutput$Outbound;
}

/** @internal */
export const CreateUniversalUpscalerJobResponseBody$inboundSchema: z.ZodType<
    CreateUniversalUpscalerJobResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    universalUpscaler: z.lazy(() => UniversalUpscalerOutput$inboundSchema).optional(),
});

/** @internal */
export type CreateUniversalUpscalerJobResponseBody$Outbound = {
    universalUpscaler?: UniversalUpscalerOutput$Outbound | undefined;
};

/** @internal */
export const CreateUniversalUpscalerJobResponseBody$outboundSchema: z.ZodType<
    CreateUniversalUpscalerJobResponseBody$Outbound,
    z.ZodTypeDef,
    CreateUniversalUpscalerJobResponseBody
> = z.object({
    universalUpscaler: z.lazy(() => UniversalUpscalerOutput$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUniversalUpscalerJobResponseBody$ {
    /** @deprecated use `CreateUniversalUpscalerJobResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateUniversalUpscalerJobResponseBody$inboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateUniversalUpscalerJobResponseBody$outboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobResponseBody$Outbound` instead. */
    export type Outbound = CreateUniversalUpscalerJobResponseBody$Outbound;
}

/** @internal */
export const CreateUniversalUpscalerJobResponse$inboundSchema: z.ZodType<
    CreateUniversalUpscalerJobResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => CreateUniversalUpscalerJobResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateUniversalUpscalerJobResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: CreateUniversalUpscalerJobResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateUniversalUpscalerJobResponse$outboundSchema: z.ZodType<
    CreateUniversalUpscalerJobResponse$Outbound,
    z.ZodTypeDef,
    CreateUniversalUpscalerJobResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => CreateUniversalUpscalerJobResponseBody$outboundSchema).optional(),
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
export namespace CreateUniversalUpscalerJobResponse$ {
    /** @deprecated use `CreateUniversalUpscalerJobResponse$inboundSchema` instead. */
    export const inboundSchema = CreateUniversalUpscalerJobResponse$inboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobResponse$outboundSchema` instead. */
    export const outboundSchema = CreateUniversalUpscalerJobResponse$outboundSchema;
    /** @deprecated use `CreateUniversalUpscalerJobResponse$Outbound` instead. */
    export type Outbound = CreateUniversalUpscalerJobResponse$Outbound;
}