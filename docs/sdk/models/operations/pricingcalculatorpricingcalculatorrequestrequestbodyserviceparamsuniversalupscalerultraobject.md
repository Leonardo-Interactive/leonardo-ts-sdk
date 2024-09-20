# PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERULTRAObject

Parameters for UNIVERSAL_UPSCALER_ULTRA service

## Example Usage

```typescript
import {
  PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERULTRAObject,
} from "@leonardo-ai/sdk/sdk/models/operations";

let value:
  PricingCalculatorPricingCalculatorRequestRequestBodyServiceParamsUNIVERSALUPSCALERULTRAObject =
    {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inputHeight`                                                                    | *number*                                                                         | :heavy_minus_sign:                                                               | The input height of the image.                                                   |
| `inputWidth`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The input width of the image.                                                    |
| `upscaleMultiplier`                                                              | *number*                                                                         | :heavy_minus_sign:                                                               | The upscale multiplier of the universal upscaler. Must be between 1.00 and 2.00. |