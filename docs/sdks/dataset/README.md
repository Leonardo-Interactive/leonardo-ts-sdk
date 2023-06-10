# dataset

### Available Operations

* [createDataset](#createdataset) - Create a Dataset
* [deleteDatasetById](#deletedatasetbyid) - Delete a Single Dataset by ID
* [getDatasetById](#getdatasetbyid) - Get a Single Dataset by ID
* [uploadDatasetImage](#uploaddatasetimage) - Upload dataset image
* [uploadDatasetImageFromGen](#uploaddatasetimagefromgen) - Upload a Single Generated Image to a Dataset

## createDataset

This endpoint creates a new dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateDatasetResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.dataset.createDataset({
  description: "corrupti",
  name: "Ben Mueller",
}).then((res: CreateDatasetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateDatasetRequestBody](../../models/operations/createdatasetrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateDatasetResponse](../../models/operations/createdatasetresponse.md)>**


## deleteDatasetById

This endpoint deletes the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.dataset.deleteDatasetById("iure").then((res: DeleteDatasetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the dataset to delete.                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteDatasetByIdResponse](../../models/operations/deletedatasetbyidresponse.md)>**


## getDatasetById

This endpoint gets the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.dataset.getDatasetById("magnam").then((res: GetDatasetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the dataset to return.                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetDatasetByIdResponse](../../models/operations/getdatasetbyidresponse.md)>**


## uploadDatasetImage

This endpoint returns presigned details to upload a dataset image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.dataset.uploadDatasetImage({
  extension: "debitis",
}, "ipsa").then((res: UploadDatasetImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                        | [operations.UploadDatasetImageRequestBody](../../models/operations/uploaddatasetimagerequestbody.md) | :heavy_check_mark:                                                                                   | Query parameters provided in the request body as a JSON object                                       |
| `datasetId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | _"datasetId" is required                                                                             |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UploadDatasetImageResponse](../../models/operations/uploaddatasetimageresponse.md)>**


## uploadDatasetImageFromGen

This endpoint will upload a previously generated image to the dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageFromGenResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.dataset.uploadDatasetImageFromGen({
  generatedImageId: "delectus",
}, "tempora").then((res: UploadDatasetImageFromGenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                      | [operations.UploadDatasetImageFromGenRequestBody](../../models/operations/uploaddatasetimagefromgenrequestbody.md) | :heavy_check_mark:                                                                                                 | Query parameters to be provided in the request body as a JSON object                                               |
| `datasetId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the dataset to upload the image to.                                                                      |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UploadDatasetImageFromGenResponse](../../models/operations/uploaddatasetimagefromgenresponse.md)>**

