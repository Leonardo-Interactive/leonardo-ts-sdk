/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type PostLcmInstantRefineRequestBody = {
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
     * How strongly the generated images should reflect the original image supplied in imageDataUrl. Must be a float between 0.1 and 1.
     */
    strength?: number | null | undefined;
    /**
     * The style to generate LCM images with.
     */
    style?: shared.LcmGenerationStyle | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    width?: number | null | undefined;
};

export type PostLcmInstantRefineLcmGenerationOutput = {
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
export type PostLcmInstantRefineResponseBody = {
    lcmGenerationJob?: PostLcmInstantRefineLcmGenerationOutput | null | undefined;
};

export type PostLcmInstantRefineResponse = {
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
    object?: PostLcmInstantRefineResponseBody | undefined;
};

/** @internal */
export namespace PostLcmInstantRefineRequestBody$ {
    export type Inbound = {
        guidance?: number | null | undefined;
        height?: number | null | undefined;
        imageDataUrl: string;
        prompt: string;
        requestTimestamp?: string | undefined;
        seed?: number | null | undefined;
        steps?: number | null | undefined;
        strength?: number | null | undefined;
        style?: shared.LcmGenerationStyle | undefined;
        width?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmInstantRefineRequestBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                guidance: z.nullable(z.number()).optional(),
                height: z.nullable(z.number().int().default(512)),
                imageDataUrl: z.string(),
                prompt: z.string(),
                requestTimestamp: z.string().optional(),
                seed: z.nullable(z.number().int()).optional(),
                steps: z.nullable(z.number().int()).optional(),
                strength: z.nullable(z.number()).optional(),
                style: shared.LcmGenerationStyle$.optional(),
                width: z.nullable(z.number().int().default(512)),
            })
            .transform((v) => {
                return {
                    ...(v.guidance === undefined ? null : { guidance: v.guidance }),
                    height: v.height,
                    imageDataUrl: v.imageDataUrl,
                    prompt: v.prompt,
                    ...(v.requestTimestamp === undefined
                        ? null
                        : { requestTimestamp: v.requestTimestamp }),
                    ...(v.seed === undefined ? null : { seed: v.seed }),
                    ...(v.steps === undefined ? null : { steps: v.steps }),
                    ...(v.strength === undefined ? null : { strength: v.strength }),
                    ...(v.style === undefined ? null : { style: v.style }),
                    width: v.width,
                };
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
        style?: shared.LcmGenerationStyle | undefined;
        width: number | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostLcmInstantRefineRequestBody
    > = z
        .object({
            guidance: z.nullable(z.number()).optional(),
            height: z.nullable(z.number().int().default(512)),
            imageDataUrl: z.string(),
            prompt: z.string(),
            requestTimestamp: z.string().optional(),
            seed: z.nullable(z.number().int()).optional(),
            steps: z.nullable(z.number().int()).optional(),
            strength: z.nullable(z.number()).optional(),
            style: shared.LcmGenerationStyle$.optional(),
            width: z.nullable(z.number().int().default(512)),
        })
        .transform((v) => {
            return {
                ...(v.guidance === undefined ? null : { guidance: v.guidance }),
                height: v.height,
                imageDataUrl: v.imageDataUrl,
                prompt: v.prompt,
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.steps === undefined ? null : { steps: v.steps }),
                ...(v.strength === undefined ? null : { strength: v.strength }),
                ...(v.style === undefined ? null : { style: v.style }),
                width: v.width,
            };
        });
}

/** @internal */
export namespace PostLcmInstantRefineLcmGenerationOutput$ {
    export type Inbound = {
        apiCreditCost?: number | null | undefined;
        imageDataUrl?: Array<string> | undefined;
        requestTimestamp?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostLcmInstantRefineLcmGenerationOutput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            imageDataUrl: z.array(z.string()).optional(),
            requestTimestamp: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.imageDataUrl === undefined ? null : { imageDataUrl: v.imageDataUrl }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
            };
        });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        imageDataUrl?: Array<string> | undefined;
        requestTimestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostLcmInstantRefineLcmGenerationOutput
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            imageDataUrl: z.array(z.string()).optional(),
            requestTimestamp: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.imageDataUrl === undefined ? null : { imageDataUrl: v.imageDataUrl }),
                ...(v.requestTimestamp === undefined
                    ? null
                    : { requestTimestamp: v.requestTimestamp }),
            };
        });
}

/** @internal */
export namespace PostLcmInstantRefineResponseBody$ {
    export type Inbound = {
        lcmGenerationJob?: PostLcmInstantRefineLcmGenerationOutput$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmInstantRefineResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                lcmGenerationJob: z
                    .nullable(z.lazy(() => PostLcmInstantRefineLcmGenerationOutput$.inboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.lcmGenerationJob === undefined
                        ? null
                        : { lcmGenerationJob: v.lcmGenerationJob }),
                };
            });

    export type Outbound = {
        lcmGenerationJob?: PostLcmInstantRefineLcmGenerationOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostLcmInstantRefineResponseBody
    > = z
        .object({
            lcmGenerationJob: z
                .nullable(z.lazy(() => PostLcmInstantRefineLcmGenerationOutput$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.lcmGenerationJob === undefined
                    ? null
                    : { lcmGenerationJob: v.lcmGenerationJob }),
            };
        });
}

/** @internal */
export namespace PostLcmInstantRefineResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostLcmInstantRefineResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostLcmInstantRefineResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostLcmInstantRefineResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: PostLcmInstantRefineResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostLcmInstantRefineResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostLcmInstantRefineResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
