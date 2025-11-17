# PricingCalculatorServices

The services to be chosen for calculating the API credit cost.

## Example Usage

```typescript
import { PricingCalculatorServices } from "@leonardo-ai/sdk/sdk/models/shared";

let value: PricingCalculatorServices = PricingCalculatorServices.ModelTraining;
```

## Values

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ImageGeneration`            | IMAGE_GENERATION             |
| `FantasyAvatarGeneration`    | FANTASY_AVATAR_GENERATION    |
| `MotionSvdGeneration`        | MOTION_SVD_GENERATION        |
| `MotionVideoGeneration`      | MOTION_VIDEO_GENERATION      |
| `Veo3MotionVideoGeneration`  | VEO3_MOTION_VIDEO_GENERATION |
| `LcmGeneration`              | LCM_GENERATION               |
| `ModelTraining`              | MODEL_TRAINING               |
| `TextureGeneration`          | TEXTURE_GENERATION           |
| `UniversalUpscaler`          | UNIVERSAL_UPSCALER           |
| `UniversalUpscalerUltra`     | UNIVERSAL_UPSCALER_ULTRA     |