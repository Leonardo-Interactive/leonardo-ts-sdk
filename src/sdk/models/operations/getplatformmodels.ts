/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetPlatformModelsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;
}

/**
 * columns and relationships of "generated_images"
 */
export class GetPlatformModelsGeneratedImages extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * columns and relationships of "custom_models"
 */
export class GetPlatformModelsCustomModels extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "featured" })
    featured?: boolean;

    /**
     * columns and relationships of "generated_images"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generated_image" })
    @Type(() => GetPlatformModelsGeneratedImages)
    generatedImage?: GetPlatformModelsGeneratedImages;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nsfw" })
    nsfw?: boolean;
}

/**
 * Responses for GET /api/rest/v1/platformModels
 */
export class GetPlatformModelsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetPlatformModelsCustomModels })
    @Expose({ name: "custom_models" })
    @Type(() => GetPlatformModelsCustomModels)
    customModels?: GetPlatformModelsCustomModels[];
}

export class GetPlatformModelsResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * Responses for GET /api/rest/v1/platformModels
     */
    @SpeakeasyMetadata()
    object?: GetPlatformModelsResponseBody;
}
