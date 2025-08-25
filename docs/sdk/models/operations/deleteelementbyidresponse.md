# DeleteElementByIdResponse

## Example Usage

```typescript
import { DeleteElementByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: DeleteElementByIdResponse = {
  contentType: "<value>",
  statusCode: 615392,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `object`                                                                                                    | [operations.DeleteElementByIdResponseBody](../../../sdk/models/operations/deleteelementbyidresponsebody.md) | :heavy_minus_sign:                                                                                          | Responses for DELETE /models/{id}                                                                           |