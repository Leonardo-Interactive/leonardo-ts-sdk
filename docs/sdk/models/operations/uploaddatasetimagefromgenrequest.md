# UploadDatasetImageFromGenRequest

## Example Usage

```typescript
import { UploadDatasetImageFromGenRequest } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadDatasetImageFromGenRequest = {
    requestBody: {
        generatedImageId: "<value>",
    },
    datasetId: "<value>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                             | [operations.UploadDatasetImageFromGenRequestBody](../../../sdk/models/operations/uploaddatasetimagefromgenrequestbody.md) | :heavy_check_mark:                                                                                                        | Query parameters to be provided in the request body as a JSON object                                                      |
| `datasetId`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The ID of the dataset to upload the image to.                                                                             |