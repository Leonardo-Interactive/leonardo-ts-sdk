/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { pricingCalculatorPricingCalculator } from "../funcs/pricingCalculatorPricingCalculator.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class PricingCalculator extends ClientSDK {
  /**
   * Calculating API Cost
   *
   * @remarks
   * This endpoint returns the cost used for generating images using a particular service type.
   */
  async pricingCalculator(
    request?: operations.PricingCalculatorRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PricingCalculatorResponse> {
    return unwrapAsync(pricingCalculatorPricingCalculator(
      this,
      request,
      options,
    ));
  }
}
