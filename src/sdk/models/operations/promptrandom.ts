/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type PromptRandomPromptGenerationOutput = {
    /**
     * API Credits Cost for Random Prompt Generation. Available for Production API Users.
     */
    apiCreditCost?: number | undefined;
    /**
     * The random prompt generated.
     */
    prompt?: string | undefined;
};

/**
 * Responses for POST /prompt/random
 */
export type PromptRandomResponseBody = {
    promptGeneration?: PromptRandomPromptGenerationOutput | undefined;
};

export type PromptRandomResponse = {
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
     * Responses for POST /prompt/random
     */
    object?: PromptRandomResponseBody | undefined;
};

/** @internal */
export const PromptRandomPromptGenerationOutput$inboundSchema: z.ZodType<
    PromptRandomPromptGenerationOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiCreditCost: z.number().int().default(4),
    prompt: z.string().default("The random prompt generated."),
});

/** @internal */
export type PromptRandomPromptGenerationOutput$Outbound = {
    apiCreditCost: number;
    prompt: string;
};

/** @internal */
export const PromptRandomPromptGenerationOutput$outboundSchema: z.ZodType<
    PromptRandomPromptGenerationOutput$Outbound,
    z.ZodTypeDef,
    PromptRandomPromptGenerationOutput
> = z.object({
    apiCreditCost: z.number().int().default(4),
    prompt: z.string().default("The random prompt generated."),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptRandomPromptGenerationOutput$ {
    /** @deprecated use `PromptRandomPromptGenerationOutput$inboundSchema` instead. */
    export const inboundSchema = PromptRandomPromptGenerationOutput$inboundSchema;
    /** @deprecated use `PromptRandomPromptGenerationOutput$outboundSchema` instead. */
    export const outboundSchema = PromptRandomPromptGenerationOutput$outboundSchema;
    /** @deprecated use `PromptRandomPromptGenerationOutput$Outbound` instead. */
    export type Outbound = PromptRandomPromptGenerationOutput$Outbound;
}

/** @internal */
export const PromptRandomResponseBody$inboundSchema: z.ZodType<
    PromptRandomResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    promptGeneration: z.lazy(() => PromptRandomPromptGenerationOutput$inboundSchema).optional(),
});

/** @internal */
export type PromptRandomResponseBody$Outbound = {
    promptGeneration?: PromptRandomPromptGenerationOutput$Outbound | undefined;
};

/** @internal */
export const PromptRandomResponseBody$outboundSchema: z.ZodType<
    PromptRandomResponseBody$Outbound,
    z.ZodTypeDef,
    PromptRandomResponseBody
> = z.object({
    promptGeneration: z.lazy(() => PromptRandomPromptGenerationOutput$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PromptRandomResponseBody$ {
    /** @deprecated use `PromptRandomResponseBody$inboundSchema` instead. */
    export const inboundSchema = PromptRandomResponseBody$inboundSchema;
    /** @deprecated use `PromptRandomResponseBody$outboundSchema` instead. */
    export const outboundSchema = PromptRandomResponseBody$outboundSchema;
    /** @deprecated use `PromptRandomResponseBody$Outbound` instead. */
    export type Outbound = PromptRandomResponseBody$Outbound;
}

/** @internal */
export const PromptRandomResponse$inboundSchema: z.ZodType<
    PromptRandomResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => PromptRandomResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type PromptRandomResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PromptRandomResponseBody$Outbound | undefined;
};

/** @internal */
export const PromptRandomResponse$outboundSchema: z.ZodType<
    PromptRandomResponse$Outbound,
    z.ZodTypeDef,
    PromptRandomResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => PromptRandomResponseBody$outboundSchema).optional(),
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
export namespace PromptRandomResponse$ {
    /** @deprecated use `PromptRandomResponse$inboundSchema` instead. */
    export const inboundSchema = PromptRandomResponse$inboundSchema;
    /** @deprecated use `PromptRandomResponse$outboundSchema` instead. */
    export const outboundSchema = PromptRandomResponse$outboundSchema;
    /** @deprecated use `PromptRandomResponse$Outbound` instead. */
    export type Outbound = PromptRandomResponse$Outbound;
}
