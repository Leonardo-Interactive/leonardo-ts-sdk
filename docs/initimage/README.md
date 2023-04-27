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
import { DeleteInitImageByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.deleteInitImageById({
  id: "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4",
}).then((res: DeleteInitImageByIdResponse | AxiosError) => {
  if (res instanceof DeleteInitImageByIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getInitImageById

This endpoint will return a single init image

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetInitImageByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.getInitImageById({
  id: "4269802d-502a-494b-b4f6-3c969e9a3efa",
}).then((res: GetInitImageByIdResponse | AxiosError) => {
  if (res instanceof GetInitImageByIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadInitImage

This endpoint returns presigned details to upload an init image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadInitImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.uploadInitImage({
  extension: "in",
}).then((res: UploadInitImageResponse | AxiosError) => {
  if (res instanceof UploadInitImageResponse && res.statusCode == 200) {
    // handle response
  }
});
```
