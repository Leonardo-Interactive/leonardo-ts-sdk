# GetGenerationsByUserIdResponse

## Example Usage

```typescript
import { GetGenerationsByUserIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetGenerationsByUserIdResponse = {
  contentType: "<value>",
  statusCode: 410,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `object`                                                                                                              | [operations.GetGenerationsByUserIdResponseBody](../../../sdk/models/operations/getgenerationsbyuseridresponsebody.md) | :heavy_minus_sign:                                                                                                    | Responses for GET /generations/user/{userId}                                                                          |