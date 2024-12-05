# UploadModelAssetResponse

## Example Usage

```typescript
import { UploadModelAssetResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadModelAssetResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.UploadModelAssetResponseBody](../../../sdk/models/operations/uploadmodelassetresponsebody.md) | :heavy_minus_sign:                                                                                        | Responses for POST /api/rest/v1/models-3d/upload                                                          |