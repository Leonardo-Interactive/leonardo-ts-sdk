# PricingCalculatorServices

The services to be chosen for calculating the API credit cost.

## Example Usage

```typescript
import { PricingCalculatorServices } from "@leonardo-ai/sdk/sdk/models/shared";

let value: PricingCalculatorServices =
  PricingCalculatorServices.FantasyAvatarGeneration;
```

## Values

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `ImageGeneration`         | IMAGE_GENERATION          |
| `FantasyAvatarGeneration` | FANTASY_AVATAR_GENERATION |
| `MotionGeneration`        | MOTION_GENERATION         |
| `LcmGeneration`           | LCM_GENERATION            |
| `ModelTraining`           | MODEL_TRAINING            |
| `TextureGeneration`       | TEXTURE_GENERATION        |
| `UniversalUpscaler`       | UNIVERSAL_UPSCALER        |
| `UniversalUpscalerUltra`  | UNIVERSAL_UPSCALER_ULTRA  |