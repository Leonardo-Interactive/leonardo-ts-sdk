# uploadDatasetImage
Available in: `dataset`

This endpoint returns presigned details to upload a dataset image to S3

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageRequest, UploadDatasetImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UploadDatasetImageRequest = {
  requestBody: {
    extension: "natus",
  },
  datasetId: "laboriosam",
};

sdk.dataset.uploadDatasetImage(req).then((res: UploadDatasetImageResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```