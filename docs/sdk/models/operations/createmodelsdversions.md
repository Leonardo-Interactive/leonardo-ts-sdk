# CreateModelSdVersions

The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.

## Example Usage

```typescript
import { CreateModelSdVersions } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateModelSdVersions = CreateModelSdVersions.V15;
```

## Values

| Name  | Value |
| ----- | ----- |
| `V15` | v1_5  |
| `V2`  | v2    |