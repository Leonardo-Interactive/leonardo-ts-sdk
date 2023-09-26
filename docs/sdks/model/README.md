# Model
(*model*)

### Available Operations

* [createModel](#createmodel) - Train a Custom Model
* [deleteModelById](#deletemodelbyid) - Delete a Single Custom Model by ID
* [deleteModels3dId](#deletemodels3did) - Delete 3D Model by ID
* [getModelById](#getmodelbyid) - Get a Single Custom Model by ID
* [getPlatformModels](#getplatformmodels) - List Platform Models
* [postModels3dUpload](#postmodels3dupload) - Upload 3D Model

## createModel

This endpoint will train a new custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateModelResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { CustomModelType, SdVersions, Strength } from "@leonardo-ai/sdk/dist/sdk/models/shared";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.model.createModel({
  datasetId: "explicabo",
  description: "nobis",
  instancePrompt: "enim",
  modelType: CustomModelType.Photography,
  name: "Ms. Cathy Marks",
  nsfw: false,
  resolution: 988374,
  sdVersion: SdVersions.V2,
  strength: Strength.VeryLow,
}).then((res: CreateModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateModelRequestBody](../../models/operations/createmodelrequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateModelResponse](../../models/operations/createmodelresponse.md)>**


## deleteModelById

This endpoint will delete a specific custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteModelByIdRequest, DeleteModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "mollitia";

sdk.model.deleteModelById(id).then((res: DeleteModelByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the model to delete.                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteModelByIdResponse](../../models/operations/deletemodelbyidresponse.md)>**


## deleteModels3dId

This endpoint deletes the specific 3D Model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteModels3dIdRequest, DeleteModels3dIdRequestBody, DeleteModels3dIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "dolorem";
const requestBody: DeleteModels3dIdRequestBody = {
  id: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
};

sdk.model.deleteModels3dId(id, requestBody).then((res: DeleteModels3dIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | _"id" is required (enter it either in parameters or request body)_                               |
| `requestBody`                                                                                    | [operations.DeleteModels3dIdRequestBody](../../models/operations/deletemodels3didrequestbody.md) | :heavy_minus_sign:                                                                               | Query parameters can also be provided in the request body as a JSON object                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteModels3dIdResponse](../../models/operations/deletemodels3didresponse.md)>**


## getModelById

This endpoint gets the specific custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetModelByIdRequest, GetModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "voluptatibus";

sdk.model.getModelById(id).then((res: GetModelByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the custom model to return.                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetModelByIdResponse](../../models/operations/getmodelbyidresponse.md)>**


## getPlatformModels

Get a list of public Platform Models available for use with generations.

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetPlatformModelsRequest, GetPlatformModelsResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const limit: number = 878194;
const offset: number = 468651;

sdk.model.getPlatformModels(limit, offset).then((res: GetPlatformModelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPlatformModelsResponse](../../models/operations/getplatformmodelsresponse.md)>**


## postModels3dUpload

This endpoint returns presigned details to upload a 3D model to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { PostModels3dUploadResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.model.postModels3dUpload({
  modelExtension: "praesentium",
  name: "Jose Moen",
}).then((res: PostModels3dUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PostModels3dUploadRequestBody](../../models/operations/postmodels3duploadrequestbody.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostModels3dUploadResponse](../../models/operations/postmodels3duploadresponse.md)>**

