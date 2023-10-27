/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetGenerationsByUserIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;
}

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The status of the current task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: shared.JobStatus;

    /**
     * The type of variation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transformType" })
    transformType?: shared.VariationType;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * columns and relationships of "generated_images"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
    @SpeakeasyMetadata({
        elemType:
            GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric,
    })
    @Expose({ name: "generated_image_variation_generics" })
    @Type(
        () =>
            GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
    )
    generatedImageVariationGenerics?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "likeCount" })
    likeCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "nsfw" })
    nsfw?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * Element used for the generation.
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElementsElements extends SpeakeasyBase {
    /**
     * Unique identifier for the element. Elements can be found from the List Elements endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "akUUID" })
    akUUID?: string;

    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "baseModel" })
    baseModel?: shared.SdVersions;

    /**
     * Description for the element
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Name of the element
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * URL of the element image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "urlImage" })
    urlImage?: string;

    /**
     * Default weight for the element
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weightDefault" })
    weightDefault?: number;

    /**
     * Maximum weight for the element
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weightMax" })
    weightMax?: number;

    /**
     * Minimum weight for the element
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weightMin" })
    weightMin?: number;
}

/**
 * This table captures the elements that are applied to a Generations, also the order and weightings used when applied.
 */
export class GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElements extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Element used for the generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lora" })
    @Type(() => GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElementsElements)
    lora?: GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElementsElements;

    @SpeakeasyMetadata()
    @Expose({ name: "weightApplied" })
    weightApplied?: number;
}

/**
 * columns and relationships of "generations"
 */
export class GetGenerationsByUserId200ApplicationJSONGenerations extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt?: string;

    @SpeakeasyMetadata({
        elemType: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages,
    })
    @Expose({ name: "generated_images" })
    @Type(() => GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages)
    generatedImages?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages[];

    @SpeakeasyMetadata({
        elemType: GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElements,
    })
    @Expose({ name: "generation_elements" })
    @Type(() => GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElements)
    generationElements?: GetGenerationsByUserId200ApplicationJSONGenerationsGenerationElements[];

    @SpeakeasyMetadata()
    @Expose({ name: "guidanceScale" })
    guidanceScale?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "imageHeight" })
    imageHeight?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "imageWidth" })
    imageWidth?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "inferenceSteps" })
    inferenceSteps?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "initStrength" })
    initStrength?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "negativePrompt" })
    negativePrompt?: string;

    /**
     * If photoReal feature was used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photoReal" })
    photoReal?: boolean;

    /**
     * Depth of field of photoReal used. 0.55 is low, 0.5 is medium, and 0.45 is high. Default is 0.55.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photoRealStrength" })
    photoRealStrength?: number;

    /**
     * The style to generate images with. When photoReal is enabled, use CINEMATIC, CREATIVE, VIBRANT, or NONE. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "presetStyle" })
    presetStyle?: shared.SdGenerationStyle;

    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt?: string;

    /**
     * If prompt magic was used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagic" })
    promptMagic?: boolean;

    /**
     * Strength of prompt magic used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagicStrength" })
    promptMagicStrength?: number;

    /**
     * Version of prompt magic used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagicVersion" })
    promptMagicVersion?: string;

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
    @Expose({ name: "sdVersion" })
    sdVersion?: shared.SdVersions;

    @SpeakeasyMetadata()
    @Expose({ name: "seed" })
    seed?: number;

    /**
     * The status of the current task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: shared.JobStatus;
}

/**
 * Responses for GET /generations/user/{userId}
 */
export class GetGenerationsByUserId200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetGenerationsByUserId200ApplicationJSONGenerations })
    @Expose({ name: "generations" })
    @Type(() => GetGenerationsByUserId200ApplicationJSONGenerations)
    generations?: GetGenerationsByUserId200ApplicationJSONGenerations[];
}

export class GetGenerationsByUserIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Responses for GET /generations/user/{userId}
     */
    @SpeakeasyMetadata()
    getGenerationsByUserId200ApplicationJSONObject?: GetGenerationsByUserId200ApplicationJSON;
}
