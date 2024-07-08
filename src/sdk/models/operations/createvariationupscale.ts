/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export type CreateVariationUpscaleRequestBody = {
    id: string;
};

export type CreateVariationUpscaleSDUpscaleJobOutput = {
    /**
     * API Credits Cost for Upscale Variation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    id?: string | undefined;
};

/**
 * Responses for POST /variations/upscale
 */
export type CreateVariationUpscaleResponseBody = {
    sdUpscaleJob?: CreateVariationUpscaleSDUpscaleJobOutput | null | undefined;
};

export type CreateVariationUpscaleResponse = {
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
     * Responses for POST /variations/upscale
     */
    object?: CreateVariationUpscaleResponseBody | undefined;
};

/** @internal */
export const CreateVariationUpscaleRequestBody$inboundSchema: z.ZodType<
    CreateVariationUpscaleRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type CreateVariationUpscaleRequestBody$Outbound = {
    id: string;
};

/** @internal */
export const CreateVariationUpscaleRequestBody$outboundSchema: z.ZodType<
    CreateVariationUpscaleRequestBody$Outbound,
    z.ZodTypeDef,
    CreateVariationUpscaleRequestBody
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationUpscaleRequestBody$ {
    /** @deprecated use `CreateVariationUpscaleRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUpscaleRequestBody$inboundSchema;
    /** @deprecated use `CreateVariationUpscaleRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUpscaleRequestBody$outboundSchema;
    /** @deprecated use `CreateVariationUpscaleRequestBody$Outbound` instead. */
    export type Outbound = CreateVariationUpscaleRequestBody$Outbound;
}

/** @internal */
export const CreateVariationUpscaleSDUpscaleJobOutput$inboundSchema: z.ZodType<
    CreateVariationUpscaleSDUpscaleJobOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    id: z.string().optional(),
});

/** @internal */
export type CreateVariationUpscaleSDUpscaleJobOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    id?: string | undefined;
};

/** @internal */
export const CreateVariationUpscaleSDUpscaleJobOutput$outboundSchema: z.ZodType<
    CreateVariationUpscaleSDUpscaleJobOutput$Outbound,
    z.ZodTypeDef,
    CreateVariationUpscaleSDUpscaleJobOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationUpscaleSDUpscaleJobOutput$ {
    /** @deprecated use `CreateVariationUpscaleSDUpscaleJobOutput$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUpscaleSDUpscaleJobOutput$inboundSchema;
    /** @deprecated use `CreateVariationUpscaleSDUpscaleJobOutput$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUpscaleSDUpscaleJobOutput$outboundSchema;
    /** @deprecated use `CreateVariationUpscaleSDUpscaleJobOutput$Outbound` instead. */
    export type Outbound = CreateVariationUpscaleSDUpscaleJobOutput$Outbound;
}

/** @internal */
export const CreateVariationUpscaleResponseBody$inboundSchema: z.ZodType<
    CreateVariationUpscaleResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    sdUpscaleJob: z
        .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$inboundSchema))
        .optional(),
});

/** @internal */
export type CreateVariationUpscaleResponseBody$Outbound = {
    sdUpscaleJob?: CreateVariationUpscaleSDUpscaleJobOutput$Outbound | null | undefined;
};

/** @internal */
export const CreateVariationUpscaleResponseBody$outboundSchema: z.ZodType<
    CreateVariationUpscaleResponseBody$Outbound,
    z.ZodTypeDef,
    CreateVariationUpscaleResponseBody
> = z.object({
    sdUpscaleJob: z
        .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationUpscaleResponseBody$ {
    /** @deprecated use `CreateVariationUpscaleResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUpscaleResponseBody$inboundSchema;
    /** @deprecated use `CreateVariationUpscaleResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUpscaleResponseBody$outboundSchema;
    /** @deprecated use `CreateVariationUpscaleResponseBody$Outbound` instead. */
    export type Outbound = CreateVariationUpscaleResponseBody$Outbound;
}

/** @internal */
export const CreateVariationUpscaleResponse$inboundSchema: z.ZodType<
    CreateVariationUpscaleResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => CreateVariationUpscaleResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateVariationUpscaleResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: CreateVariationUpscaleResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateVariationUpscaleResponse$outboundSchema: z.ZodType<
    CreateVariationUpscaleResponse$Outbound,
    z.ZodTypeDef,
    CreateVariationUpscaleResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => CreateVariationUpscaleResponseBody$outboundSchema).optional(),
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
export namespace CreateVariationUpscaleResponse$ {
    /** @deprecated use `CreateVariationUpscaleResponse$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUpscaleResponse$inboundSchema;
    /** @deprecated use `CreateVariationUpscaleResponse$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUpscaleResponse$outboundSchema;
    /** @deprecated use `CreateVariationUpscaleResponse$Outbound` instead. */
    export type Outbound = CreateVariationUpscaleResponse$Outbound;
}
