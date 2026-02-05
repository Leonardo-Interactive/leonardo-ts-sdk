# GetBlueprintExecutionGenerationsResponse

## Example Usage

```typescript
import { GetBlueprintExecutionGenerationsResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetBlueprintExecutionGenerationsResponse = {
  contentType: "<value>",
  statusCode: 212981,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `object`                                                                                                                                  | [operations.GetBlueprintExecutionGenerationsResponseBody](../../../sdk/models/operations/getblueprintexecutiongenerationsresponsebody.md) | :heavy_minus_sign:                                                                                                                        | Successfully retrieved Blueprint Execution Generations                                                                                    |