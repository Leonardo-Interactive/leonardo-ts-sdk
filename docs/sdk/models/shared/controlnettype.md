# ~~ControlnetType~~

This parameter will be deprecated in September 2024. Please use the controlnets array instead.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ControlnetType } from "@leonardo-ai/sdk/sdk/models/shared";

let value: ControlnetType = ControlnetType.Canny;
```

## Values

| Name    | Value   |
| ------- | ------- |
| `Pose`  | POSE    |
| `Canny` | CANNY   |
| `Depth` | DEPTH   |