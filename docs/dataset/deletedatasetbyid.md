# deleteDatasetById
Available in: `dataset`

This endpoint deletes the specific dataset

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteDatasetByIdRequest, DeleteDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteDatasetByIdRequest = {
  id: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
};

sdk.dataset.deleteDatasetById(req).then((res: DeleteDatasetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```