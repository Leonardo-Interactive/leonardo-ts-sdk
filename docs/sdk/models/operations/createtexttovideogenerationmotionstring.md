# CreateTextToVideoGenerationMotionString

The resolution of the video. MOTION2 and MOTION2FAST supports RESOLUTION_480 and RESOLUTION_720 and defaults to RESOLUTION_480 if not specified. VEO3 and VEO3FAST supports RESOLUTION_720 and RESOLUTION_1080 and defaults to RESOLUTION_720 if not specified.

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