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

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.deleteInitImageById("at").then((res: DeleteInitImageByIdResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.getInitImageById("at").then((res: GetInitImageByIdResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.initImage.uploadInitImage({
  extension: "maiores",
}).then((res: UploadInitImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
