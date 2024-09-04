# UploadDatasetImageFromGenRequestBody

Query parameters to be provided in the request body as a JSON object

## Example Usage

```typescript
import { UploadDatasetImageFromGenRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadDatasetImageFromGenRequestBody = {
    generatedImageId: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `generatedImageId`                            | *string*                                      | :heavy_check_mark:                            | The ID of the image to upload to the dataset. |