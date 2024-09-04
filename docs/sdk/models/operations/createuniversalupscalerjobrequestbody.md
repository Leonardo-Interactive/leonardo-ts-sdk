# CreateUniversalUpscalerJobRequestBody

Query parameters are provided in the request body as a JSON object

## Example Usage

```typescript
import { CreateUniversalUpscalerJobRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateUniversalUpscalerJobRequestBody = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `creativityStrength`                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | The creativity strength of the universal upscaler, must be integer between 1 and 10    |
| `generatedImageId`                                                                     | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the generated image                                                          |
| `initImageId`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the init image uploaded                                                      |
| `prompt`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The prompt for the universal upscaler                                                  |
| `upscaleMultiplier`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | The upscale multiplier of the universal upscaler, must be number between 1.00 and 2.00 |
| `upscalerStyle`                                                                        | [shared.UniversalUpscalerStyle](../../../sdk/models/shared/universalupscalerstyle.md)  | :heavy_minus_sign:                                                                     | The style to upscale images using universal upscaler with.                             |
| `variationId`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the variation image                                                          |