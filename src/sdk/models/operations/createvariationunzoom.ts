/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type CreateVariationUnzoomRequestBody = {
    id?: string | undefined;
    isVariation?: boolean | null | undefined;
};

export type SDUnzoomOutput = {
    /**
     * API Credits Cost for Unzoom Variation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    id?: string | undefined;
};

/**
 * Responses for POST /api/rest/v1/variations/unzoom
 */
export type CreateVariationUnzoomResponseBody = {
    sdUnzoomJob?: SDUnzoomOutput | null | undefined;
};

export type CreateVariationUnzoomResponse = {
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
     * Responses for POST /api/rest/v1/variations/unzoom
     */
    object?: CreateVariationUnzoomResponseBody | undefined;
};

/** @internal */
export const CreateVariationUnzoomRequestBody$inboundSchema: z.ZodType<
    CreateVariationUnzoomRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string().optional(),
    isVariation: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type CreateVariationUnzoomRequestBody$Outbound = {
    id?: string | undefined;
    isVariation?: boolean | null | undefined;
};

/** @internal */
export const CreateVariationUnzoomRequestBody$outboundSchema: z.ZodType<
    CreateVariationUnzoomRequestBody$Outbound,
    z.ZodTypeDef,
    CreateVariationUnzoomRequestBody
> = z.object({
    id: z.string().optional(),
    isVariation: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationUnzoomRequestBody$ {
    /** @deprecated use `CreateVariationUnzoomRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUnzoomRequestBody$inboundSchema;
    /** @deprecated use `CreateVariationUnzoomRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUnzoomRequestBody$outboundSchema;
    /** @deprecated use `CreateVariationUnzoomRequestBody$Outbound` instead. */
    export type Outbound = CreateVariationUnzoomRequestBody$Outbound;
}

/** @internal */
export const SDUnzoomOutput$inboundSchema: z.ZodType<SDUnzoomOutput, z.ZodTypeDef, unknown> =
    z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        id: z.string().optional(),
    });

/** @internal */
export type SDUnzoomOutput$Outbound = {
    apiCreditCost?: number | null | undefined;
    id?: string | undefined;
};

/** @internal */
export const SDUnzoomOutput$outboundSchema: z.ZodType<
    SDUnzoomOutput$Outbound,
    z.ZodTypeDef,
    SDUnzoomOutput
> = z.object({
    apiCreditCost: z.nullable(z.number().int()).optional(),
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDUnzoomOutput$ {
    /** @deprecated use `SDUnzoomOutput$inboundSchema` instead. */
    export const inboundSchema = SDUnzoomOutput$inboundSchema;
    /** @deprecated use `SDUnzoomOutput$outboundSchema` instead. */
    export const outboundSchema = SDUnzoomOutput$outboundSchema;
    /** @deprecated use `SDUnzoomOutput$Outbound` instead. */
    export type Outbound = SDUnzoomOutput$Outbound;
}

/** @internal */
export const CreateVariationUnzoomResponseBody$inboundSchema: z.ZodType<
    CreateVariationUnzoomResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    sdUnzoomJob: z.nullable(z.lazy(() => SDUnzoomOutput$inboundSchema)).optional(),
});

/** @internal */
export type CreateVariationUnzoomResponseBody$Outbound = {
    sdUnzoomJob?: SDUnzoomOutput$Outbound | null | undefined;
};

/** @internal */
export const CreateVariationUnzoomResponseBody$outboundSchema: z.ZodType<
    CreateVariationUnzoomResponseBody$Outbound,
    z.ZodTypeDef,
    CreateVariationUnzoomResponseBody
> = z.object({
    sdUnzoomJob: z.nullable(z.lazy(() => SDUnzoomOutput$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVariationUnzoomResponseBody$ {
    /** @deprecated use `CreateVariationUnzoomResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUnzoomResponseBody$inboundSchema;
    /** @deprecated use `CreateVariationUnzoomResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUnzoomResponseBody$outboundSchema;
    /** @deprecated use `CreateVariationUnzoomResponseBody$Outbound` instead. */
    export type Outbound = CreateVariationUnzoomResponseBody$Outbound;
}

/** @internal */
export const CreateVariationUnzoomResponse$inboundSchema: z.ZodType<
    CreateVariationUnzoomResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => CreateVariationUnzoomResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateVariationUnzoomResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: CreateVariationUnzoomResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateVariationUnzoomResponse$outboundSchema: z.ZodType<
    CreateVariationUnzoomResponse$Outbound,
    z.ZodTypeDef,
    CreateVariationUnzoomResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => CreateVariationUnzoomResponseBody$outboundSchema).optional(),
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
export namespace CreateVariationUnzoomResponse$ {
    /** @deprecated use `CreateVariationUnzoomResponse$inboundSchema` instead. */
    export const inboundSchema = CreateVariationUnzoomResponse$inboundSchema;
    /** @deprecated use `CreateVariationUnzoomResponse$outboundSchema` instead. */
    export const outboundSchema = CreateVariationUnzoomResponse$outboundSchema;
    /** @deprecated use `CreateVariationUnzoomResponse$Outbound` instead. */
    export type Outbound = CreateVariationUnzoomResponse$Outbound;
}
