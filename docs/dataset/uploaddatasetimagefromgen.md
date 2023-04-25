# uploadDatasetImageFromGen
Available in: `dataset`

This endpoint will upload a previously generated image to the dataset

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageFromGenRequest, UploadDatasetImageFromGenResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UploadDatasetImageFromGenRequest = {
  requestBody: {
    generatedImageId: "hic",
  },
  datasetId: "saepe",
};

sdk.dataset.uploadDatasetImageFromGen(req).then((res: UploadDatasetImageFromGenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```