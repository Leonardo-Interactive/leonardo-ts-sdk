# SdGenerationSchedulers

The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.

## Example Usage

```typescript
import { SdGenerationSchedulers } from "@leonardo-ai/sdk/sdk/models/shared";

let value: SdGenerationSchedulers = SdGenerationSchedulers.Klms;
```

## Values

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `Klms`                   | KLMS                     |
| `EulerAncestralDiscrete` | EULER_ANCESTRAL_DISCRETE |
| `EulerDiscrete`          | EULER_DISCRETE           |
| `Ddim`                   | DDIM                     |
| `DpmSolver`              | DPM_SOLVER               |
| `Pndm`                   | PNDM                     |
| `Leonardo`               | LEONARDO                 |