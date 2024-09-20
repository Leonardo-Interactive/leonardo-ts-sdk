# CreateSVDMotionGenerationRequestBody

Query parameters can also be provided in the request body as a JSON object

## Example Usage

```typescript
import { CreateSVDMotionGenerationRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateSVDMotionGenerationRequestBody = {
  imageId: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `imageId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the image, supports generated images, variation images, and init images.                    |
| `isInitImage`                                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | If it is an init image uploaded by the user. This image is uploaded from endpoint: Upload init image. |
| `isPublic`                                                                                            | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Whether the generation is public or not                                                               |
| `isVariation`                                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | If it is a variation image.                                                                           |
| `motionStrength`                                                                                      | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The motion strength.                                                                                  |