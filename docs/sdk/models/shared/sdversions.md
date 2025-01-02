# SdVersions

The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5. Also includes SDXL and SDXL Lightning models

## Example Usage

```typescript
import { SdVersions } from "@leonardo-ai/sdk/sdk/models/shared";

let value: SdVersions = SdVersions.V3;
```

## Values

| Name            | Value           |
| --------------- | --------------- |
| `V15`           | v1_5            |
| `V2`            | v2              |
| `V3`            | v3              |
| `Sdxl08`        | SDXL_0_8        |
| `Sdxl09`        | SDXL_0_9        |
| `Sdxl10`        | SDXL_1_0        |
| `SdxlLightning` | SDXL_LIGHTNING  |
| `Phoenix`       | PHOENIX         |