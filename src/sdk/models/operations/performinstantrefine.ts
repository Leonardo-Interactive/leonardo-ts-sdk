/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type PerformInstantRefineRequestBody = {
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

export type PerformInstantRefineLcmGenerationOutput = {
    /**
     * API credits cost, available for Production API users.
     */
    apiCreditCost?: number | null | undefined;
    imageDataUrl?: Array<string> | undefined;
    requestTimestamp?: string | undefined;
};

/**
 * Responses for POST /lcm-instant-refine
 */
export type PerformInstantRefineResponseBody = {
    lcmGenerationJob?: PerformInstantRefineLcmGenerationOutput | null | undefined;
};

export type PerformInstantRefineResponse = {
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
     * Responses for POST /lcm-instant-refine
     */
    object?: PerformInstantRefineResponseBody | undefined;
};

/** @internal */
export namespace PerformInstantRefineRequestBody$ {
    export const inboundSchema: z.ZodType<PerformInstantRefineRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            guidance: z.nullable(z.number()).optional(),
            height: z.nullable(z.number().int().default(512)),
            imageDataUrl: z.string(),
            prompt: z.string(),
            requestTimestamp: z.string().optional(),
            seed: z.nullable(z.number().int()).optional(),
            steps: z.nullable(z.number().int()).optional(),
            strength: z.nullable(z.number()).optional(),
            style: z.nullable(shared.LcmGenerationStyle$.inboundSchema).optional(),
            width: z.nullable(z.number().int().default(512)),
        });

    export type Outbound = {
        guidance?: number | null | undefined;
        height: number | null;
        imageDataUrl: string;
        prompt: string;
        requestTimestamp?: string | undefined;
        seed?: number | null | undefined;
        steps?: number | null | undefined;
        strength?: number | null | undefined;
        style?: string | null | undefined;
        width: number | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PerformInstantRefineRequestBody
    > = z.object({
        guidance: z.nullable(z.number()).optional(),
        height: z.nullable(z.number().int().default(512)),
        imageDataUrl: z.string(),
        prompt: z.string(),
        requestTimestamp: z.string().optional(),
        seed: z.nullable(z.number().int()).optional(),
        steps: z.nullable(z.number().int()).optional(),
        strength: z.nullable(z.number()).optional(),
        style: z.nullable(shared.LcmGenerationStyle$.outboundSchema).optional(),
        width: z.nullable(z.number().int().default(512)),
    });
}

/** @internal */
export namespace PerformInstantRefineLcmGenerationOutput$ {
    export const inboundSchema: z.ZodType<
        PerformInstantRefineLcmGenerationOutput,
        z.ZodTypeDef,
        unknown
    > = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        imageDataUrl: z.array(z.string()).optional(),
        requestTimestamp: z.string().optional(),
    });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        imageDataUrl?: Array<string> | undefined;
        requestTimestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PerformInstantRefineLcmGenerationOutput
    > = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        imageDataUrl: z.array(z.string()).optional(),
        requestTimestamp: z.string().optional(),
    });
}

/** @internal */
export namespace PerformInstantRefineResponseBody$ {
    export const inboundSchema: z.ZodType<PerformInstantRefineResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            lcmGenerationJob: z
                .nullable(z.lazy(() => PerformInstantRefineLcmGenerationOutput$.inboundSchema))
                .optional(),
        });

    export type Outbound = {
        lcmGenerationJob?: PerformInstantRefineLcmGenerationOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PerformInstantRefineResponseBody
    > = z.object({
        lcmGenerationJob: z
            .nullable(z.lazy(() => PerformInstantRefineLcmGenerationOutput$.outboundSchema))
            .optional(),
    });
}

/** @internal */
export namespace PerformInstantRefineResponse$ {
    export const inboundSchema: z.ZodType<PerformInstantRefineResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PerformInstantRefineResponseBody$.inboundSchema).optional(),
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
        object?: PerformInstantRefineResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformInstantRefineResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PerformInstantRefineResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
