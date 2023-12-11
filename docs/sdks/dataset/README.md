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

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.dataset.createDataset({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateDatasetRequestBody](../../sdk/models/operations/createdatasetrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateDatasetResponse](../../sdk/models/operations/createdatasetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteDatasetById

This endpoint deletes the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteDatasetByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const id: string = "string";

  const res = await sdk.dataset.deleteDatasetById(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the dataset to delete.                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteDatasetByIdResponse](../../sdk/models/operations/deletedatasetbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getDatasetById

This endpoint gets the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetDatasetByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const id: string = "string";

  const res = await sdk.dataset.getDatasetById(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the dataset to return.                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetDatasetByIdResponse](../../sdk/models/operations/getdatasetbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploadDatasetImage

This endpoint returns presigned details to upload a dataset image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageRequest, UploadDatasetImageRequestBody } from "@leonardo-ai/sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const requestBody: UploadDatasetImageRequestBody = {
  extension: "mpg4",
};
const datasetId: string = "string";

  const res = await sdk.dataset.uploadDatasetImage(requestBody, datasetId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                            | [operations.UploadDatasetImageRequestBody](../../sdk/models/operations/uploaddatasetimagerequestbody.md) | :heavy_check_mark:                                                                                       | Query parameters provided in the request body as a JSON object                                           |
| `datasetId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | _"datasetId" is required                                                                                 |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UploadDatasetImageResponse](../../sdk/models/operations/uploaddatasetimageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploadDatasetImageFromGen

This endpoint will upload a previously generated image to the dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageFromGenRequest, UploadDatasetImageFromGenRequestBody } from "@leonardo-ai/sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const requestBody: UploadDatasetImageFromGenRequestBody = {
  generatedImageId: "string",
};
const datasetId: string = "string";

  const res = await sdk.dataset.uploadDatasetImageFromGen(requestBody, datasetId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                          | [operations.UploadDatasetImageFromGenRequestBody](../../sdk/models/operations/uploaddatasetimagefromgenrequestbody.md) | :heavy_check_mark:                                                                                                     | Query parameters to be provided in the request body as a JSON object                                                   |
| `datasetId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the dataset to upload the image to.                                                                          |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UploadDatasetImageFromGenResponse](../../sdk/models/operations/uploaddatasetimagefromgenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
