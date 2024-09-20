/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The ultra style to upscale images using universal upscaler with. Can not be used with upscalerStyle.
 */
export enum UniversalUpscalerUltraStyle {
  Artistic = "ARTISTIC",
  Realistic = "REALISTIC",
}

/** @internal */
export const UniversalUpscalerUltraStyle$inboundSchema: z.ZodNativeEnum<
  typeof UniversalUpscalerUltraStyle
> = z.nativeEnum(UniversalUpscalerUltraStyle);

/** @internal */
export const UniversalUpscalerUltraStyle$outboundSchema: z.ZodNativeEnum<
  typeof UniversalUpscalerUltraStyle
> = UniversalUpscalerUltraStyle$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UniversalUpscalerUltraStyle$ {
  /** @deprecated use `UniversalUpscalerUltraStyle$inboundSchema` instead. */
  export const inboundSchema = UniversalUpscalerUltraStyle$inboundSchema;
  /** @deprecated use `UniversalUpscalerUltraStyle$outboundSchema` instead. */
  export const outboundSchema = UniversalUpscalerUltraStyle$outboundSchema;
}
