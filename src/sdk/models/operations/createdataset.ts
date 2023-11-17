/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export class CreateDatasetRequestBody extends SpeakeasyBase {
    /**
     * A description for the dataset.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The name of the dataset.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * columns and relationships of "datasets"
 */
export class Datasets extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

/**
 * Responses for POST /datasets
 */
export class CreateDatasetResponseBody extends SpeakeasyBase {
    /**
     * columns and relationships of "datasets"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insert_datasets_one" })
    @Type(() => Datasets)
    insertDatasetsOne?: Datasets;
}

export class CreateDatasetResponse extends SpeakeasyBase {
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
     * Responses for POST /datasets
     */
    @SpeakeasyMetadata()
    object?: CreateDatasetResponseBody;
}
