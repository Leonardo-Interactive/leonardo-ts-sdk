/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const Delete3DModelByIdRequestBody$inboundSchema: z.ZodType<
    Delete3DModelByIdRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.nullable(z.string()).optional(),
});

/** @internal */
export type Delete3DModelByIdRequestBody$Outbound = {
    id?: string | null | undefined;
};

/** @internal */
export const Delete3DModelByIdRequestBody$outboundSchema: z.ZodType<
    Delete3DModelByIdRequestBody$Outbound,
    z.ZodTypeDef,
    Delete3DModelByIdRequestBody
> = z.object({
    id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Delete3DModelByIdRequestBody$ {
    /** @deprecated use `Delete3DModelByIdRequestBody$inboundSchema` instead. */
    export const inboundSchema = Delete3DModelByIdRequestBody$inboundSchema;
    /** @deprecated use `Delete3DModelByIdRequestBody$outboundSchema` instead. */
    export const outboundSchema = Delete3DModelByIdRequestBody$outboundSchema;
    /** @deprecated use `Delete3DModelByIdRequestBody$Outbound` instead. */
    export type Outbound = Delete3DModelByIdRequestBody$Outbound;
}

/** @internal */
export const Delete3DModelByIdRequest$inboundSchema: z.ZodType<
    Delete3DModelByIdRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.lazy(() => Delete3DModelByIdRequestBody$inboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type Delete3DModelByIdRequest$Outbound = {
    RequestBody?: Delete3DModelByIdRequestBody$Outbound | undefined;
    id: string;
};

/** @internal */
export const Delete3DModelByIdRequest$outboundSchema: z.ZodType<
    Delete3DModelByIdRequest$Outbound,
    z.ZodTypeDef,
    Delete3DModelByIdRequest
> = z
    .object({
        requestBody: z.lazy(() => Delete3DModelByIdRequestBody$outboundSchema).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Delete3DModelByIdRequest$ {
    /** @deprecated use `Delete3DModelByIdRequest$inboundSchema` instead. */
    export const inboundSchema = Delete3DModelByIdRequest$inboundSchema;
    /** @deprecated use `Delete3DModelByIdRequest$outboundSchema` instead. */
    export const outboundSchema = Delete3DModelByIdRequest$outboundSchema;
    /** @deprecated use `Delete3DModelByIdRequest$Outbound` instead. */
    export type Outbound = Delete3DModelByIdRequest$Outbound;
}

/** @internal */
export const ModelAssets$inboundSchema: z.ZodType<ModelAssets, z.ZodTypeDef, unknown> = z.object({
    id: z.nullable(z.string()).optional(),
});

/** @internal */
export type ModelAssets$Outbound = {
    id?: string | null | undefined;
};

/** @internal */
export const ModelAssets$outboundSchema: z.ZodType<
    ModelAssets$Outbound,
    z.ZodTypeDef,
    ModelAssets
> = z.object({
    id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelAssets$ {
    /** @deprecated use `ModelAssets$inboundSchema` instead. */
    export const inboundSchema = ModelAssets$inboundSchema;
    /** @deprecated use `ModelAssets$outboundSchema` instead. */
    export const outboundSchema = ModelAssets$outboundSchema;
    /** @deprecated use `ModelAssets$Outbound` instead. */
    export type Outbound = ModelAssets$Outbound;
}

/** @internal */
export const Delete3DModelByIdResponseBody$inboundSchema: z.ZodType<
    Delete3DModelByIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        delete_model_assets_by_pk: z.nullable(z.lazy(() => ModelAssets$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            delete_model_assets_by_pk: "deleteModelAssetsByPk",
        });
    });

/** @internal */
export type Delete3DModelByIdResponseBody$Outbound = {
    delete_model_assets_by_pk?: ModelAssets$Outbound | null | undefined;
};

/** @internal */
export const Delete3DModelByIdResponseBody$outboundSchema: z.ZodType<
    Delete3DModelByIdResponseBody$Outbound,
    z.ZodTypeDef,
    Delete3DModelByIdResponseBody
> = z
    .object({
        deleteModelAssetsByPk: z.nullable(z.lazy(() => ModelAssets$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            deleteModelAssetsByPk: "delete_model_assets_by_pk",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Delete3DModelByIdResponseBody$ {
    /** @deprecated use `Delete3DModelByIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = Delete3DModelByIdResponseBody$inboundSchema;
    /** @deprecated use `Delete3DModelByIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = Delete3DModelByIdResponseBody$outboundSchema;
    /** @deprecated use `Delete3DModelByIdResponseBody$Outbound` instead. */
    export type Outbound = Delete3DModelByIdResponseBody$Outbound;
}

/** @internal */
export const Delete3DModelByIdResponse$inboundSchema: z.ZodType<
    Delete3DModelByIdResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => Delete3DModelByIdResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type Delete3DModelByIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: Delete3DModelByIdResponseBody$Outbound | undefined;
};

/** @internal */
export const Delete3DModelByIdResponse$outboundSchema: z.ZodType<
    Delete3DModelByIdResponse$Outbound,
    z.ZodTypeDef,
    Delete3DModelByIdResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => Delete3DModelByIdResponseBody$outboundSchema).optional(),
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
export namespace Delete3DModelByIdResponse$ {
    /** @deprecated use `Delete3DModelByIdResponse$inboundSchema` instead. */
    export const inboundSchema = Delete3DModelByIdResponse$inboundSchema;
    /** @deprecated use `Delete3DModelByIdResponse$outboundSchema` instead. */
    export const outboundSchema = Delete3DModelByIdResponse$outboundSchema;
    /** @deprecated use `Delete3DModelByIdResponse$Outbound` instead. */
    export type Outbound = Delete3DModelByIdResponse$Outbound;
}
