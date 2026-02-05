# BlueprintExecutionGeneration

Represents a single generation within a Blueprint Execution

## Example Usage

```typescript
import { BlueprintExecutionGeneration, BlueprintExecutionGenerationStatus, Type } from "@leonardo-ai/sdk/sdk/models/shared";

let value: BlueprintExecutionGeneration = {
  akUUID: "<id>",
  failedReason: {
    affectedOutputCount: 1,
    message: "Generation blocked due to prompt moderation",
    type: Type.PromptModerationBlocked,
  },
  generationId: "1f0bba44-923a-69b0-b519-62a6710d46a9",
  status: BlueprintExecutionGenerationStatus.Pending,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `akUUID`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `failedReason`                                                                                                | [shared.PromptModerationFailureReason](../../../sdk/models/shared/promptmoderationfailurereason.md)           | :heavy_minus_sign:                                                                                            | Details about a generation failure due to prompt moderation                                                   |                                                                                                               |
| `generationId`                                                                                                | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The generation ID associated with this execution generation                                                   | 1f0bba44-923a-69b0-b519-62a6710d46a9                                                                          |
| `status`                                                                                                      | [shared.BlueprintExecutionGenerationStatus](../../../sdk/models/shared/blueprintexecutiongenerationstatus.md) | :heavy_check_mark:                                                                                            | The status of a Blueprint Execution Generation                                                                |                                                                                                               |