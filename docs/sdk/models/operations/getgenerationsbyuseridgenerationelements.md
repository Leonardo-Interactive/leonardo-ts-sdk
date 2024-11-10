# GetGenerationsByUserIdGenerationElements

This table captures the elements that are applied to a Generations, also the order and weightings used when applied.

## Example Usage

```typescript
import { GetGenerationsByUserIdGenerationElements } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetGenerationsByUserIdGenerationElements = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `lora`                                                            | [operations.Elements](../../../sdk/models/operations/elements.md) | :heavy_minus_sign:                                                | Element used for the generation.                                  |
| `weightApplied`                                                   | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |