# ControlnetInput

## Example Usage

```typescript
import { ControlnetInput } from "@leonardo-ai/sdk/sdk/models/shared";

let value: ControlnetInput = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `initImageId`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The ID of the init image                                                                                   |
| `initImageType`                                                                                            | [shared.InitImageType](../../../sdk/models/shared/initimagetype.md)                                        | :heavy_minus_sign:                                                                                         | Type indicating whether the init image is uploaded or generated.                                           |
| `preprocessorId`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | ID of the controlnet. A list of compatible IDs can be found in our guides.                                 |
| `strengthType`                                                                                             | [shared.StrengthType](../../../sdk/models/shared/strengthtype.md)                                          | :heavy_minus_sign:                                                                                         | Strength type for the controlnet. Can only be used for Style, Character and Content Reference controlnets. |
| `weight`                                                                                                   | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Weight for the controlnet                                                                                  |