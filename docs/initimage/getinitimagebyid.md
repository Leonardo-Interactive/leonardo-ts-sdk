# getInitImageById
Available in: `initImage`

This endpoint will return a single init image

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetInitImageByIdRequest, GetInitImageByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetInitImageByIdRequest = {
  id: "4269802d-502a-494b-b4f6-3c969e9a3efa",
};

sdk.initImage.getInitImageById(req).then((res: GetInitImageByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```