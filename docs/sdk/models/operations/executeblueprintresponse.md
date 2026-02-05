# ExecuteBlueprintResponse

## Example Usage

```typescript
import { ExecuteBlueprintResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: ExecuteBlueprintResponse = {
  contentType: "<value>",
  statusCode: 178235,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `object`                                                                                                                      | [operations.ExecuteBlueprintBlueprintsResponseBody](../../../sdk/models/operations/executeblueprintblueprintsresponsebody.md) | :heavy_minus_sign:                                                                                                            | Bad Request - Invalid input type or missing required GraphQL field                                                            |
| `oneOf`                                                                                                                       | *operations.ExecuteBlueprintResponseBody*                                                                                     | :heavy_minus_sign:                                                                                                            | Responses for POST /blueprint-executions                                                                                      |