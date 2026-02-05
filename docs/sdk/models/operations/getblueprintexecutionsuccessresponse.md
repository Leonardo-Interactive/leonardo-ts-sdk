# GetBlueprintExecutionSuccessResponse

## Example Usage

```typescript
import { GetBlueprintExecutionSuccessResponse } from "@leonardo-ai/sdk/sdk/models/operations";
import { BlueprintExecutionStatus } from "@leonardo-ai/sdk/sdk/models/shared";

let value: GetBlueprintExecutionSuccessResponse = {
  blueprintExecution: {
    akUUID: "<id>",
    createdAt: "1730013994479",
    inputs: [],
    public: true,
    status: BlueprintExecutionStatus.Completed,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `blueprintExecution`                                                          | [shared.BlueprintExecution](../../../sdk/models/shared/blueprintexecution.md) | :heavy_minus_sign:                                                            | Represents the Execution of a Blueprint Version                               |