# getVariationById
Available in: `variation`

This endpoint will get the variation by ID

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetVariationByIdRequest, GetVariationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { JobStatusEnum, VARIATIONTYPEEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetVariationByIdRequest = {
  id: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
};

sdk.variation.getVariationById(req).then((res: GetVariationByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```