# initImage

### Available Operations

* [deleteInitImageById](#deleteinitimagebyid) - Delete init image
* [getInitImageById](#getinitimagebyid) - Get single init image
* [uploadInitImage](#uploadinitimage) - Upload init image

## deleteInitImageById

This endpoint deletes an init image

### Example Usage

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

## getInitImageById

This endpoint will return a single init image

### Example Usage

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

## uploadInitImage

This endpoint returns presigned details to upload an init image to S3

### Example Usage

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
