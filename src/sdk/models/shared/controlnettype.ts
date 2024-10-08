/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * This parameter will be deprecated in September 2024. Please use the controlnets array instead.
 *
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export enum ControlnetType {
  Pose = "POSE",
  Canny = "CANNY",
  Depth = "DEPTH",
}

/** @internal */
export const ControlnetType$inboundSchema: z.ZodNativeEnum<
  typeof ControlnetType
> = z.nativeEnum(ControlnetType);

/** @internal */
export const ControlnetType$outboundSchema: z.ZodNativeEnum<
  typeof ControlnetType
> = ControlnetType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ControlnetType$ {
  /** @deprecated use `ControlnetType$inboundSchema` instead. */
  export const inboundSchema = ControlnetType$inboundSchema;
  /** @deprecated use `ControlnetType$outboundSchema` instead. */
  export const outboundSchema = ControlnetType$outboundSchema;
}
