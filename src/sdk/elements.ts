/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { elementsCreateElement } from "../funcs/elementsCreateElement.js";
import { elementsDeleteElementById } from "../funcs/elementsDeleteElementById.js";
import { elementsGetElementById } from "../funcs/elementsGetElementById.js";
import { elementsListElements } from "../funcs/elementsListElements.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Elements extends ClientSDK {
  /**
   * Train a Custom Element
   *
   * @remarks
   * This endpoint will train a new custom element.
   */
  async createElement(
    request: operations.CreateElementRequestBody,
    options?: RequestOptions,
  ): Promise<operations.CreateElementResponse> {
    return unwrapAsync(elementsCreateElement(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Single Custom Element by ID
   *
   * @remarks
   * This endpoint will delete a specific custom model.
   */
  async deleteElementById(
    id: number,
    options?: RequestOptions,
  ): Promise<operations.DeleteElementByIdResponse> {
    return unwrapAsync(elementsDeleteElementById(
      this,
      id,
      options,
    ));
  }

  /**
   * Get a Single Custom Element by ID
   *
   * @remarks
   * This endpoint gets the specific custom element.
   */
  async getElementById(
    id: number,
    options?: RequestOptions,
  ): Promise<operations.GetElementByIdResponse> {
    return unwrapAsync(elementsGetElementById(
      this,
      id,
      options,
    ));
  }

  /**
   * List Elements
   *
   * @remarks
   * Get a list of public Elements available for use with generations.
   */
  async listElements(
    options?: RequestOptions,
  ): Promise<operations.ListElementsResponse> {
    return unwrapAsync(elementsListElements(
      this,
      options,
    ));
  }
}
