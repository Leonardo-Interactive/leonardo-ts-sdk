# SdGenerationStyle

The style to generate images with. When photoReal is enabled, refer to the Guide section for a full list. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.

## Example Usage

```typescript
import { SdGenerationStyle } from "@leonardo-ai/sdk/sdk/models/shared";

let value: SdGenerationStyle = SdGenerationStyle.Render3D;
```

## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `Anime`            | ANIME              |
| `Bokeh`            | BOKEH              |
| `Cinematic`        | CINEMATIC          |
| `CinematicCloseup` | CINEMATIC_CLOSEUP  |
| `Creative`         | CREATIVE           |
| `Dynamic`          | DYNAMIC            |
| `Environment`      | ENVIRONMENT        |
| `Fashion`          | FASHION            |
| `Film`             | FILM               |
| `Food`             | FOOD               |
| `General`          | GENERAL            |
| `Hdr`              | HDR                |
| `Illustration`     | ILLUSTRATION       |
| `Leonardo`         | LEONARDO           |
| `LongExposure`     | LONG_EXPOSURE      |
| `Macro`            | MACRO              |
| `Minimalistic`     | MINIMALISTIC       |
| `Monochrome`       | MONOCHROME         |
| `Moody`            | MOODY              |
| `None`             | NONE               |
| `Neutral`          | NEUTRAL            |
| `Photography`      | PHOTOGRAPHY        |
| `Portrait`         | PORTRAIT           |
| `Raytraced`        | RAYTRACED          |
| `Render3D`         | RENDER_3D          |
| `Retro`            | RETRO              |
| `SketchBw`         | SKETCH_BW          |
| `SketchColor`      | SKETCH_COLOR       |
| `StockPhoto`       | STOCK_PHOTO        |
| `Vibrant`          | VIBRANT            |
| `Unprocessed`      | UNPROCESSED        |