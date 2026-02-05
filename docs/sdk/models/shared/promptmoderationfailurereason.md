# PromptModerationFailureReason

Details about a generation failure due to prompt moderation

## Example Usage

```typescript
import { PromptModerationFailureReason, Type } from "@leonardo-ai/sdk/sdk/models/shared";

let value: PromptModerationFailureReason = {
  affectedOutputCount: 1,
  message: "Generation blocked due to prompt moderation",
  type: Type.PromptModerationBlocked,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `affectedOutputCount`                                                                                  | *number*                                                                                               | :heavy_check_mark:                                                                                     | Number of outputs affected by this failure                                                             | 1                                                                                                      |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Human-readable message describing the failure                                                          | Generation blocked due to prompt moderation                                                            |
| `type`                                                                                                 | [shared.Type](../../../sdk/models/shared/type.md)                                                      | :heavy_check_mark:                                                                                     | The type of failure - PROMPT_MODERATION_BLOCKED indicates the prompt was blocked by content moderation | PROMPT_MODERATION_BLOCKED                                                                              |