# PromptImproveRequestBody

Query parameters to be provided in the request body as a JSON object

## Example Usage

```typescript
import { PromptImproveRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: PromptImproveRequestBody = {
  isVideo: true,
  prompt: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `isVideo`                                                                                 | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Specifies whether the prompt is for a video generation. Defaults to false (image prompt). | true                                                                                      |
| `prompt`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | The prompt to improve.                                                                    |                                                                                           |
| `promptInstructions`                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | The prompt is improved based on the given instructions.                                   |                                                                                           |