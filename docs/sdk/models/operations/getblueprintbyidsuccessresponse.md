# GetBlueprintByIdSuccessResponse

## Example Usage

```typescript
import { GetBlueprintByIdSuccessResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetBlueprintByIdSuccessResponse = {
  blueprint: {
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
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `blueprint`                                                 | [shared.Blueprint](../../../sdk/models/shared/blueprint.md) | :heavy_minus_sign:                                          | A Blueprint object                                          |