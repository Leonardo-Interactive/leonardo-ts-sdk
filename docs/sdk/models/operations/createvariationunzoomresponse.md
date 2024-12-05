# CreateVariationUnzoomResponse

## Example Usage

```typescript
import { CreateVariationUnzoomResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateVariationUnzoomResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `object`                                                                                                            | [operations.CreateVariationUnzoomResponseBody](../../../sdk/models/operations/createvariationunzoomresponsebody.md) | :heavy_minus_sign:                                                                                                  | Responses for POST /api/rest/v1/variations/unzoom                                                                   |