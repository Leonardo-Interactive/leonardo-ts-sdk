# BlueprintExecutionGenerationEdge

An edge containing a Blueprint Execution Generation node

## Example Usage

```typescript
import { BlueprintExecutionGenerationEdge, BlueprintExecutionGenerationStatus, Type } from "@leonardo-ai/sdk/sdk/models/shared";

let value: BlueprintExecutionGenerationEdge = {
  cursor: "<value>",
  node: {
    akUUID: "<id>",
    failedReason: {
      affectedOutputCount: 1,
      message: "Generation blocked due to prompt moderation",
      type: Type.PromptModerationBlocked,
    },
    generationId: "1f0bba44-923a-69b0-b519-62a6710d46a9",
    status: BlueprintExecutionGenerationStatus.Completed,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | An opaque cursor used for pagination                                                              |
| `node`                                                                                            | [shared.BlueprintExecutionGeneration](../../../sdk/models/shared/blueprintexecutiongeneration.md) | :heavy_check_mark:                                                                                | Represents a single generation within a Blueprint Execution                                       |