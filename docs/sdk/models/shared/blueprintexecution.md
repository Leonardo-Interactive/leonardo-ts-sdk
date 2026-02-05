# BlueprintExecution

Represents the Execution of a Blueprint Version

## Example Usage

```typescript
import { BlueprintExecution, BlueprintExecutionStatus } from "@leonardo-ai/sdk/sdk/models/shared";

let value: BlueprintExecution = {
  akUUID: "<id>",
  createdAt: "1711289875058",
  inputs: [],
  public: false,
  status: BlueprintExecutionStatus.Queued,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `akUUID`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `createdAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `inputs`                                                                                  | [shared.NodeInput](../../../sdk/models/shared/nodeinput.md)[]                             | :heavy_check_mark:                                                                        | Inputs of the Blueprint Execution                                                         |
| `public`                                                                                  | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `status`                                                                                  | [shared.BlueprintExecutionStatus](../../../sdk/models/shared/blueprintexecutionstatus.md) | :heavy_check_mark:                                                                        | The status of a Blueprint Execution.                                                      |