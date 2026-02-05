# Cost

The cost of the operation.

## Example Usage

```typescript
import { Cost } from "@leonardo-ai/sdk/sdk/models/shared";

let value: Cost = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `amount`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The amount of the cost.                                                                      |
| `unit`                                                                                       | [shared.Unit](../../../sdk/models/shared/unit.md)                                            | :heavy_minus_sign:                                                                           | The unit of the cost. Can be CREDITS or DOLLARS. Note: DOLLARS unit only supports PAYG plan. |