# GeneratedImageVariationMotion

columns and relationships of "generated_image_variation_motion"

## Example Usage

```typescript
import { GeneratedImageVariationMotion } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GeneratedImageVariationMotion = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `createdAt`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `motionTransformType`                                                            | [shared.MotionVariationType](../../../sdk/models/shared/motionvariationtype.md)  | :heavy_minus_sign:                                                               | The type of motion variation.                                                    |
| `resolution`                                                                     | [shared.MotionResolution](../../../sdk/models/shared/motionresolution.md)        | :heavy_minus_sign:                                                               | The resolution of the upscaled video. RESOLUTION_720 is the only option for now. |
| `status`                                                                         | [shared.JobStatus](../../../sdk/models/shared/jobstatus.md)                      | :heavy_minus_sign:                                                               | The status of the current task.                                                  |
| `url`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |