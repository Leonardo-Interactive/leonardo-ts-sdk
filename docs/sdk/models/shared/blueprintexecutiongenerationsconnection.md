# BlueprintExecutionGenerationsConnection

A paginated connection of Blueprint Execution Generations

## Example Usage

```typescript
import { BlueprintExecutionGenerationsConnection } from "@leonardo-ai/sdk/sdk/models/shared";

let value: BlueprintExecutionGenerationsConnection = {
  edges: [],
  pageInfo: {},
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `edges`                                                                                                     | [shared.BlueprintExecutionGenerationEdge](../../../sdk/models/shared/blueprintexecutiongenerationedge.md)[] | :heavy_check_mark:                                                                                          | List of generation edges                                                                                    |
| `pageInfo`                                                                                                  | [shared.PageInfo](../../../sdk/models/shared/pageinfo.md)                                                   | :heavy_check_mark:                                                                                          | Pagination information following the Relay cursor pagination spec                                           |