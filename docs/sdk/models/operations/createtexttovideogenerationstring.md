# CreateTextToVideoGenerationString

The model to use for the video generation. Defaults to MOTION2 if not specified.

## Example Usage

```typescript
import { CreateTextToVideoGenerationString } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateTextToVideoGenerationString =
  CreateTextToVideoGenerationString.Veo3;
```

## Values

| Name          | Value         |
| ------------- | ------------- |
| `Motion2`     | MOTION2       |
| `Veo3`        | VEO3          |
| `Motion2Fast` | MOTION2FAST   |
| `Veo3Fast`    | VEO3FAST      |
| `Kling21`     | KLING2_1      |
| `Kling25`     | KLING2_5      |