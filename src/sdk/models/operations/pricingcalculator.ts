/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Parameters for FANTASY_AVATAR_GENERATION service
 */
export type PricingCalculatorObject = {
    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features
     */
    imageHeight?: number | undefined;
    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features
     */
    imageWidth?: number | undefined;
    /**
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    numImages?: number | undefined;
};

/**
 * Parameters for IMAGE_GENERATION service
 */
export type PricingCalculatorPricingCalculatorObject = {
    /**
     * Enable to use Alchemy.
     */
    alchemyMode?: boolean | undefined;
    /**
     * The total cost of controlnets input.
     */
    controlnetsCost?: number | null | undefined;
    /**
     * Enable to use high resolution.
     */
    highResolution?: boolean | undefined;
    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features
     */
    imageHeight?: number | undefined;
    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features
     */
    imageWidth?: number | undefined;
    /**
     * The Step Count to use for the generation. Must be between 10 and 60.
     */
    inferenceSteps?: number | undefined;
    /**
     * Enable to use custom model.
     */
    isModelCustom?: boolean | null | undefined;
    /**
     * Enable to use SDXL model.
     */
    isSDXL?: boolean | null | undefined;
    /**
     * Enable to use SDXL Lightning model.
     */
    isSDXLLightning?: boolean | null | undefined;
    /**
     * The number of elements used for the generation.
     */
    loraCount?: number | null | undefined;
    /**
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    numImages?: number | undefined;
    /**
     * Enable to use Prompt Magic.
     */
    promptMagic?: boolean | null | undefined;
    /**
     * Strength of prompt magic. Must be a float between 0.1 and 1.0
     */
    promptMagicStrength?: number | null | undefined;
    /**
     * Prompt magic version v2 or v3, for use when promptMagic: true
     */
    promptMagicVersion?: string | null | undefined;
};

/**
 * Parameters for LCM_GENERATION service
 */
export type PricingCalculatorPricingCalculatorRequestObject = {
    /**
     * The output height of the image. Must be 512, 640 or 1024.
     */
    height?: number | null | undefined;
    /**
     * Enable for instant upscale
     */
    instantRefine?: boolean | null | undefined;
    /**
     * Enable for normal alchemy upscale
     */
    refine?: boolean | null | undefined;
    /**
     * The output width of the image. Must be 512, 640 or 1024.
     */
    width?: number | null | undefined;
};

/**
 * Parameters for MODEL_TRAINING service
 */
export type PricingCalculatorPricingCalculatorRequestRequestBodyObject = {
    /**
     * The resolution for training. Must be 512 or 768.
     */
    resolution?: number | undefined;
};

/**
 * Parameters for MOTION_GENERATION service
 */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject = {
    /**
     * The total duration of the motion generation in seconds.
     */
    durationSeconds?: number | undefined;
};

/**
 * Parameters for TEXTURE_GENERATION service
 */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject =
    {
        preview?: boolean | undefined;
    };

/**
 * Parameters for UNIVERSAL_UPSCALER service
 */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject =
    {
        /**
         * The maximum upscaled image size is 20 megapixels.
         */
        megapixel?: number | undefined;
    };

/**
 * Parameters for the service
 */
export type ObjectT = {
    /**
     * Parameters for FANTASY_AVATAR_GENERATION service
     */
    fantasyAvatarGeneration?: PricingCalculatorObject | null | undefined;
    /**
     * Parameters for IMAGE_GENERATION service
     */
    imageGeneration?: PricingCalculatorPricingCalculatorObject | null | undefined;
    /**
     * Parameters for LCM_GENERATION service
     */
    lcmGeneration?: PricingCalculatorPricingCalculatorRequestObject | null | undefined;
    /**
     * Parameters for MODEL_TRAINING service
     */
    modelTraining?: PricingCalculatorPricingCalculatorRequestRequestBodyObject | null | undefined;
    /**
     * Parameters for MOTION_GENERATION service
     */
    motionGeneration?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject
        | null
        | undefined;
    /**
     * Parameters for TEXTURE_GENERATION service
     */
    textureGeneration?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject
        | null
        | undefined;
    /**
     * Parameters for UNIVERSAL_UPSCALER service
     */
    universalUpscaler?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject
        | null
        | undefined;
};

export type PricingCalculatorRequestBody = {
    /**
     * The services to be chosen for calculating the API credit cost.
     */
    service?: shared.PricingCalculatorServices | undefined;
    /**
     * Parameters for the service
     */
    serviceParams?: ObjectT | undefined;
};

export type CalculateProductionApiServiceCost = {
    /**
     * API service cost to generate the image.
     */
    cost?: number | undefined;
};

/**
 * Responses for POST /pricing-calculator
 */
export type PricingCalculatorResponseBody = {
    calculateProductionApiServiceCost?: CalculateProductionApiServiceCost | null | undefined;
};

export type PricingCalculatorResponse = {
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
     * Responses for POST /pricing-calculator
     */
    object?: PricingCalculatorResponseBody | undefined;
};

/** @internal */
export const PricingCalculatorObject$inboundSchema: z.ZodType<
    PricingCalculatorObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    imageHeight: z.number().int().optional(),
    imageWidth: z.number().int().optional(),
    numImages: z.number().int().optional(),
});

/** @internal */
export type PricingCalculatorObject$Outbound = {
    imageHeight?: number | undefined;
    imageWidth?: number | undefined;
    numImages?: number | undefined;
};

/** @internal */
export const PricingCalculatorObject$outboundSchema: z.ZodType<
    PricingCalculatorObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorObject
> = z.object({
    imageHeight: z.number().int().optional(),
    imageWidth: z.number().int().optional(),
    numImages: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorObject$ {
    /** @deprecated use `PricingCalculatorObject$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorObject$inboundSchema;
    /** @deprecated use `PricingCalculatorObject$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorObject$outboundSchema;
    /** @deprecated use `PricingCalculatorObject$Outbound` instead. */
    export type Outbound = PricingCalculatorObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    alchemyMode: z.boolean().optional(),
    controlnetsCost: z.nullable(z.number().int()).optional(),
    highResolution: z.boolean().optional(),
    imageHeight: z.number().int().optional(),
    imageWidth: z.number().int().optional(),
    inferenceSteps: z.number().int().optional(),
    isModelCustom: z.nullable(z.boolean()).optional(),
    isSDXL: z.nullable(z.boolean()).optional(),
    isSDXLLightning: z.nullable(z.boolean()).optional(),
    loraCount: z.nullable(z.number().int()).optional(),
    numImages: z.number().int().optional(),
    promptMagic: z.nullable(z.boolean()).optional(),
    promptMagicStrength: z.nullable(z.number()).optional(),
    promptMagicVersion: z.nullable(z.string()).optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorObject$Outbound = {
    alchemyMode?: boolean | undefined;
    controlnetsCost?: number | null | undefined;
    highResolution?: boolean | undefined;
    imageHeight?: number | undefined;
    imageWidth?: number | undefined;
    inferenceSteps?: number | undefined;
    isModelCustom?: boolean | null | undefined;
    isSDXL?: boolean | null | undefined;
    isSDXLLightning?: boolean | null | undefined;
    loraCount?: number | null | undefined;
    numImages?: number | undefined;
    promptMagic?: boolean | null | undefined;
    promptMagicStrength?: number | null | undefined;
    promptMagicVersion?: string | null | undefined;
};

/** @internal */
export const PricingCalculatorPricingCalculatorObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorObject
> = z.object({
    alchemyMode: z.boolean().optional(),
    controlnetsCost: z.nullable(z.number().int()).optional(),
    highResolution: z.boolean().optional(),
    imageHeight: z.number().int().optional(),
    imageWidth: z.number().int().optional(),
    inferenceSteps: z.number().int().optional(),
    isModelCustom: z.nullable(z.boolean()).optional(),
    isSDXL: z.nullable(z.boolean()).optional(),
    isSDXLLightning: z.nullable(z.boolean()).optional(),
    loraCount: z.nullable(z.number().int()).optional(),
    numImages: z.number().int().optional(),
    promptMagic: z.nullable(z.boolean()).optional(),
    promptMagicStrength: z.nullable(z.number()).optional(),
    promptMagicVersion: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorObject$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorPricingCalculatorObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorObject$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorPricingCalculatorObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorObject$Outbound` instead. */
    export type Outbound = PricingCalculatorPricingCalculatorObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorRequestObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    height: z.nullable(z.number().int()).optional(),
    instantRefine: z.nullable(z.boolean()).optional(),
    refine: z.nullable(z.boolean()).optional(),
    width: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorRequestObject$Outbound = {
    height?: number | null | undefined;
    instantRefine?: boolean | null | undefined;
    refine?: boolean | null | undefined;
    width?: number | null | undefined;
};

/** @internal */
export const PricingCalculatorPricingCalculatorRequestObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorRequestObject
> = z.object({
    height: z.nullable(z.number().int()).optional(),
    instantRefine: z.nullable(z.boolean()).optional(),
    refine: z.nullable(z.boolean()).optional(),
    width: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorRequestObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestObject$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorPricingCalculatorRequestObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestObject$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorPricingCalculatorRequestObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestObject$Outbound` instead. */
    export type Outbound = PricingCalculatorPricingCalculatorRequestObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    resolution: z.number().int().optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorRequestRequestBodyObject$Outbound = {
    resolution?: number | undefined;
};

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorRequestRequestBodyObject
> = z.object({
    resolution: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorRequestRequestBodyObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyObject$inboundSchema` instead. */
    export const inboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyObject$outboundSchema` instead. */
    export const outboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyObject$Outbound` instead. */
    export type Outbound = PricingCalculatorPricingCalculatorRequestRequestBodyObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    durationSeconds: z.number().int().optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$Outbound = {
    durationSeconds?: number | undefined;
};

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject
> = z.object({
    durationSeconds: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$inboundSchema` instead. */
    export const inboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$outboundSchema` instead. */
    export const outboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$Outbound` instead. */
    export type Outbound =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    preview: z.boolean().optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$Outbound =
    {
        preview?: boolean | undefined;
    };

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject
> = z.object({
    preview: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$inboundSchema` instead. */
    export const inboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$outboundSchema` instead. */
    export const outboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$Outbound` instead. */
    export type Outbound =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$Outbound;
}

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$inboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject,
    z.ZodTypeDef,
    unknown
> = z.object({
    megapixel: z.number().int().optional(),
});

/** @internal */
export type PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$Outbound =
    {
        megapixel?: number | undefined;
    };

/** @internal */
export const PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$outboundSchema: z.ZodType<
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$Outbound,
    z.ZodTypeDef,
    PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject
> = z.object({
    megapixel: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$ {
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$inboundSchema` instead. */
    export const inboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$inboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$outboundSchema` instead. */
    export const outboundSchema =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$outboundSchema;
    /** @deprecated use `PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$Outbound` instead. */
    export type Outbound =
        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$Outbound;
}

/** @internal */
export const ObjectT$inboundSchema: z.ZodType<ObjectT, z.ZodTypeDef, unknown> = z
    .object({
        FANTASY_AVATAR_GENERATION: z
            .nullable(z.lazy(() => PricingCalculatorObject$inboundSchema))
            .optional(),
        IMAGE_GENERATION: z
            .nullable(z.lazy(() => PricingCalculatorPricingCalculatorObject$inboundSchema))
            .optional(),
        LCM_GENERATION: z
            .nullable(z.lazy(() => PricingCalculatorPricingCalculatorRequestObject$inboundSchema))
            .optional(),
        MODEL_TRAINING: z
            .nullable(
                z.lazy(
                    () => PricingCalculatorPricingCalculatorRequestRequestBodyObject$inboundSchema
                )
            )
            .optional(),
        MOTION_GENERATION: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$inboundSchema
                )
            )
            .optional(),
        TEXTURE_GENERATION: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$inboundSchema
                )
            )
            .optional(),
        UNIVERSAL_UPSCALER: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$inboundSchema
                )
            )
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            FANTASY_AVATAR_GENERATION: "fantasyAvatarGeneration",
            IMAGE_GENERATION: "imageGeneration",
            LCM_GENERATION: "lcmGeneration",
            MODEL_TRAINING: "modelTraining",
            MOTION_GENERATION: "motionGeneration",
            TEXTURE_GENERATION: "textureGeneration",
            UNIVERSAL_UPSCALER: "universalUpscaler",
        });
    });

/** @internal */
export type ObjectT$Outbound = {
    FANTASY_AVATAR_GENERATION?: PricingCalculatorObject$Outbound | null | undefined;
    IMAGE_GENERATION?: PricingCalculatorPricingCalculatorObject$Outbound | null | undefined;
    LCM_GENERATION?: PricingCalculatorPricingCalculatorRequestObject$Outbound | null | undefined;
    MODEL_TRAINING?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyObject$Outbound
        | null
        | undefined;
    MOTION_GENERATION?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$Outbound
        | null
        | undefined;
    TEXTURE_GENERATION?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$Outbound
        | null
        | undefined;
    UNIVERSAL_UPSCALER?:
        | PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$Outbound
        | null
        | undefined;
};

/** @internal */
export const ObjectT$outboundSchema: z.ZodType<ObjectT$Outbound, z.ZodTypeDef, ObjectT> = z
    .object({
        fantasyAvatarGeneration: z
            .nullable(z.lazy(() => PricingCalculatorObject$outboundSchema))
            .optional(),
        imageGeneration: z
            .nullable(z.lazy(() => PricingCalculatorPricingCalculatorObject$outboundSchema))
            .optional(),
        lcmGeneration: z
            .nullable(z.lazy(() => PricingCalculatorPricingCalculatorRequestObject$outboundSchema))
            .optional(),
        modelTraining: z
            .nullable(
                z.lazy(
                    () => PricingCalculatorPricingCalculatorRequestRequestBodyObject$outboundSchema
                )
            )
            .optional(),
        motionGeneration: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject$outboundSchema
                )
            )
            .optional(),
        textureGeneration: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsTEXTUREGENERATIONObject$outboundSchema
                )
            )
            .optional(),
        universalUpscaler: z
            .nullable(
                z.lazy(
                    () =>
                        PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERObject$outboundSchema
                )
            )
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            fantasyAvatarGeneration: "FANTASY_AVATAR_GENERATION",
            imageGeneration: "IMAGE_GENERATION",
            lcmGeneration: "LCM_GENERATION",
            modelTraining: "MODEL_TRAINING",
            motionGeneration: "MOTION_GENERATION",
            textureGeneration: "TEXTURE_GENERATION",
            universalUpscaler: "UNIVERSAL_UPSCALER",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ObjectT$ {
    /** @deprecated use `ObjectT$inboundSchema` instead. */
    export const inboundSchema = ObjectT$inboundSchema;
    /** @deprecated use `ObjectT$outboundSchema` instead. */
    export const outboundSchema = ObjectT$outboundSchema;
    /** @deprecated use `ObjectT$Outbound` instead. */
    export type Outbound = ObjectT$Outbound;
}

/** @internal */
export const PricingCalculatorRequestBody$inboundSchema: z.ZodType<
    PricingCalculatorRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    service: shared.PricingCalculatorServices$inboundSchema.optional(),
    serviceParams: z.lazy(() => ObjectT$inboundSchema).optional(),
});

/** @internal */
export type PricingCalculatorRequestBody$Outbound = {
    service?: string | undefined;
    serviceParams?: ObjectT$Outbound | undefined;
};

/** @internal */
export const PricingCalculatorRequestBody$outboundSchema: z.ZodType<
    PricingCalculatorRequestBody$Outbound,
    z.ZodTypeDef,
    PricingCalculatorRequestBody
> = z.object({
    service: shared.PricingCalculatorServices$outboundSchema.optional(),
    serviceParams: z.lazy(() => ObjectT$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorRequestBody$ {
    /** @deprecated use `PricingCalculatorRequestBody$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorRequestBody$inboundSchema;
    /** @deprecated use `PricingCalculatorRequestBody$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorRequestBody$outboundSchema;
    /** @deprecated use `PricingCalculatorRequestBody$Outbound` instead. */
    export type Outbound = PricingCalculatorRequestBody$Outbound;
}

/** @internal */
export const CalculateProductionApiServiceCost$inboundSchema: z.ZodType<
    CalculateProductionApiServiceCost,
    z.ZodTypeDef,
    unknown
> = z.object({
    cost: z.number().int().optional(),
});

/** @internal */
export type CalculateProductionApiServiceCost$Outbound = {
    cost?: number | undefined;
};

/** @internal */
export const CalculateProductionApiServiceCost$outboundSchema: z.ZodType<
    CalculateProductionApiServiceCost$Outbound,
    z.ZodTypeDef,
    CalculateProductionApiServiceCost
> = z.object({
    cost: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalculateProductionApiServiceCost$ {
    /** @deprecated use `CalculateProductionApiServiceCost$inboundSchema` instead. */
    export const inboundSchema = CalculateProductionApiServiceCost$inboundSchema;
    /** @deprecated use `CalculateProductionApiServiceCost$outboundSchema` instead. */
    export const outboundSchema = CalculateProductionApiServiceCost$outboundSchema;
    /** @deprecated use `CalculateProductionApiServiceCost$Outbound` instead. */
    export type Outbound = CalculateProductionApiServiceCost$Outbound;
}

/** @internal */
export const PricingCalculatorResponseBody$inboundSchema: z.ZodType<
    PricingCalculatorResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    calculateProductionApiServiceCost: z
        .nullable(z.lazy(() => CalculateProductionApiServiceCost$inboundSchema))
        .optional(),
});

/** @internal */
export type PricingCalculatorResponseBody$Outbound = {
    calculateProductionApiServiceCost?:
        | CalculateProductionApiServiceCost$Outbound
        | null
        | undefined;
};

/** @internal */
export const PricingCalculatorResponseBody$outboundSchema: z.ZodType<
    PricingCalculatorResponseBody$Outbound,
    z.ZodTypeDef,
    PricingCalculatorResponseBody
> = z.object({
    calculateProductionApiServiceCost: z
        .nullable(z.lazy(() => CalculateProductionApiServiceCost$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricingCalculatorResponseBody$ {
    /** @deprecated use `PricingCalculatorResponseBody$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorResponseBody$inboundSchema;
    /** @deprecated use `PricingCalculatorResponseBody$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorResponseBody$outboundSchema;
    /** @deprecated use `PricingCalculatorResponseBody$Outbound` instead. */
    export type Outbound = PricingCalculatorResponseBody$Outbound;
}

/** @internal */
export const PricingCalculatorResponse$inboundSchema: z.ZodType<
    PricingCalculatorResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => PricingCalculatorResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type PricingCalculatorResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PricingCalculatorResponseBody$Outbound | undefined;
};

/** @internal */
export const PricingCalculatorResponse$outboundSchema: z.ZodType<
    PricingCalculatorResponse$Outbound,
    z.ZodTypeDef,
    PricingCalculatorResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => PricingCalculatorResponseBody$outboundSchema).optional(),
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
export namespace PricingCalculatorResponse$ {
    /** @deprecated use `PricingCalculatorResponse$inboundSchema` instead. */
    export const inboundSchema = PricingCalculatorResponse$inboundSchema;
    /** @deprecated use `PricingCalculatorResponse$outboundSchema` instead. */
    export const outboundSchema = PricingCalculatorResponse$outboundSchema;
    /** @deprecated use `PricingCalculatorResponse$Outbound` instead. */
    export type Outbound = PricingCalculatorResponse$Outbound;
}
