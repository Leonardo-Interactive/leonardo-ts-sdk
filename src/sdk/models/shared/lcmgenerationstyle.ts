/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The style to generate LCM images with.
 */
export enum LcmGenerationStyle {
  Anime = "ANIME",
  Cinematic = "CINEMATIC",
  DigitalArt = "DIGITAL_ART",
  Dynamic = "DYNAMIC",
  Environment = "ENVIRONMENT",
  FantasyArt = "FANTASY_ART",
  Illustration = "ILLUSTRATION",
  Photography = "PHOTOGRAPHY",
  Render3D = "RENDER_3D",
  Raytraced = "RAYTRACED",
  SketchBw = "SKETCH_BW",
  SketchColor = "SKETCH_COLOR",
  Vibrant = "VIBRANT",
  None = "NONE",
}

/** @internal */
export const LcmGenerationStyle$inboundSchema: z.ZodNativeEnum<
  typeof LcmGenerationStyle
> = z.nativeEnum(LcmGenerationStyle);

/** @internal */
export const LcmGenerationStyle$outboundSchema: z.ZodNativeEnum<
  typeof LcmGenerationStyle
> = LcmGenerationStyle$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LcmGenerationStyle$ {
  /** @deprecated use `LcmGenerationStyle$inboundSchema` instead. */
  export const inboundSchema = LcmGenerationStyle$inboundSchema;
  /** @deprecated use `LcmGenerationStyle$outboundSchema` instead. */
  export const outboundSchema = LcmGenerationStyle$outboundSchema;
}
