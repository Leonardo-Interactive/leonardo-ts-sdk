/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export class CreateVariationNoBGRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isVariation" })
    isVariation?: boolean;
}

export class SDUpscaleJobOutput extends SpeakeasyBase {
    /**
     * API Credits Cost for No Background Variation. Available for Production API Users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiCreditCost" })
    apiCreditCost?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

/**
 * Responses for POST /variations/nobg
 */
export class CreateVariationNoBGResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sdNobgJob" })
    @Type(() => SDUpscaleJobOutput)
    sdNobgJob?: SDUpscaleJobOutput;
}

export class CreateVariationNoBGResponse extends SpeakeasyBase {
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
     * Responses for POST /variations/nobg
     */
    @SpeakeasyMetadata()
    object?: CreateVariationNoBGResponseBody;
}
