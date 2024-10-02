# UploadDatasetImageRequest

## Example Usage

```typescript
import { UploadDatasetImageRequest } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadDatasetImageRequest = {
  requestBody: {
    extension: "pdf",
  },
  datasetId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                               | [operations.UploadDatasetImageRequestBody](../../../sdk/models/operations/uploaddatasetimagerequestbody.md) | :heavy_check_mark:                                                                                          | Query parameters provided in the request body as a JSON object                                              |
| `datasetId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | _"datasetId" is required                                                                                    |