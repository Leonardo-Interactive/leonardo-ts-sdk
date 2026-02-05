# GetBlueprintExecutionGenerationsResponseBody

Successfully retrieved Blueprint Execution Generations

## Example Usage

```typescript
import { GetBlueprintExecutionGenerationsResponseBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetBlueprintExecutionGenerationsResponseBody = {
  blueprintExecutionGenerations: {
    edges: [],
    pageInfo: {},
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `blueprintExecutionGenerations`                                                                                         | [shared.BlueprintExecutionGenerationsConnection](../../../sdk/models/shared/blueprintexecutiongenerationsconnection.md) | :heavy_minus_sign:                                                                                                      | A paginated connection of Blueprint Execution Generations                                                               |