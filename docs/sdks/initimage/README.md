# InitImage

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

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "architecto";

sdk.initImage.deleteInitImageById(id).then((res: DeleteInitImageByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | _"id" is required_                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteInitImageByIdResponse](../../models/operations/deleteinitimagebyidresponse.md)>**


## getInitImageById

This endpoint will return a single init image

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetInitImageByIdRequest, GetInitImageByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "ipsa";

sdk.initImage.getInitImageById(id).then((res: GetInitImageByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | _"id" is required_                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInitImageByIdResponse](../../models/operations/getinitimagebyidresponse.md)>**


## uploadInitImage

This endpoint returns presigned details to upload an init image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadInitImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.initImage.uploadInitImage({
  extension: "reiciendis",
}).then((res: UploadInitImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UploadInitImageRequestBody](../../models/operations/uploadinitimagerequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UploadInitImageResponse](../../models/operations/uploadinitimageresponse.md)>**

