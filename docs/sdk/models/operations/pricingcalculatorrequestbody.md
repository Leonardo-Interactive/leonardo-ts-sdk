# PricingCalculatorRequestBody

## Example Usage

```typescript
import { PricingCalculatorRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: PricingCalculatorRequestBody = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `service`                                                                                   | [shared.PricingCalculatorServices](../../../sdk/models/shared/pricingcalculatorservices.md) | :heavy_minus_sign:                                                                          | The services to be chosen for calculating the API credit cost.                              |
| `serviceParams`                                                                             | [operations.ObjectT](../../../sdk/models/operations/objectt.md)                             | :heavy_minus_sign:                                                                          | Parameters for the service                                                                  |