# CreateTextToVideoGenerationMotionString

The resolution of the video. Defaults to RESOLUTION_480 if not specified. VEO3 only supports RESOLUTION_720 and RESOLUTION_1080.

## Example Usage

```typescript
import { CreateTextToVideoGenerationMotionString } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateTextToVideoGenerationMotionString =
  CreateTextToVideoGenerationMotionString.Resolution480;
```

## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `Resolution480`  | RESOLUTION_480   |
| `Resolution720`  | RESOLUTION_720   |
| `Resolution1080` | RESOLUTION_1080  |