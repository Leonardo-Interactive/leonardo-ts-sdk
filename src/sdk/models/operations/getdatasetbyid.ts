/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDatasetByIdRequest = {
    /**
     * The ID of the dataset to return.
     */
    id: string;
};

/**
 * columns and relationships of "dataset_images"
 */
export type DatasetImages = {
    createdAt?: string | undefined;
    id?: string | null | undefined;
    url?: string | undefined;
};

/**
 * columns and relationships of "datasets"
 */
export type GetDatasetByIdDatasets = {
    createdAt?: string | undefined;
    datasetImages?: Array<DatasetImages> | undefined;
    description?: string | null | undefined;
    id?: string | null | undefined;
    name?: string | undefined;
    updatedAt?: string | undefined;
};

/**
 * Responses for GET /datasets/{id}
 */
export type GetDatasetByIdResponseBody = {
    /**
     * columns and relationships of "datasets"
     */
    datasetsByPk?: GetDatasetByIdDatasets | null | undefined;
};

export type GetDatasetByIdResponse = {
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
     * Responses for GET /datasets/{id}
     */
    object?: GetDatasetByIdResponseBody | undefined;
};

/** @internal */
export namespace GetDatasetByIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetDatasetByIdRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDatasetByIdRequest> = z
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
export namespace DatasetImages$ {
    export type Inbound = {
        createdAt?: string | undefined;
        id?: string | null | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DatasetImages, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DatasetImages> = z
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
export namespace GetDatasetByIdDatasets$ {
    export type Inbound = {
        createdAt?: string | undefined;
        dataset_images?: Array<DatasetImages$.Inbound> | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetDatasetByIdDatasets, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z.string().optional(),
            dataset_images: z.array(z.lazy(() => DatasetImages$.inboundSchema)).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.string().optional(),
            updatedAt: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.dataset_images === undefined ? null : { datasetImages: v.dataset_images }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        createdAt?: string | undefined;
        dataset_images?: Array<DatasetImages$.Outbound> | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDatasetByIdDatasets> = z
        .object({
            createdAt: z.string().optional(),
            datasetImages: z.array(z.lazy(() => DatasetImages$.outboundSchema)).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.string().optional(),
            updatedAt: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.datasetImages === undefined ? null : { dataset_images: v.datasetImages }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace GetDatasetByIdResponseBody$ {
    export type Inbound = {
        datasets_by_pk?: GetDatasetByIdDatasets$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetDatasetByIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            datasets_by_pk: z
                .nullable(z.lazy(() => GetDatasetByIdDatasets$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.datasets_by_pk === undefined ? null : { datasetsByPk: v.datasets_by_pk }),
            };
        });

    export type Outbound = {
        datasets_by_pk?: GetDatasetByIdDatasets$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDatasetByIdResponseBody> = z
        .object({
            datasetsByPk: z
                .nullable(z.lazy(() => GetDatasetByIdDatasets$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.datasetsByPk === undefined ? null : { datasets_by_pk: v.datasetsByPk }),
            };
        });
}

/** @internal */
export namespace GetDatasetByIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetDatasetByIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetDatasetByIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetDatasetByIdResponseBody$.inboundSchema).optional(),
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
        object?: GetDatasetByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDatasetByIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetDatasetByIdResponseBody$.outboundSchema).optional(),
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
