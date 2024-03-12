/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type UploadDatasetImageFromGenRequestBody = {
    /**
     * The ID of the image to upload to the dataset.
     */
    generatedImageId: string;
};

export type UploadDatasetImageFromGenRequest = {
    /**
     * Query parameters to be provided in the request body as a JSON object
     */
    requestBody: UploadDatasetImageFromGenRequestBody;
    /**
     * The ID of the dataset to upload the image to.
     */
    datasetId: string;
};

export type DatasetGenUploadOutput = {
    id?: string | null | undefined;
};

/**
 * Responses for POST /datasets/{datasetId}/upload/gen
 */
export type UploadDatasetImageFromGenResponseBody = {
    uploadDatasetImageFromGen?: DatasetGenUploadOutput | null | undefined;
};

export type UploadDatasetImageFromGenResponse = {
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
     * Responses for POST /datasets/{datasetId}/upload/gen
     */
    object?: UploadDatasetImageFromGenResponseBody | undefined;
};

/** @internal */
export namespace UploadDatasetImageFromGenRequestBody$ {
    export type Inbound = {
        generatedImageId: string;
    };

    export const inboundSchema: z.ZodType<
        UploadDatasetImageFromGenRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            generatedImageId: z.string(),
        })
        .transform((v) => {
            return {
                generatedImageId: v.generatedImageId,
            };
        });

    export type Outbound = {
        generatedImageId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDatasetImageFromGenRequestBody
    > = z
        .object({
            generatedImageId: z.string(),
        })
        .transform((v) => {
            return {
                generatedImageId: v.generatedImageId,
            };
        });
}

/** @internal */
export namespace UploadDatasetImageFromGenRequest$ {
    export type Inbound = {
        RequestBody: UploadDatasetImageFromGenRequestBody$.Inbound;
        datasetId: string;
    };

    export const inboundSchema: z.ZodType<UploadDatasetImageFromGenRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                RequestBody: z.lazy(() => UploadDatasetImageFromGenRequestBody$.inboundSchema),
                datasetId: z.string(),
            })
            .transform((v) => {
                return {
                    requestBody: v.RequestBody,
                    datasetId: v.datasetId,
                };
            });

    export type Outbound = {
        RequestBody: UploadDatasetImageFromGenRequestBody$.Outbound;
        datasetId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDatasetImageFromGenRequest
    > = z
        .object({
            requestBody: z.lazy(() => UploadDatasetImageFromGenRequestBody$.outboundSchema),
            datasetId: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                datasetId: v.datasetId,
            };
        });
}

/** @internal */
export namespace DatasetGenUploadOutput$ {
    export type Inbound = {
        id?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<DatasetGenUploadOutput, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DatasetGenUploadOutput> = z
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
export namespace UploadDatasetImageFromGenResponseBody$ {
    export type Inbound = {
        uploadDatasetImageFromGen?: DatasetGenUploadOutput$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        UploadDatasetImageFromGenResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            uploadDatasetImageFromGen: z
                .nullable(z.lazy(() => DatasetGenUploadOutput$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.uploadDatasetImageFromGen === undefined
                    ? null
                    : { uploadDatasetImageFromGen: v.uploadDatasetImageFromGen }),
            };
        });

    export type Outbound = {
        uploadDatasetImageFromGen?: DatasetGenUploadOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDatasetImageFromGenResponseBody
    > = z
        .object({
            uploadDatasetImageFromGen: z
                .nullable(z.lazy(() => DatasetGenUploadOutput$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.uploadDatasetImageFromGen === undefined
                    ? null
                    : { uploadDatasetImageFromGen: v.uploadDatasetImageFromGen }),
            };
        });
}

/** @internal */
export namespace UploadDatasetImageFromGenResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: UploadDatasetImageFromGenResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UploadDatasetImageFromGenResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UploadDatasetImageFromGenResponseBody$.inboundSchema).optional(),
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
        object?: UploadDatasetImageFromGenResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDatasetImageFromGenResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UploadDatasetImageFromGenResponseBody$.outboundSchema).optional(),
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
