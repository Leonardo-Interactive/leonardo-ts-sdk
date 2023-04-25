# uploadInitImage
Available in: `initImage`

This endpoint returns presigned details to upload an init image to S3

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadInitImageRequestBody, UploadInitImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UploadInitImageRequestBody = {
  extension: "in",
};

sdk.initImage.uploadInitImage(req).then((res: UploadInitImageResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```