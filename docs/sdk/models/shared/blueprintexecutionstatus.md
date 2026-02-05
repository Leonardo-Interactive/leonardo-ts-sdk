# BlueprintExecutionStatus

The status of a Blueprint Execution.

## Example Usage

```typescript
import { BlueprintExecutionStatus } from "@leonardo-ai/sdk/sdk/models/shared";

let value: BlueprintExecutionStatus = BlueprintExecutionStatus.Queued;
```

## Values

| Name        | Value       |
| ----------- | ----------- |
| `Pending`   | PENDING     |
| `Queued`    | QUEUED      |
| `Completed` | COMPLETED   |
| `Failed`    | FAILED      |