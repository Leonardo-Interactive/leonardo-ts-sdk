# Dataset
(*dataset*)

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

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });

  const res = await sdk.dataset.createDataset({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeleteDatasetByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });
const id: string = "string";

  const res = await sdk.dataset.deleteDatasetById(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetDatasetByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });
const id: string = "string";

  const res = await sdk.dataset.getDatasetById(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UploadDatasetImageRequest, UploadDatasetImageRequestBody } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });
const requestBody: UploadDatasetImageRequestBody = {
  extension: "mpg4",
};
const datasetId: string = "string";

  const res = await sdk.dataset.uploadDatasetImage(requestBody, datasetId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UploadDatasetImageFromGenRequest, UploadDatasetImageFromGenRequestBody } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });
const requestBody: UploadDatasetImageFromGenRequestBody = {
  generatedImageId: "string",
};
const datasetId: string = "string";

  const res = await sdk.dataset.uploadDatasetImageFromGen(requestBody, datasetId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                      | [operations.UploadDatasetImageFromGenRequestBody](../../models/operations/uploaddatasetimagefromgenrequestbody.md) | :heavy_check_mark:                                                                                                 | Query parameters to be provided in the request body as a JSON object                                               |
| `datasetId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the dataset to upload the image to.                                                                      |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UploadDatasetImageFromGenResponse](../../models/operations/uploaddatasetimagefromgenresponse.md)>**

