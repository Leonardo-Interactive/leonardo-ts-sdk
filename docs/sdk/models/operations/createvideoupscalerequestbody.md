# CreateVideoUpscaleRequestBody

Query parameters can also be provided in the request body as a JSON object

## Example Usage

```typescript
import { CreateVideoUpscaleRequestBody, CreateVideoUpscaleString } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateVideoUpscaleRequestBody = {
  resolution: CreateVideoUpscaleString.Resolution720,
  sourceGenerationId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `resolution`                                                                                      | [operations.CreateVideoUpscaleString](../../../sdk/models/operations/createvideoupscalestring.md) | :heavy_check_mark:                                                                                | The resolution of the upscaled video. RESOLUTION_720 is the only option for now.                  |
| `sourceGenerationId`                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID of the source video generation to upscale.                                                 |