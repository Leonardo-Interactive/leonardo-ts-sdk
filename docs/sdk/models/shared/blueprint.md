# Blueprint

A Blueprint object

## Example Usage

```typescript
import { Blueprint } from "@leonardo-ai/sdk/sdk/models/shared";

let value: Blueprint = {
  akUUID: "c846413e-92ba-4302-84f8-47c667d4761f",
  createdAt: new Date("2025-10-29T21:31:47.999Z"),
  description:
    "Relight an image with warm, golden tones of late afternoon sunlight for a soft and radiant glow.",
  name: "Golden Hour Relight",
  official: true,
  teamId: null,
  thumbnails: [
    {
      name: "thumbnailUrl",
      url:
        "https://cdn.leonardo.ai/blueprint_assets/official/384ab5c8-55d8-47a1-be22-6a274913c324/thumbnails/goldenhour.jpg",
    },
  ],
  updatedAt: new Date("2025-12-19T02:34:44.740Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `akUUID`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Unique identifier for the Blueprint                                                              | c846413e-92ba-4302-84f8-47c667d4761f                                                             |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Creation timestamp                                                                               | 2025-10-29T21:31:47.999Z                                                                         |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Description of the Blueprint                                                                     | Relight an image with warm, golden tones of late afternoon sunlight for a soft and radiant glow. |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Name of the Blueprint                                                                            | Golden Hour Relight                                                                              |
| `official`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether this is an official Blueprint                                                            | true                                                                                             |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Team ID if Blueprint belongs to a team                                                           | <nil>                                                                                            |
| `thumbnails`                                                                                     | [shared.Thumbnails](../../../sdk/models/shared/thumbnails.md)[]                                  | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `updatedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Last update timestamp                                                                            | 2025-12-19T02:34:44.740Z                                                                         |