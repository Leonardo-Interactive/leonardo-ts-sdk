/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

/**
 * columns and relationships of "elements"
 */
export type Loras = {
    /**
     * Unique identifier for the element. Elements can be found from the List Elements endpoint.
     */
    akUUID?: string | null | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    baseModel?: shared.SdVersions | undefined;
    /**
     * Name of the creator of the element
     */
    creatorName?: string | null | undefined;
    /**
     * Description for the element
     */
    description?: string | null | undefined;
    /**
     * Name of the element
     */
    name?: string | null | undefined;
    /**
     * URL of the element image
     */
    urlImage?: string | null | undefined;
    /**
     * Default weight for the element
     */
    weightDefault?: number | null | undefined;
    /**
     * Maximum weight for the element
     */
    weightMax?: number | null | undefined;
    /**
     * Minimum weight for the element
     */
    weightMin?: number | null | undefined;
};

/**
 * Responses for GET /api/rest/v1/elements
 */
export type GetElementsResponseBody = {
    loras?: Array<Loras> | undefined;
};

export type GetElementsResponse = {
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
     * Responses for GET /api/rest/v1/elements
     */
    object?: GetElementsResponseBody | undefined;
};

/** @internal */
export namespace Loras$ {
    export type Inbound = {
        akUUID?: string | null | undefined;
        baseModel?: shared.SdVersions | undefined;
        creatorName?: string | null | undefined;
        description?: string | null | undefined;
        name?: string | null | undefined;
        urlImage?: string | null | undefined;
        weightDefault?: number | null | undefined;
        weightMax?: number | null | undefined;
        weightMin?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<Loras, z.ZodTypeDef, Inbound> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            baseModel: shared.SdVersions$.optional(),
            creatorName: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            urlImage: z.nullable(z.string()).optional(),
            weightDefault: z.nullable(z.number().int()).optional(),
            weightMax: z.nullable(z.number().int()).optional(),
            weightMin: z.nullable(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.baseModel === undefined ? null : { baseModel: v.baseModel }),
                ...(v.creatorName === undefined ? null : { creatorName: v.creatorName }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.urlImage === undefined ? null : { urlImage: v.urlImage }),
                ...(v.weightDefault === undefined ? null : { weightDefault: v.weightDefault }),
                ...(v.weightMax === undefined ? null : { weightMax: v.weightMax }),
                ...(v.weightMin === undefined ? null : { weightMin: v.weightMin }),
            };
        });

    export type Outbound = {
        akUUID?: string | null | undefined;
        baseModel?: shared.SdVersions | undefined;
        creatorName?: string | null | undefined;
        description?: string | null | undefined;
        name?: string | null | undefined;
        urlImage?: string | null | undefined;
        weightDefault?: number | null | undefined;
        weightMax?: number | null | undefined;
        weightMin?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Loras> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            baseModel: shared.SdVersions$.optional(),
            creatorName: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            urlImage: z.nullable(z.string()).optional(),
            weightDefault: z.nullable(z.number().int()).optional(),
            weightMax: z.nullable(z.number().int()).optional(),
            weightMin: z.nullable(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.baseModel === undefined ? null : { baseModel: v.baseModel }),
                ...(v.creatorName === undefined ? null : { creatorName: v.creatorName }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.urlImage === undefined ? null : { urlImage: v.urlImage }),
                ...(v.weightDefault === undefined ? null : { weightDefault: v.weightDefault }),
                ...(v.weightMax === undefined ? null : { weightMax: v.weightMax }),
                ...(v.weightMin === undefined ? null : { weightMin: v.weightMin }),
            };
        });
}

/** @internal */
export namespace GetElementsResponseBody$ {
    export type Inbound = {
        loras?: Array<Loras$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetElementsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            loras: z.array(z.lazy(() => Loras$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.loras === undefined ? null : { loras: v.loras }),
            };
        });

    export type Outbound = {
        loras?: Array<Loras$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetElementsResponseBody> = z
        .object({
            loras: z.array(z.lazy(() => Loras$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.loras === undefined ? null : { loras: v.loras }),
            };
        });
}

/** @internal */
export namespace GetElementsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetElementsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetElementsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetElementsResponseBody$.inboundSchema).optional(),
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
        object?: GetElementsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetElementsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetElementsResponseBody$.outboundSchema).optional(),
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
