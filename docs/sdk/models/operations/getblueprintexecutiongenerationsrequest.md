# GetBlueprintExecutionGenerationsRequest

## Example Usage

```typescript
import { GetBlueprintExecutionGenerationsRequest } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetBlueprintExecutionGenerationsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `after`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Cursor for forward pagination - returns generations after this cursor               |
| `before`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | Cursor for backward pagination - returns generations before this cursor             |
| `first`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Number of generations to return from the beginning of the list (forward pagination) |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | The akUUID of the Blueprint Execution to retrieve generations for                   |
| `last`                                                                              | *number*                                                                            | :heavy_minus_sign:                                                                  | Number of generations to return from the end of the list (backward pagination)      |