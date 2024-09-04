# GetDatasetByIdResponse

## Example Usage

```typescript
import { GetDatasetByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetDatasetByIdResponse = {
    contentType: "<value>",
    statusCode: 423655,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `object`                                                                                              | [operations.GetDatasetByIdResponseBody](../../../sdk/models/operations/getdatasetbyidresponsebody.md) | :heavy_minus_sign:                                                                                    | Responses for GET /datasets/{id}                                                                      |