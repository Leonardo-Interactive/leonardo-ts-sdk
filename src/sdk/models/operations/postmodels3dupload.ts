/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export class PostModels3dUploadRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "modelExtension" })
    modelExtension?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class ModelAssetUploadOutput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "modelFields" })
    modelFields?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modelKey" })
    modelKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modelUrl" })
    modelUrl?: string;
}

/**
 * Responses for POST /api/rest/v1/models-3d/upload
 */
export class PostModels3dUploadResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "uploadModelAsset" })
    @Type(() => ModelAssetUploadOutput)
    uploadModelAsset?: ModelAssetUploadOutput;
}

export class PostModels3dUploadResponse extends SpeakeasyBase {
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
     * Responses for POST /api/rest/v1/models-3d/upload
     */
    @SpeakeasyMetadata()
    object?: PostModels3dUploadResponseBody;
}
