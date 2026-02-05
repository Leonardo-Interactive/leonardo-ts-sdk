# UploadDatasetImageResponse

## Example Usage

```typescript
import { UploadDatasetImageResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadDatasetImageResponse = {
  contentType: "<value>",
  statusCode: 807042,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `object`                                                                                                      | [operations.UploadDatasetImageResponseBody](../../../sdk/models/operations/uploaddatasetimageresponsebody.md) | :heavy_minus_sign:                                                                                            | Responses for POST /datasets/{datasetId}/upload                                                               |