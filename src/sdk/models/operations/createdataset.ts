/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type CreateDatasetRequestBody = {
    /**
     * A description for the dataset.
     */
    description?: string | null | undefined;
    /**
     * The name of the dataset.
     */
    name: string;
};

/**
 * columns and relationships of "datasets"
 */
export type Datasets = {
    id?: string | null | undefined;
};

/**
 * Responses for POST /datasets
 */
export type CreateDatasetResponseBody = {
    /**
     * columns and relationships of "datasets"
     */
    insertDatasetsOne?: Datasets | null | undefined;
};

export type CreateDatasetResponse = {
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
     * Responses for POST /datasets
     */
    object?: CreateDatasetResponseBody | undefined;
};

/** @internal */
export namespace CreateDatasetRequestBody$ {
    export type Inbound = {
        description?: string | null | undefined;
        name: string;
    };

    export const inboundSchema: z.ZodType<CreateDatasetRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.nullable(z.string()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                name: v.name,
            };
        });

    export type Outbound = {
        description?: string | null | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDatasetRequestBody> = z
        .object({
            description: z.nullable(z.string()).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                name: v.name,
            };
        });
}

/** @internal */
export namespace Datasets$ {
    export type Inbound = {
        id?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Datasets, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Datasets> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace CreateDatasetResponseBody$ {
    export type Inbound = {
        insert_datasets_one?: Datasets$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<CreateDatasetResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            insert_datasets_one: z.nullable(z.lazy(() => Datasets$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.insert_datasets_one === undefined
                    ? null
                    : { insertDatasetsOne: v.insert_datasets_one }),
            };
        });

    export type Outbound = {
        insert_datasets_one?: Datasets$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDatasetResponseBody> = z
        .object({
            insertDatasetsOne: z.nullable(z.lazy(() => Datasets$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.insertDatasetsOne === undefined
                    ? null
                    : { insert_datasets_one: v.insertDatasetsOne }),
            };
        });
}

/** @internal */
export namespace CreateDatasetResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: CreateDatasetResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateDatasetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateDatasetResponseBody$.inboundSchema).optional(),
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
        object?: CreateDatasetResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDatasetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateDatasetResponseBody$.outboundSchema).optional(),
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
