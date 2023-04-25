# getDatasetById
Available in: `dataset`

This endpoint gets the specific dataset

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetDatasetByIdRequest, GetDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetDatasetByIdRequest = {
  id: "c78ca1ba-928f-4c81-a742-cb7392059293",
};

sdk.dataset.getDatasetById(req).then((res: GetDatasetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```