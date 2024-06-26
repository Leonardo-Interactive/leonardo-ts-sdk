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
export namespace CreateVariationUpscaleRequestBody$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleRequestBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleRequestBody
    > = z.object({
        id: z.string(),
    });
}

/** @internal */
export namespace CreateVariationUpscaleSDUpscaleJobOutput$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleSDUpscaleJobOutput,
        z.ZodTypeDef,
        unknown
    > = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        id: z.string().optional(),
    });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleSDUpscaleJobOutput
    > = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        id: z.string().optional(),
    });
}

/** @internal */
export namespace CreateVariationUpscaleResponseBody$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        sdUpscaleJob: z
            .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$.inboundSchema))
            .optional(),
    });

    export type Outbound = {
        sdUpscaleJob?: CreateVariationUpscaleSDUpscaleJobOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleResponseBody
    > = z.object({
        sdUpscaleJob: z
            .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$.outboundSchema))
            .optional(),
    });
}

/** @internal */
export namespace CreateVariationUpscaleResponse$ {
    export const inboundSchema: z.ZodType<CreateVariationUpscaleResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateVariationUpscaleResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: CreateVariationUpscaleResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateVariationUpscaleResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => CreateVariationUpscaleResponseBody$.outboundSchema).optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    contentType: "ContentType",
                    statusCode: "StatusCode",
                    rawResponse: "RawResponse",
                });
            });
}
