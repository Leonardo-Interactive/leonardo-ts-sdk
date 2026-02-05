# Thumbnails

## Example Usage

```typescript
import { Thumbnails } from "@leonardo-ai/sdk/sdk/models/shared";

let value: Thumbnails = {
  name: "thumbnailUrl",
  url:
    "https://cdn.leonardo.ai/blueprint_assets/official/384ab5c8-55d8-47a1-be22-6a274913c324/thumbnails/goldenhour.jpg",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Thumbnail type name (e.g., thumbnailUrl, videoUrl, thumbnailUrlBanner, thumbnailUrlLandscape, thumbnailUrlExtremePortrait) | thumbnailUrl                                                                                                               |
| `url`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | URL of the thumbnail                                                                                                       | https://cdn.leonardo.ai/blueprint_assets/official/384ab5c8-55d8-47a1-be22-6a274913c324/thumbnails/goldenhour.jpg           |