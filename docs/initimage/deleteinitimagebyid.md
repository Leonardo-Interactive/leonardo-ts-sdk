# deleteInitImageById
Available in: `initImage`

This endpoint deletes an init image

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteInitImageByIdRequest, DeleteInitImageByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteInitImageByIdRequest = {
  id: "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4",
};

sdk.initImage.deleteInitImageById(req).then((res: DeleteInitImageByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```