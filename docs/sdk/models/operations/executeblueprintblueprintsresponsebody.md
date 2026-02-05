# ExecuteBlueprintBlueprintsResponseBody

Bad Request - Invalid input type or missing required GraphQL field

## Example Usage

```typescript
import { ExecuteBlueprintBlueprintsResponseBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: ExecuteBlueprintBlueprintsResponseBody = {
  error: "Invalid input type: expected 'string' for field 'blueprintVersionId'",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `error`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Error message describing the invalid input type or missing field     | Invalid input type: expected 'string' for field 'blueprintVersionId' |