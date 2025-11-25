# PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject

Parameters for MODEL_TRAINING service

## Example Usage

```typescript
import { PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject } from "@leonardo-ai/sdk/sdk/models/operations";

let value:
  PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsObject = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `datasetImageCount`                                                                                          | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | The number of images in the training dataset when sd_version is set to 'FLUX_DEV'. Must be between 1 and 50. |
| `resolution`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | The resolution for training. Must be 512, 768, or 1024.                                                      |
| `sdVersion`                                                                                                  | [operations.SdVersion](../../../sdk/models/operations/sdversion.md)                                          | :heavy_minus_sign:                                                                                           | The model for the training. Can be set to 'FLUX_DEV' for FLUX_DEV specific pricing or can be omitted.        |