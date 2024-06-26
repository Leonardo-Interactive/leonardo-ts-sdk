/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetModelByIdRequest = {
    /**
     * The ID of the custom model to return.
     */
    id: string;
};

/**
 * columns and relationships of "custom_models"
 */
export type GetModelByIdCustomModels = {
    createdAt?: string | undefined;
    description?: string | undefined;
    id?: string | null | undefined;
    instancePrompt?: string | null | undefined;
    modelHeight?: number | undefined;
    modelWidth?: number | undefined;
    name?: string | undefined;
    public?: boolean | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models
     */
    sdVersion?: shared.SdVersions | undefined;
    /**
     * The status of the current task.
     */
    status?: shared.JobStatus | undefined;
    /**
     * The category the most accurately reflects the model.
     */
    type?: shared.CustomModelType | undefined;
    updatedAt?: string | undefined;
};

/**
 * Responses for GET /models/{id}
 */
export type GetModelByIdResponseBody = {
    /**
     * columns and relationships of "custom_models"
     */
    customModelsByPk?: GetModelByIdCustomModels | null | undefined;
};

export type GetModelByIdResponse = {
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
     * Responses for GET /models/{id}
     */
    object?: GetModelByIdResponseBody | undefined;
};

/** @internal */
export namespace GetModelByIdRequest$ {
    export const inboundSchema: z.ZodType<GetModelByIdRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelByIdRequest> = z.object({
        id: z.string(),
    });
}

/** @internal */
export namespace GetModelByIdCustomModels$ {
    export const inboundSchema: z.ZodType<GetModelByIdCustomModels, z.ZodTypeDef, unknown> =
        z.object({
            createdAt: z.string().optional(),
            description: z.string().optional(),
            id: z.nullable(z.string()).optional(),
            instancePrompt: z.nullable(z.string()).optional(),
            modelHeight: z.number().int().optional(),
            modelWidth: z.number().int().optional(),
            name: z.string().optional(),
            public: z.boolean().optional(),
            sdVersion: shared.SdVersions$.inboundSchema.optional(),
            status: shared.JobStatus$.inboundSchema.optional(),
            type: shared.CustomModelType$.inboundSchema.default(shared.CustomModelType.General),
            updatedAt: z.string().optional(),
        });

    export type Outbound = {
        createdAt?: string | undefined;
        description?: string | undefined;
        id?: string | null | undefined;
        instancePrompt?: string | null | undefined;
        modelHeight?: number | undefined;
        modelWidth?: number | undefined;
        name?: string | undefined;
        public?: boolean | undefined;
        sdVersion?: string | undefined;
        status?: string | undefined;
        type: string;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelByIdCustomModels> =
        z.object({
            createdAt: z.string().optional(),
            description: z.string().optional(),
            id: z.nullable(z.string()).optional(),
            instancePrompt: z.nullable(z.string()).optional(),
            modelHeight: z.number().int().optional(),
            modelWidth: z.number().int().optional(),
            name: z.string().optional(),
            public: z.boolean().optional(),
            sdVersion: shared.SdVersions$.outboundSchema.optional(),
            status: shared.JobStatus$.outboundSchema.optional(),
            type: shared.CustomModelType$.outboundSchema.default(shared.CustomModelType.General),
            updatedAt: z.string().optional(),
        });
}

/** @internal */
export namespace GetModelByIdResponseBody$ {
    export const inboundSchema: z.ZodType<GetModelByIdResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            custom_models_by_pk: z
                .nullable(z.lazy(() => GetModelByIdCustomModels$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                custom_models_by_pk: "customModelsByPk",
            });
        });

    export type Outbound = {
        custom_models_by_pk?: GetModelByIdCustomModels$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelByIdResponseBody> = z
        .object({
            customModelsByPk: z
                .nullable(z.lazy(() => GetModelByIdCustomModels$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                customModelsByPk: "custom_models_by_pk",
            });
        });
}

/** @internal */
export namespace GetModelByIdResponse$ {
    export const inboundSchema: z.ZodType<GetModelByIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetModelByIdResponseBody$.inboundSchema).optional(),
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
        object?: GetModelByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetModelByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetModelByIdResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
