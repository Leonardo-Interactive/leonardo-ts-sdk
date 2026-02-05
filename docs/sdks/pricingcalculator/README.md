# PricingCalculator

## Overview

### Available Operations

* [pricingCalculator](#pricingcalculator) - Calculating API Cost

## pricingCalculator

This endpoint returns the cost used for generating images using a particular service type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pricingCalculator" method="post" path="/pricing-calculator" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.pricingCalculator.pricingCalculator();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { pricingCalculatorPricingCalculator } from "@leonardo-ai/sdk/funcs/pricingCalculatorPricingCalculator.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await pricingCalculatorPricingCalculator(leonardo);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pricingCalculatorPricingCalculator failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PricingCalculatorRequestBody](../../sdk/models/operations/pricingcalculatorrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PricingCalculatorResponse](../../sdk/models/operations/pricingcalculatorresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |