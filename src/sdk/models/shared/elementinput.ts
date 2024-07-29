/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ElementInput = {
    /**
     * Unique identifier for element. Elements can be found from the List Elements endpoint.
     */
    akUUID?: string | null | undefined;
    /**
     * Weight for the element
     */
    weight?: number | null | undefined;
};

/** @internal */
export const ElementInput$inboundSchema: z.ZodType<ElementInput, z.ZodTypeDef, unknown> = z.object({
    akUUID: z.nullable(z.string()).optional(),
    weight: z.nullable(z.number()).optional(),
});

/** @internal */
export type ElementInput$Outbound = {
    akUUID?: string | null | undefined;
    weight?: number | null | undefined;
};

/** @internal */
export const ElementInput$outboundSchema: z.ZodType<
    ElementInput$Outbound,
    z.ZodTypeDef,
    ElementInput
> = z.object({
    akUUID: z.nullable(z.string()).optional(),
    weight: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ElementInput$ {
    /** @deprecated use `ElementInput$inboundSchema` instead. */
    export const inboundSchema = ElementInput$inboundSchema;
    /** @deprecated use `ElementInput$outboundSchema` instead. */
    export const outboundSchema = ElementInput$outboundSchema;
    /** @deprecated use `ElementInput$Outbound` instead. */
    export type Outbound = ElementInput$Outbound;
}
