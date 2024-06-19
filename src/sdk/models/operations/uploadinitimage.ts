/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Query parameters provided in the request body as a JSON object
 */
export type UploadInitImageRequestBody = {
    /**
     * Has to be png, jpg, jpeg, or webp.
     */
    extension: string;
};

export type InitImageUploadOutput = {
    fields?: string | null | undefined;
    id?: string | null | undefined;
    key?: string | null | undefined;
    url?: string | null | undefined;
};

/**
 * Responses for POST /init-image
 */
export type UploadInitImageResponseBody = {
    uploadInitImage?: InitImageUploadOutput | null | undefined;
};

export type UploadInitImageResponse = {
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
     * Responses for POST /init-image
     */
    object?: UploadInitImageResponseBody | undefined;
};

/** @internal */
export namespace UploadInitImageRequestBody$ {
    export const inboundSchema: z.ZodType<UploadInitImageRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            extension: z.string(),
        });

    export type Outbound = {
        extension: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadInitImageRequestBody> =
        z.object({
            extension: z.string(),
        });
}

/** @internal */
export namespace InitImageUploadOutput$ {
    export const inboundSchema: z.ZodType<InitImageUploadOutput, z.ZodTypeDef, unknown> = z.object({
        fields: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        key: z.nullable(z.string()).optional(),
        url: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        fields?: string | null | undefined;
        id?: string | null | undefined;
        key?: string | null | undefined;
        url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InitImageUploadOutput> =
        z.object({
            fields: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            key: z.nullable(z.string()).optional(),
            url: z.nullable(z.string()).optional(),
        });
}

/** @internal */
export namespace UploadInitImageResponseBody$ {
    export const inboundSchema: z.ZodType<UploadInitImageResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            uploadInitImage: z
                .nullable(z.lazy(() => InitImageUploadOutput$.inboundSchema))
                .optional(),
        });

    export type Outbound = {
        uploadInitImage?: InitImageUploadOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadInitImageResponseBody> =
        z.object({
            uploadInitImage: z
                .nullable(z.lazy(() => InitImageUploadOutput$.outboundSchema))
                .optional(),
        });
}

/** @internal */
export namespace UploadInitImageResponse$ {
    export const inboundSchema: z.ZodType<UploadInitImageResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UploadInitImageResponseBody$.inboundSchema).optional(),
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
        object?: UploadInitImageResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadInitImageResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UploadInitImageResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
