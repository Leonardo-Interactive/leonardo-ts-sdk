# Delete3DModelByIdResponse

## Example Usage

```typescript
import { Delete3DModelByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: Delete3DModelByIdResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `object`                                                                                                    | [operations.Delete3DModelByIdResponseBody](../../../sdk/models/operations/delete3dmodelbyidresponsebody.md) | :heavy_minus_sign:                                                                                          | Responses for DELETE /api/rest/v1/models-3d/{id}                                                            |