/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetInitImageByIdRequest = {
    /**
     * _"id" is required_
     */
    id: string;
};

/**
 * columns and relationships of "init_images"
 */
export type GetInitImageByIdInitImages = {
    createdAt?: string | undefined;
    id?: string | null | undefined;
    url?: string | undefined;
};

/**
 * Responses for GET /init-image/{id}
 */
export type GetInitImageByIdResponseBody = {
    /**
     * columns and relationships of "init_images"
     */
    initImagesByPk?: GetInitImageByIdInitImages | null | undefined;
};

export type GetInitImageByIdResponse = {
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
     * Responses for GET /init-image/{id}
     */
    object?: GetInitImageByIdResponseBody | undefined;
};

/** @internal */
export namespace GetInitImageByIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetInitImageByIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInitImageByIdRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetInitImageByIdInitImages$ {
    export type Inbound = {
        createdAt?: string | undefined;
        id?: string | null | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetInitImageByIdInitImages, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z.string().optional(),
            id: z.nullable(z.string()).optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        createdAt?: string | undefined;
        id?: string | null | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInitImageByIdInitImages> = z
        .object({
            createdAt: z.string().optional(),
            id: z.nullable(z.string()).optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}

/** @internal */
export namespace GetInitImageByIdResponseBody$ {
    export type Inbound = {
        init_images_by_pk?: GetInitImageByIdInitImages$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetInitImageByIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            init_images_by_pk: z
                .nullable(z.lazy(() => GetInitImageByIdInitImages$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.init_images_by_pk === undefined
                    ? null
                    : { initImagesByPk: v.init_images_by_pk }),
            };
        });

    export type Outbound = {
        init_images_by_pk?: GetInitImageByIdInitImages$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInitImageByIdResponseBody> = z
        .object({
            initImagesByPk: z
                .nullable(z.lazy(() => GetInitImageByIdInitImages$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.initImagesByPk === undefined
                    ? null
                    : { init_images_by_pk: v.initImagesByPk }),
            };
        });
}

/** @internal */
export namespace GetInitImageByIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetInitImageByIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetInitImageByIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetInitImageByIdResponseBody$.inboundSchema).optional(),
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
        object?: GetInitImageByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInitImageByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetInitImageByIdResponseBody$.outboundSchema).optional(),
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
