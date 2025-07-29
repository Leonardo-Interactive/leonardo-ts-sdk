# GetVariationByIdResponse

## Example Usage

```typescript
import { GetVariationByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetVariationByIdResponse = {
  contentType: "<value>",
  statusCode: 951273,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetVariationByIdResponseBody](../../../sdk/models/operations/getvariationbyidresponsebody.md) | :heavy_minus_sign:                                                                                        | Responses for GET /variations/{id}                                                                        |