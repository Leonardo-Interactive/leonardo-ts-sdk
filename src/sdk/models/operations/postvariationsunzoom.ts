/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export class PostVariationsUnzoomRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isVariation" })
    isVariation?: boolean;
}

export class PostVariationsUnzoom200ApplicationJSONSDUnzoomOutput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

/**
 * Responses for POST /api/rest/v1/variations/unzoom
 */
export class PostVariationsUnzoom200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sdUnzoomJob" })
    @Type(() => PostVariationsUnzoom200ApplicationJSONSDUnzoomOutput)
    sdUnzoomJob?: PostVariationsUnzoom200ApplicationJSONSDUnzoomOutput;
}

export class PostVariationsUnzoomResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Responses for POST /api/rest/v1/variations/unzoom
     */
    @SpeakeasyMetadata()
    postVariationsUnzoom200ApplicationJSONObject?: PostVariationsUnzoom200ApplicationJSON;
}
