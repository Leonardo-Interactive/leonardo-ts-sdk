/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export class CreateModelRequestBody extends SpeakeasyBase {
    /**
     * The ID of the dataset to train the model on.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "datasetId" })
    datasetId: string;

    /**
     * The description of the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The instance prompt to use during training.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "instance_prompt" })
    instancePrompt: string;

    /**
     * The category the most accurately reflects the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modelType" })
    modelType?: shared.CustomModelType;

    /**
     * The name of the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Whether or not the model is NSFW.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nsfw" })
    nsfw?: boolean;

    /**
     * The resolution for training. Must be 512 or 768.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resolution" })
    resolution?: number;

    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sd_Version" })
    sdVersion?: shared.SdVersions;

    /**
     * When training using the PIXEL_ART model type, this influences the training strength.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "strength" })
    strength?: shared.Strength;
}

export class SDTrainingOutput extends SpeakeasyBase {
    /**
     * API Credits Cost for Model Training. Available for Production API Users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiCreditCost" })
    apiCreditCost?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "customModelId" })
    customModelId?: string;
}

/**
 * Responses for POST /models
 */
export class CreateModelResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sdTrainingJob" })
    @Type(() => SDTrainingOutput)
    sdTrainingJob?: SDTrainingOutput;
}

export class CreateModelResponse extends SpeakeasyBase {
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
     * Responses for POST /models
     */
    @SpeakeasyMetadata()
    object?: CreateModelResponseBody;
}
