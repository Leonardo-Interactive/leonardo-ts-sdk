/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { textureCreateTextureGeneration } from "../funcs/textureCreateTextureGeneration.js";
import { textureDeleteTextureGenerationById } from "../funcs/textureDeleteTextureGenerationById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Texture extends ClientSDK {
    /**
     * Create Texture Generation
     *
     * @remarks
     * This endpoint will generate a texture generation.
     */
    async createTextureGeneration(
        request?: operations.CreateTextureGenerationRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateTextureGenerationResponse> {
        return unwrapAsync(textureCreateTextureGeneration(this, request, options));
    }

    /**
     * Delete Texture Generation by ID
     *
     * @remarks
     * This endpoint deletes the specific texture generation.
     */
    async deleteTextureGenerationById(
        id: string,
        requestBody?: operations.DeleteTextureGenerationByIdRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.DeleteTextureGenerationByIdResponse> {
        return unwrapAsync(textureDeleteTextureGenerationById(this, id, requestBody, options));
    }
}
