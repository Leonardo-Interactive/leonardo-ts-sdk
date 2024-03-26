/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * Which type of transparency this image should use
 */
export enum TransparencyType {
    Disabled = "disabled",
    ForegroundOnly = "foreground_only",
}

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type CreateGenerationRequestBody = {
    /**
     * Enable to use Alchemy.
     */
    alchemy?: boolean | null | undefined;
    /**
     * Contrast Ratio to use with Alchemy. Must be a float between 0 and 1 inclusive.
     */
    contrastRatio?: number | null | undefined;
    /**
     * Enable to use ControlNet. Requires an init image to be provided. Requires a model based on SD v1.5
     */
    controlNet?: boolean | null | undefined;
    /**
     * The type of ControlNet to use.
     */
    controlNetType?: shared.ControlnetType | undefined;
    elements?: Array<shared.ElementInput> | null | undefined;
    /**
     * Enable to use the Expanded Domain feature of Alchemy.
     */
    expandedDomain?: boolean | null | undefined;
    /**
     * Enable to use the Fantasy Avatar feature.
     */
    fantasyAvatar?: boolean | null | undefined;
    /**
     * How strongly the generation should reflect the prompt. 7 is recommended. Must be between 1 and 20.
     */
    guidanceScale?: number | null | undefined;
    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features.
     */
    height?: number | null | undefined;
    /**
     * Enable to use the High Contrast feature of Prompt Magic. Note: Controls RAW mode. Set to false to enable RAW mode.
     */
    highContrast?: boolean | null | undefined;
    /**
     * Enable to use the High Resolution feature of Prompt Magic.
     */
    highResolution?: boolean | null | undefined;
    imagePromptWeight?: number | null | undefined;
    imagePrompts?: Array<string> | null | undefined;
    /**
     * The ID of an existing image to use in image2image.
     */
    initGenerationImageId?: string | null | undefined;
    /**
     * The ID of an Init Image to use in image2image.
     */
    initImageId?: string | null | undefined;
    /**
     * How strongly the generated images should reflect the original image in image2image. Must be a float between 0.1 and 0.9.
     */
    initStrength?: number | null | undefined;
    /**
     * The model ID used for image generation. If not provided, uses sd_version to determine the version of Stable Diffusion to use. In-app, model IDs are under the Finetune Models menu. Click on the platform model or your custom model, then click View More. For platform models, you can also use the List Platform Models API.
     */
    modelId?: string | null | undefined;
    /**
     * The negative prompt used for the image generation
     */
    negativePrompt?: string | null | undefined;
    /**
     * Not Safe For Work Flag.
     */
    nsfw?: boolean | null | undefined;
    /**
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    numImages?: number | null | undefined;
    /**
     * The number of inference steps to use for the generation. Must be between 30 and 60.
     */
    numInferenceSteps?: number | null | undefined;
    /**
     * Enable the photoReal feature. Requires enabling alchemy and unspecifying modelId.
     */
    photoReal?: boolean | null | undefined;
    /**
     * Depth of field of photoReal. Must be 0.55 for low, 0.5 for medium, or 0.45 for high. Defaults to 0.55 if not specified.
     */
    photoRealStrength?: number | null | undefined;
    /**
     * The style to generate images with. When photoReal is enabled, use CINEMATIC, CREATIVE, VIBRANT, or NONE. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
     */
    presetStyle?: shared.SdGenerationStyle | null | undefined;
    /**
     * The prompt used to generate images
     */
    prompt?: string | undefined;
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
    /**
     * Whether the generated images should show in the community feed.
     */
    public?: boolean | null | undefined;
    /**
     * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
     */
    scheduler?: shared.SdGenerationSchedulers | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    sdVersion?: shared.SdVersions | undefined;
    seed?: number | null | undefined;
    /**
     * Whether the generated images should tile on all axis.
     */
    tiling?: boolean | null | undefined;
    /**
     * Which type of transparency this image should use
     */
    transparency?: TransparencyType | null | undefined;
    /**
     * Whether the generated images should be unzoomed (requires unzoomAmount and init_image_id to be set).
     */
    unzoom?: boolean | null | undefined;
    /**
     * How much the image should be unzoomed (requires an init_image_id and unzoom to be set to true).
     */
    unzoomAmount?: number | null | undefined;
    /**
     * How much the image should be upscaled. (Enterprise Only)
     */
    upscaleRatio?: number | null | undefined;
    /**
     * How much weighting to use for generation.
     */
    weighting?: number | null | undefined;
    /**
     * The input width of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features.
     */
    width?: number | null | undefined;
};

export type SDGenerationOutput = {
    /**
     * API Credits Cost for Image Generation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    generationId?: string | undefined;
};

/**
 * Responses for POST /generations
 */
export type CreateGenerationResponseBody = {
    sdGenerationJob?: SDGenerationOutput | null | undefined;
};

export type CreateGenerationResponse = {
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
     * Responses for POST /generations
     */
    object?: CreateGenerationResponseBody | undefined;
};

/** @internal */
export const TransparencyType$ = z.nativeEnum(TransparencyType);

/** @internal */
export namespace CreateGenerationRequestBody$ {
    export type Inbound = {
        alchemy?: boolean | null | undefined;
        contrastRatio?: number | null | undefined;
        controlNet?: boolean | null | undefined;
        controlNetType?: shared.ControlnetType | undefined;
        elements?: Array<shared.ElementInput$.Inbound> | null | undefined;
        expandedDomain?: boolean | null | undefined;
        fantasyAvatar?: boolean | null | undefined;
        guidance_scale?: number | null | undefined;
        height?: number | null | undefined;
        highContrast?: boolean | null | undefined;
        highResolution?: boolean | null | undefined;
        imagePromptWeight?: number | null | undefined;
        imagePrompts?: Array<string> | null | undefined;
        init_generation_image_id?: string | null | undefined;
        init_image_id?: string | null | undefined;
        init_strength?: number | null | undefined;
        modelId?: string | null | undefined;
        negative_prompt?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        num_images?: number | null | undefined;
        num_inference_steps?: number | null | undefined;
        photoReal?: boolean | null | undefined;
        photoRealStrength?: number | null | undefined;
        presetStyle?: shared.SdGenerationStyle | null | undefined;
        prompt?: string | undefined;
        promptMagic?: boolean | null | undefined;
        promptMagicStrength?: number | null | undefined;
        promptMagicVersion?: string | null | undefined;
        public?: boolean | null | undefined;
        scheduler?: shared.SdGenerationSchedulers | undefined;
        sd_version?: shared.SdVersions | undefined;
        seed?: number | null | undefined;
        tiling?: boolean | null | undefined;
        transparency?: TransparencyType | null | undefined;
        unzoom?: boolean | null | undefined;
        unzoomAmount?: number | null | undefined;
        upscaleRatio?: number | null | undefined;
        weighting?: number | null | undefined;
        width?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<CreateGenerationRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            alchemy: z.nullable(z.boolean()).optional(),
            contrastRatio: z.nullable(z.number()).optional(),
            controlNet: z.nullable(z.boolean()).optional(),
            controlNetType: shared.ControlnetType$.optional(),
            elements: z.nullable(z.array(shared.ElementInput$.inboundSchema)).optional(),
            expandedDomain: z.nullable(z.boolean()).optional(),
            fantasyAvatar: z.nullable(z.boolean()).optional(),
            guidance_scale: z.nullable(z.number().int()).optional(),
            height: z.nullable(z.number().int().default(512)),
            highContrast: z.nullable(z.boolean()).optional(),
            highResolution: z.nullable(z.boolean()).optional(),
            imagePromptWeight: z.nullable(z.number()).optional(),
            imagePrompts: z.nullable(z.array(z.string())).optional(),
            init_generation_image_id: z.nullable(z.string()).optional(),
            init_image_id: z.nullable(z.string()).optional(),
            init_strength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string().default("6bef9f1b-29cb-40c7-b9df-32b51c1f67d3")),
            negative_prompt: z.nullable(z.string()).optional(),
            nsfw: z.nullable(z.boolean()).optional(),
            num_images: z.nullable(z.number().int()).optional(),
            num_inference_steps: z.nullable(z.number().int()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            presetStyle: z.nullable(shared.SdGenerationStyle$).optional(),
            prompt: z.string().default("An oil painting of a cat"),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.nullable(z.boolean()).optional(),
            scheduler: shared.SdGenerationSchedulers$.optional(),
            sd_version: shared.SdVersions$.optional(),
            seed: z.nullable(z.number().int()).optional(),
            tiling: z.nullable(z.boolean()).optional(),
            transparency: z.nullable(TransparencyType$.default(TransparencyType.Disabled)),
            unzoom: z.nullable(z.boolean()).optional(),
            unzoomAmount: z.nullable(z.number()).optional(),
            upscaleRatio: z.nullable(z.number()).optional(),
            weighting: z.nullable(z.number()).optional(),
            width: z.nullable(z.number().int().default(512)),
        })
        .transform((v) => {
            return {
                ...(v.alchemy === undefined ? null : { alchemy: v.alchemy }),
                ...(v.contrastRatio === undefined ? null : { contrastRatio: v.contrastRatio }),
                ...(v.controlNet === undefined ? null : { controlNet: v.controlNet }),
                ...(v.controlNetType === undefined ? null : { controlNetType: v.controlNetType }),
                ...(v.elements === undefined ? null : { elements: v.elements }),
                ...(v.expandedDomain === undefined ? null : { expandedDomain: v.expandedDomain }),
                ...(v.fantasyAvatar === undefined ? null : { fantasyAvatar: v.fantasyAvatar }),
                ...(v.guidance_scale === undefined ? null : { guidanceScale: v.guidance_scale }),
                height: v.height,
                ...(v.highContrast === undefined ? null : { highContrast: v.highContrast }),
                ...(v.highResolution === undefined ? null : { highResolution: v.highResolution }),
                ...(v.imagePromptWeight === undefined
                    ? null
                    : { imagePromptWeight: v.imagePromptWeight }),
                ...(v.imagePrompts === undefined ? null : { imagePrompts: v.imagePrompts }),
                ...(v.init_generation_image_id === undefined
                    ? null
                    : { initGenerationImageId: v.init_generation_image_id }),
                ...(v.init_image_id === undefined ? null : { initImageId: v.init_image_id }),
                ...(v.init_strength === undefined ? null : { initStrength: v.init_strength }),
                modelId: v.modelId,
                ...(v.negative_prompt === undefined ? null : { negativePrompt: v.negative_prompt }),
                ...(v.nsfw === undefined ? null : { nsfw: v.nsfw }),
                ...(v.num_images === undefined ? null : { numImages: v.num_images }),
                ...(v.num_inference_steps === undefined
                    ? null
                    : { numInferenceSteps: v.num_inference_steps }),
                ...(v.photoReal === undefined ? null : { photoReal: v.photoReal }),
                ...(v.photoRealStrength === undefined
                    ? null
                    : { photoRealStrength: v.photoRealStrength }),
                ...(v.presetStyle === undefined ? null : { presetStyle: v.presetStyle }),
                prompt: v.prompt,
                ...(v.promptMagic === undefined ? null : { promptMagic: v.promptMagic }),
                ...(v.promptMagicStrength === undefined
                    ? null
                    : { promptMagicStrength: v.promptMagicStrength }),
                ...(v.promptMagicVersion === undefined
                    ? null
                    : { promptMagicVersion: v.promptMagicVersion }),
                ...(v.public === undefined ? null : { public: v.public }),
                ...(v.scheduler === undefined ? null : { scheduler: v.scheduler }),
                ...(v.sd_version === undefined ? null : { sdVersion: v.sd_version }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.tiling === undefined ? null : { tiling: v.tiling }),
                transparency: v.transparency,
                ...(v.unzoom === undefined ? null : { unzoom: v.unzoom }),
                ...(v.unzoomAmount === undefined ? null : { unzoomAmount: v.unzoomAmount }),
                ...(v.upscaleRatio === undefined ? null : { upscaleRatio: v.upscaleRatio }),
                ...(v.weighting === undefined ? null : { weighting: v.weighting }),
                width: v.width,
            };
        });

    export type Outbound = {
        alchemy?: boolean | null | undefined;
        contrastRatio?: number | null | undefined;
        controlNet?: boolean | null | undefined;
        controlNetType?: shared.ControlnetType | undefined;
        elements?: Array<shared.ElementInput$.Outbound> | null | undefined;
        expandedDomain?: boolean | null | undefined;
        fantasyAvatar?: boolean | null | undefined;
        guidance_scale?: number | null | undefined;
        height: number | null;
        highContrast?: boolean | null | undefined;
        highResolution?: boolean | null | undefined;
        imagePromptWeight?: number | null | undefined;
        imagePrompts?: Array<string> | null | undefined;
        init_generation_image_id?: string | null | undefined;
        init_image_id?: string | null | undefined;
        init_strength?: number | null | undefined;
        modelId: string | null;
        negative_prompt?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        num_images?: number | null | undefined;
        num_inference_steps?: number | null | undefined;
        photoReal?: boolean | null | undefined;
        photoRealStrength?: number | null | undefined;
        presetStyle?: shared.SdGenerationStyle | null | undefined;
        prompt: string;
        promptMagic?: boolean | null | undefined;
        promptMagicStrength?: number | null | undefined;
        promptMagicVersion?: string | null | undefined;
        public?: boolean | null | undefined;
        scheduler?: shared.SdGenerationSchedulers | undefined;
        sd_version?: shared.SdVersions | undefined;
        seed?: number | null | undefined;
        tiling?: boolean | null | undefined;
        transparency: TransparencyType | null;
        unzoom?: boolean | null | undefined;
        unzoomAmount?: number | null | undefined;
        upscaleRatio?: number | null | undefined;
        weighting?: number | null | undefined;
        width: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGenerationRequestBody> = z
        .object({
            alchemy: z.nullable(z.boolean()).optional(),
            contrastRatio: z.nullable(z.number()).optional(),
            controlNet: z.nullable(z.boolean()).optional(),
            controlNetType: shared.ControlnetType$.optional(),
            elements: z.nullable(z.array(shared.ElementInput$.outboundSchema)).optional(),
            expandedDomain: z.nullable(z.boolean()).optional(),
            fantasyAvatar: z.nullable(z.boolean()).optional(),
            guidanceScale: z.nullable(z.number().int()).optional(),
            height: z.nullable(z.number().int().default(512)),
            highContrast: z.nullable(z.boolean()).optional(),
            highResolution: z.nullable(z.boolean()).optional(),
            imagePromptWeight: z.nullable(z.number()).optional(),
            imagePrompts: z.nullable(z.array(z.string())).optional(),
            initGenerationImageId: z.nullable(z.string()).optional(),
            initImageId: z.nullable(z.string()).optional(),
            initStrength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string().default("6bef9f1b-29cb-40c7-b9df-32b51c1f67d3")),
            negativePrompt: z.nullable(z.string()).optional(),
            nsfw: z.nullable(z.boolean()).optional(),
            numImages: z.nullable(z.number().int()).optional(),
            numInferenceSteps: z.nullable(z.number().int()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            presetStyle: z.nullable(shared.SdGenerationStyle$).optional(),
            prompt: z.string().default("An oil painting of a cat"),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.nullable(z.boolean()).optional(),
            scheduler: shared.SdGenerationSchedulers$.optional(),
            sdVersion: shared.SdVersions$.optional(),
            seed: z.nullable(z.number().int()).optional(),
            tiling: z.nullable(z.boolean()).optional(),
            transparency: z.nullable(TransparencyType$.default(TransparencyType.Disabled)),
            unzoom: z.nullable(z.boolean()).optional(),
            unzoomAmount: z.nullable(z.number()).optional(),
            upscaleRatio: z.nullable(z.number()).optional(),
            weighting: z.nullable(z.number()).optional(),
            width: z.nullable(z.number().int().default(512)),
        })
        .transform((v) => {
            return {
                ...(v.alchemy === undefined ? null : { alchemy: v.alchemy }),
                ...(v.contrastRatio === undefined ? null : { contrastRatio: v.contrastRatio }),
                ...(v.controlNet === undefined ? null : { controlNet: v.controlNet }),
                ...(v.controlNetType === undefined ? null : { controlNetType: v.controlNetType }),
                ...(v.elements === undefined ? null : { elements: v.elements }),
                ...(v.expandedDomain === undefined ? null : { expandedDomain: v.expandedDomain }),
                ...(v.fantasyAvatar === undefined ? null : { fantasyAvatar: v.fantasyAvatar }),
                ...(v.guidanceScale === undefined ? null : { guidance_scale: v.guidanceScale }),
                height: v.height,
                ...(v.highContrast === undefined ? null : { highContrast: v.highContrast }),
                ...(v.highResolution === undefined ? null : { highResolution: v.highResolution }),
                ...(v.imagePromptWeight === undefined
                    ? null
                    : { imagePromptWeight: v.imagePromptWeight }),
                ...(v.imagePrompts === undefined ? null : { imagePrompts: v.imagePrompts }),
                ...(v.initGenerationImageId === undefined
                    ? null
                    : { init_generation_image_id: v.initGenerationImageId }),
                ...(v.initImageId === undefined ? null : { init_image_id: v.initImageId }),
                ...(v.initStrength === undefined ? null : { init_strength: v.initStrength }),
                modelId: v.modelId,
                ...(v.negativePrompt === undefined ? null : { negative_prompt: v.negativePrompt }),
                ...(v.nsfw === undefined ? null : { nsfw: v.nsfw }),
                ...(v.numImages === undefined ? null : { num_images: v.numImages }),
                ...(v.numInferenceSteps === undefined
                    ? null
                    : { num_inference_steps: v.numInferenceSteps }),
                ...(v.photoReal === undefined ? null : { photoReal: v.photoReal }),
                ...(v.photoRealStrength === undefined
                    ? null
                    : { photoRealStrength: v.photoRealStrength }),
                ...(v.presetStyle === undefined ? null : { presetStyle: v.presetStyle }),
                prompt: v.prompt,
                ...(v.promptMagic === undefined ? null : { promptMagic: v.promptMagic }),
                ...(v.promptMagicStrength === undefined
                    ? null
                    : { promptMagicStrength: v.promptMagicStrength }),
                ...(v.promptMagicVersion === undefined
                    ? null
                    : { promptMagicVersion: v.promptMagicVersion }),
                ...(v.public === undefined ? null : { public: v.public }),
                ...(v.scheduler === undefined ? null : { scheduler: v.scheduler }),
                ...(v.sdVersion === undefined ? null : { sd_version: v.sdVersion }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.tiling === undefined ? null : { tiling: v.tiling }),
                transparency: v.transparency,
                ...(v.unzoom === undefined ? null : { unzoom: v.unzoom }),
                ...(v.unzoomAmount === undefined ? null : { unzoomAmount: v.unzoomAmount }),
                ...(v.upscaleRatio === undefined ? null : { upscaleRatio: v.upscaleRatio }),
                ...(v.weighting === undefined ? null : { weighting: v.weighting }),
                width: v.width,
            };
        });
}

/** @internal */
export namespace SDGenerationOutput$ {
    export type Inbound = {
        apiCreditCost?: number | null | undefined;
        generationId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<SDGenerationOutput, z.ZodTypeDef, Inbound> = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            generationId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.generationId === undefined ? null : { generationId: v.generationId }),
            };
        });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        generationId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SDGenerationOutput> = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            generationId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.generationId === undefined ? null : { generationId: v.generationId }),
            };
        });
}

/** @internal */
export namespace CreateGenerationResponseBody$ {
    export type Inbound = {
        sdGenerationJob?: SDGenerationOutput$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<CreateGenerationResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            sdGenerationJob: z.nullable(z.lazy(() => SDGenerationOutput$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sdGenerationJob === undefined
                    ? null
                    : { sdGenerationJob: v.sdGenerationJob }),
            };
        });

    export type Outbound = {
        sdGenerationJob?: SDGenerationOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGenerationResponseBody> = z
        .object({
            sdGenerationJob: z
                .nullable(z.lazy(() => SDGenerationOutput$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.sdGenerationJob === undefined
                    ? null
                    : { sdGenerationJob: v.sdGenerationJob }),
            };
        });
}

/** @internal */
export namespace CreateGenerationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: CreateGenerationResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateGenerationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateGenerationResponseBody$.inboundSchema).optional(),
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
        object?: CreateGenerationResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGenerationResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateGenerationResponseBody$.outboundSchema).optional(),
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
