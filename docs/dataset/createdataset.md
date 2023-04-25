# createDataset
Available in: `dataset`

This endpoint creates a new dataset

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateDatasetRequestBody, CreateDatasetResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateDatasetRequestBody = {
  description: "corrupti",
  name: "Ben Mueller",
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```