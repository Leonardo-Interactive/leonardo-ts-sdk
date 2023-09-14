/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export class CreateGenerationRequestBody extends SpeakeasyBase {
    /**
     * Enable to use Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alchemy" })
    alchemy?: boolean;

    /**
     * Contrast Ratio to use with Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contrastRatio" })
    contrastRatio?: number;

    /**
     * Enable to use ControlNet. Requires an init image to be provided. Requires a model based on SD v1.5
     */
    @SpeakeasyMetadata()
    @Expose({ name: "controlNet" })
    controlNet?: boolean;

    /**
     * The type of ControlNet to use.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "controlNetType" })
    controlNetType?: shared.ControlnetType;

    /**
     * Enable to use the Expanded Domain feature of Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandedDomain" })
    expandedDomain?: boolean;

    /**
     * How strongly the generation should reflect the prompt. 7 is recommended. Must be between 1 and 20.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "guidance_scale" })
    guidanceScale?: number;

    /**
     * The height of the images. Must be between 32 and 1024 and be a multiple of 8.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height?: number;

    /**
     * Enable to use the High Contrast feature of Prompt Magic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "highContrast" })
    highContrast?: boolean;

    /**
     * Enable to use the High Resolution feature of Prompt Magic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "highResolution" })
    highResolution?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "imagePromptWeight" })
    imagePromptWeight?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "imagePrompts" })
    imagePrompts?: string[];

    /**
     * The ID of an existing image to use in image2image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_generation_image_id" })
    initGenerationImageId?: string;

    /**
     * The ID of an Init Image to use in image2image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_image_id" })
    initImageId?: string;

    /**
     * How strongly the generated images should reflect the original image in image2image. Must be a float between 0.1 and 0.9.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_strength" })
    initStrength?: number;

    /**
     * The model ID used for the image generation. If not provided uses sd_version to determine the version of Stable Diffusion to use.
     *
     * @remarks
     *
     * _Leonardo Creative_: 6bef9f1b-29cb-40c7-b9df-32b51c1f67d3
     * _Leonardo Select_: cd2b2a15-9760-4174-a5ff-4d2925057376
     * _Leonardo Signature_: 291be633-cb24-434f-898f-e662799936ad
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId?: string;

    /**
     * The negative prompt used for the image generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "negative_prompt" })
    negativePrompt?: string;

    /**
     * Not Safe For Work Flag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nsfw" })
    nsfw?: boolean;

    /**
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_images" })
    numImages?: number;

    /**
     * The number of inference steps to use for the generation. Must be between 30 and 60.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_inference_steps" })
    numInferenceSteps?: number;

    /**
     * Enable the photoReal feature
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photoReal" })
    photoReal?: boolean;

    /**
     * The style to generate images with.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "presetStyle" })
    presetStyle?: shared.SdGenerationStyle;

    /**
     * The prompt used to generate images
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt: string;

    /**
     * Enable to use Prompt Magic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagic" })
    promptMagic?: boolean;

    /**
     * Prompt magic version v2 or v3, for use when promptMagic: true
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagicVersion" })
    promptMagicVersion?: string;

    /**
     * Whether the generated images should show in the community feed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public" })
    public?: boolean;

    /**
     * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduler" })
    scheduler?: shared.SdGenerationSchedulers;

    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sd_version" })
    sdVersion?: shared.SdVersions;

    @SpeakeasyMetadata()
    @Expose({ name: "seed" })
    seed?: number;

    /**
     * Whether the generated images should tile on all axis.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tiling" })
    tiling?: boolean;

    /**
     * Whether the generated images should be unzoomed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unzoom" })
    unzoom?: boolean;

    /**
     * How much the image should be unzoomed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unzoomAmount" })
    unzoomAmount?: number;

    /**
     * How much the image should be upscaled. (Enterprise Only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "upscaleRatio" })
    upscaleRatio?: number;

    /**
     * How much weighting to use for generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weighting" })
    weighting?: number;

    /**
     * The width of the images. Must be between 32 and 1024 and be a multiple of 8.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width?: number;
}

export class CreateGeneration200ApplicationJSONSDGenerationOutput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "generationId" })
    generationId?: string;
}

/**
 * Responses for POST /generations
 */
export class CreateGeneration200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sdGenerationJob" })
    @Type(() => CreateGeneration200ApplicationJSONSDGenerationOutput)
    sdGenerationJob?: CreateGeneration200ApplicationJSONSDGenerationOutput;
}

export class CreateGenerationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Responses for POST /generations
     */
    @SpeakeasyMetadata()
    createGeneration200ApplicationJSONObject?: CreateGeneration200ApplicationJSON;
}
