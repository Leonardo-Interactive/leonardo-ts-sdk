/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type Delete3DModelByIdRequestBody = {
    id?: string | null | undefined;
};

export type Delete3DModelByIdRequest = {
    /**
     * Query parameters can also be provided in the request body as a JSON object
     */
    requestBody?: Delete3DModelByIdRequestBody | undefined;
    /**
     * _"id" is required (enter it either in parameters or request body)_
     */
    id: string;
};

/**
 * columns and relationships of "model_assets"
 */
export type ModelAssets = {
    id?: string | null | undefined;
};

/**
 * Responses for DELETE /api/rest/v1/models-3d/{id}
 */
export type Delete3DModelByIdResponseBody = {
    /**
     * columns and relationships of "model_assets"
     */
    deleteModelAssetsByPk?: ModelAssets | null | undefined;
};

export type Delete3DModelByIdResponse = {
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
     * Responses for DELETE /api/rest/v1/models-3d/{id}
     */
    object?: Delete3DModelByIdResponseBody | undefined;
};

/** @internal */
export namespace Delete3DModelByIdRequestBody$ {
    export const inboundSchema: z.ZodType<Delete3DModelByIdRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            id: z.nullable(z.string()).optional(),
        });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Delete3DModelByIdRequestBody> =
        z.object({
            id: z.nullable(z.string()).optional(),
        });
}

/** @internal */
export namespace Delete3DModelByIdRequest$ {
    export const inboundSchema: z.ZodType<Delete3DModelByIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequestBody: z.lazy(() => Delete3DModelByIdRequestBody$.inboundSchema).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        RequestBody?: Delete3DModelByIdRequestBody$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Delete3DModelByIdRequest> = z
        .object({
            requestBody: z.lazy(() => Delete3DModelByIdRequestBody$.outboundSchema).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace ModelAssets$ {
    export const inboundSchema: z.ZodType<ModelAssets, z.ZodTypeDef, unknown> = z.object({
        id: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ModelAssets> = z.object({
        id: z.nullable(z.string()).optional(),
    });
}

/** @internal */
export namespace Delete3DModelByIdResponseBody$ {
    export const inboundSchema: z.ZodType<Delete3DModelByIdResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            delete_model_assets_by_pk: z
                .nullable(z.lazy(() => ModelAssets$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                delete_model_assets_by_pk: "deleteModelAssetsByPk",
            });
        });

    export type Outbound = {
        delete_model_assets_by_pk?: ModelAssets$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Delete3DModelByIdResponseBody> =
        z
            .object({
                deleteModelAssetsByPk: z
                    .nullable(z.lazy(() => ModelAssets$.outboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    deleteModelAssetsByPk: "delete_model_assets_by_pk",
                });
            });
}

/** @internal */
export namespace Delete3DModelByIdResponse$ {
    export const inboundSchema: z.ZodType<Delete3DModelByIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => Delete3DModelByIdResponseBody$.inboundSchema).optional(),
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
        object?: Delete3DModelByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Delete3DModelByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => Delete3DModelByIdResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
