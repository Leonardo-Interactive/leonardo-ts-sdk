/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { initImagesDeleteInitImageById } from "../funcs/initImagesDeleteInitImageById.js";
import { initImagesGetInitImageById } from "../funcs/initImagesGetInitImageById.js";
import { initImagesUploadCanvasInitImage } from "../funcs/initImagesUploadCanvasInitImage.js";
import { initImagesUploadInitImage } from "../funcs/initImagesUploadInitImage.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class InitImages extends ClientSDK {
    /**
     * Delete init image
     *
     * @remarks
     * This endpoint deletes an init image
     */
    async deleteInitImageById(
        id: string,
        options?: RequestOptions
    ): Promise<operations.DeleteInitImageByIdResponse> {
        return unwrapAsync(initImagesDeleteInitImageById(this, id, options));
    }

    /**
     * Get single init image
     *
     * @remarks
     * This endpoint will return a single init image
     */
    async getInitImageById(
        id: string,
        options?: RequestOptions
    ): Promise<operations.GetInitImageByIdResponse> {
        return unwrapAsync(initImagesGetInitImageById(this, id, options));
    }

    /**
     * Upload Canvas Editor init and mask image
     *
     * @remarks
     * This endpoint returns presigned details to upload an init image and a mask image to S3
     */
    async uploadCanvasInitImage(
        request: operations.UploadCanvasInitImageRequestBody,
        options?: RequestOptions
    ): Promise<operations.UploadCanvasInitImageResponse> {
        return unwrapAsync(initImagesUploadCanvasInitImage(this, request, options));
    }

    /**
     * Upload init image
     *
     * @remarks
     * This endpoint returns presigned details to upload an init image to S3
     */
    async uploadInitImage(
        request: operations.UploadInitImageRequestBody,
        options?: RequestOptions
    ): Promise<operations.UploadInitImageResponse> {
        return unwrapAsync(initImagesUploadInitImage(this, request, options));
    }
}
