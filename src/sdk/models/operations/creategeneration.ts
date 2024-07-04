/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
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
     * Enable to use Alchemy. Note: The appropriate Alchemy version is selected for the specified model. For example, XL models will use Alchemy V2.
     */
    alchemy?: boolean | null | undefined;
    /**
     * The ID of an initial image to use in Canvas Editor request.
     */
    canvasInitId?: string | null | undefined;
    /**
     * The ID of a mask image to use in Canvas Editor request.
     */
    canvasMaskId?: string | null | undefined;
    /**
     * Whether the generation is for the Canvas Editor feature.
     */
    canvasRequest?: boolean | null | undefined;
    /**
     * The type of request for the Canvas Editor.
     */
    canvasRequestType?: shared.CanvasRequestType | null | undefined;
    /**
     * Contrast Ratio to use with Alchemy. Must be a float between 0 and 1 inclusive.
     */
    contrastRatio?: number | null | undefined;
    /**
     * This parameter will be deprecated in September 2024. Please use the controlnets array instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    controlNet?: boolean | null | undefined;
    /**
     * This parameter will be deprecated in September 2024. Please use the controlnets array instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    controlNetType?: shared.ControlnetType | undefined;
    controlnets?: Array<shared.ControlnetInput> | null | undefined;
    elements?: Array<shared.ElementInput> | null | undefined;
    /**
     * When enabled, your prompt is expanded to include more detail.
     */
    enhancePrompt?: boolean | null | undefined;
    /**
     * When enhancePrompt is enabled, the prompt is enhanced based on the given instructions.
     */
    enhancePromptInstruction?: string | null | undefined;
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
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    numImages?: number | null | undefined;
    /**
     * The Step Count to use for the generation. Must be between 10 and 60. Default is 15.
     */
    numInferenceSteps?: number | null | undefined;
    /**
     * Enable the photoReal feature. Requires enabling alchemy and unspecifying modelId (for photoRealVersion V1).
     */
    photoReal?: boolean | null | undefined;
    /**
     * Depth of field of photoReal. Must be 0.55 for low, 0.5 for medium, or 0.45 for high. Defaults to 0.55 if not specified.
     */
    photoRealStrength?: number | null | undefined;
    /**
     * The version of photoReal to use. Must be v1 or v2.
     */
    photoRealVersion?: string | null | undefined;
    /**
     * The style to generate images with. When photoReal is enabled, refer to the Guide section for a full list. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
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
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models
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
     * This parameter will be deprecated in September 2024. Please use the controlnets array instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
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
export namespace TransparencyType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof TransparencyType> =
        z.nativeEnum(TransparencyType);
    export const outboundSchema: z.ZodNativeEnum<typeof TransparencyType> = inboundSchema;
}

/** @internal */
export namespace CreateGenerationRequestBody$ {
    export const inboundSchema: z.ZodType<CreateGenerationRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            alchemy: z.nullable(z.boolean().default(true)),
            canvasInitId: z.nullable(z.string()).optional(),
            canvasMaskId: z.nullable(z.string()).optional(),
            canvasRequest: z.nullable(z.boolean()).optional(),
            canvasRequestType: z.nullable(shared.CanvasRequestType$.inboundSchema).optional(),
            contrastRatio: z.nullable(z.number()).optional(),
            controlNet: z.nullable(z.boolean()).optional(),
            controlNetType: shared.ControlnetType$.inboundSchema.optional(),
            controlnets: z.nullable(z.array(shared.ControlnetInput$.inboundSchema)).optional(),
            elements: z.nullable(z.array(shared.ElementInput$.inboundSchema)).optional(),
            enhancePrompt: z.nullable(z.boolean()).optional(),
            enhancePromptInstruction: z.nullable(z.string()).optional(),
            expandedDomain: z.nullable(z.boolean()).optional(),
            fantasyAvatar: z.nullable(z.boolean()).optional(),
            guidance_scale: z.nullable(z.number().int()).optional(),
            height: z.nullable(z.number().int().default(768)),
            highContrast: z.nullable(z.boolean()).optional(),
            highResolution: z.nullable(z.boolean()).optional(),
            imagePromptWeight: z.nullable(z.number()).optional(),
            imagePrompts: z.nullable(z.array(z.string())).optional(),
            init_generation_image_id: z.nullable(z.string()).optional(),
            init_image_id: z.nullable(z.string()).optional(),
            init_strength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string().default("b24e16ff-06e3-43eb-8d33-4416c2d75876")),
            negative_prompt: z.nullable(z.string()).optional(),
            num_images: z.nullable(z.number().int().default(4)),
            num_inference_steps: z.nullable(z.number().int()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            photoRealVersion: z.nullable(z.string()).optional(),
            presetStyle: z.nullable(
                shared.SdGenerationStyle$.inboundSchema.default(shared.SdGenerationStyle.Dynamic)
            ),
            prompt: z.string().default("A majestic cat in the snow"),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.nullable(z.boolean()).optional(),
            scheduler: shared.SdGenerationSchedulers$.inboundSchema.optional(),
            sd_version: shared.SdVersions$.inboundSchema.optional(),
            seed: z.nullable(z.number().int()).optional(),
            tiling: z.nullable(z.boolean()).optional(),
            transparency: z.nullable(TransparencyType$.inboundSchema).optional(),
            unzoom: z.nullable(z.boolean()).optional(),
            unzoomAmount: z.nullable(z.number()).optional(),
            upscaleRatio: z.nullable(z.number()).optional(),
            weighting: z.nullable(z.number()).optional(),
            width: z.nullable(z.number().int().default(1024)),
        })
        .transform((v) => {
            return remap$(v, {
                guidance_scale: "guidanceScale",
                init_generation_image_id: "initGenerationImageId",
                init_image_id: "initImageId",
                init_strength: "initStrength",
                negative_prompt: "negativePrompt",
                num_images: "numImages",
                num_inference_steps: "numInferenceSteps",
                sd_version: "sdVersion",
            });
        });

    export type Outbound = {
        alchemy: boolean | null;
        canvasInitId?: string | null | undefined;
        canvasMaskId?: string | null | undefined;
        canvasRequest?: boolean | null | undefined;
        canvasRequestType?: string | null | undefined;
        contrastRatio?: number | null | undefined;
        controlNet?: boolean | null | undefined;
        controlNetType?: string | undefined;
        controlnets?: Array<shared.ControlnetInput$.Outbound> | null | undefined;
        elements?: Array<shared.ElementInput$.Outbound> | null | undefined;
        enhancePrompt?: boolean | null | undefined;
        enhancePromptInstruction?: string | null | undefined;
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
        num_images: number | null;
        num_inference_steps?: number | null | undefined;
        photoReal?: boolean | null | undefined;
        photoRealStrength?: number | null | undefined;
        photoRealVersion?: string | null | undefined;
        presetStyle: string | null;
        prompt: string;
        promptMagic?: boolean | null | undefined;
        promptMagicStrength?: number | null | undefined;
        promptMagicVersion?: string | null | undefined;
        public?: boolean | null | undefined;
        scheduler?: string | undefined;
        sd_version?: string | undefined;
        seed?: number | null | undefined;
        tiling?: boolean | null | undefined;
        transparency?: string | null | undefined;
        unzoom?: boolean | null | undefined;
        unzoomAmount?: number | null | undefined;
        upscaleRatio?: number | null | undefined;
        weighting?: number | null | undefined;
        width: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGenerationRequestBody> = z
        .object({
            alchemy: z.nullable(z.boolean().default(true)),
            canvasInitId: z.nullable(z.string()).optional(),
            canvasMaskId: z.nullable(z.string()).optional(),
            canvasRequest: z.nullable(z.boolean()).optional(),
            canvasRequestType: z.nullable(shared.CanvasRequestType$.outboundSchema).optional(),
            contrastRatio: z.nullable(z.number()).optional(),
            controlNet: z.nullable(z.boolean()).optional(),
            controlNetType: shared.ControlnetType$.outboundSchema.optional(),
            controlnets: z.nullable(z.array(shared.ControlnetInput$.outboundSchema)).optional(),
            elements: z.nullable(z.array(shared.ElementInput$.outboundSchema)).optional(),
            enhancePrompt: z.nullable(z.boolean()).optional(),
            enhancePromptInstruction: z.nullable(z.string()).optional(),
            expandedDomain: z.nullable(z.boolean()).optional(),
            fantasyAvatar: z.nullable(z.boolean()).optional(),
            guidanceScale: z.nullable(z.number().int()).optional(),
            height: z.nullable(z.number().int().default(768)),
            highContrast: z.nullable(z.boolean()).optional(),
            highResolution: z.nullable(z.boolean()).optional(),
            imagePromptWeight: z.nullable(z.number()).optional(),
            imagePrompts: z.nullable(z.array(z.string())).optional(),
            initGenerationImageId: z.nullable(z.string()).optional(),
            initImageId: z.nullable(z.string()).optional(),
            initStrength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string().default("b24e16ff-06e3-43eb-8d33-4416c2d75876")),
            negativePrompt: z.nullable(z.string()).optional(),
            numImages: z.nullable(z.number().int().default(4)),
            numInferenceSteps: z.nullable(z.number().int()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            photoRealVersion: z.nullable(z.string()).optional(),
            presetStyle: z.nullable(
                shared.SdGenerationStyle$.outboundSchema.default(shared.SdGenerationStyle.Dynamic)
            ),
            prompt: z.string().default("A majestic cat in the snow"),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.nullable(z.boolean()).optional(),
            scheduler: shared.SdGenerationSchedulers$.outboundSchema.optional(),
            sdVersion: shared.SdVersions$.outboundSchema.optional(),
            seed: z.nullable(z.number().int()).optional(),
            tiling: z.nullable(z.boolean()).optional(),
            transparency: z.nullable(TransparencyType$.outboundSchema).optional(),
            unzoom: z.nullable(z.boolean()).optional(),
            unzoomAmount: z.nullable(z.number()).optional(),
            upscaleRatio: z.nullable(z.number()).optional(),
            weighting: z.nullable(z.number()).optional(),
            width: z.nullable(z.number().int().default(1024)),
        })
        .transform((v) => {
            return remap$(v, {
                guidanceScale: "guidance_scale",
                initGenerationImageId: "init_generation_image_id",
                initImageId: "init_image_id",
                initStrength: "init_strength",
                negativePrompt: "negative_prompt",
                numImages: "num_images",
                numInferenceSteps: "num_inference_steps",
                sdVersion: "sd_version",
            });
        });
}

/** @internal */
export namespace SDGenerationOutput$ {
    export const inboundSchema: z.ZodType<SDGenerationOutput, z.ZodTypeDef, unknown> = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        generationId: z.string().optional(),
    });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        generationId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SDGenerationOutput> = z.object({
        apiCreditCost: z.nullable(z.number().int()).optional(),
        generationId: z.string().optional(),
    });
}

/** @internal */
export namespace CreateGenerationResponseBody$ {
    export const inboundSchema: z.ZodType<CreateGenerationResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            sdGenerationJob: z.nullable(z.lazy(() => SDGenerationOutput$.inboundSchema)).optional(),
        });

    export type Outbound = {
        sdGenerationJob?: SDGenerationOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGenerationResponseBody> =
        z.object({
            sdGenerationJob: z
                .nullable(z.lazy(() => SDGenerationOutput$.outboundSchema))
                .optional(),
        });
}

/** @internal */
export namespace CreateGenerationResponse$ {
    export const inboundSchema: z.ZodType<CreateGenerationResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateGenerationResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
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
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
