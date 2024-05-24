/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of variation.
 */
export enum VariationType {
    Outpaint = "OUTPAINT",
    Inpaint = "INPAINT",
    Upscale = "UPSCALE",
    Unzoom = "UNZOOM",
    Nobg = "NOBG",
}

/** @internal */
export namespace VariationType$ {
    export const inboundSchema = z.nativeEnum(VariationType);

    export const outboundSchema = inboundSchema;
}
