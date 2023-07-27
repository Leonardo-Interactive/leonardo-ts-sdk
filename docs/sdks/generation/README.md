# generation

### Available Operations

* [createGeneration](#creategeneration) - Create a Generation of Images
* [deleteGenerationById](#deletegenerationbyid) - Delete a Single Generation
* [getGenerationById](#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](#getgenerationsbyuserid) - Get generations by user ID

## createGeneration

This endpoint will generate images

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateGenerationResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { ControlnetType, SdGenerationSchedulers, SdGenerationStyle, SdVersions } from "@leonardo-ai/sdk/dist/sdk/models/shared";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.generation.createGeneration({
  controlNet: false,
  controlNetType: ControlnetType.Canny,
  guidanceScale: 477665,
  height: 791725,
  initGenerationImageId: "placeat",
  initImageId: "voluptatum",
  initStrength: 4799.77,
  modelId: "excepturi",
  negativePrompt: "nisi",
  numImages: 925597,
  numInferenceSteps: 836079,
  presetStyle: SdGenerationStyle.Leonardo,
  prompt: "quis",
  promptMagic: false,
  public: false,
  scheduler: SdGenerationSchedulers.Klms,
  sdVersion: SdVersions.V2,
  tiling: false,
  width: 20218,
}).then((res: CreateGenerationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateGenerationRequestBody](../../models/operations/creategenerationrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateGenerationResponse](../../models/operations/creategenerationresponse.md)>**


## deleteGenerationById

This endpoint deletes a specific generation

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteGenerationByIdRequest, DeleteGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "ipsam";

sdk.generation.deleteGenerationById(id).then((res: DeleteGenerationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the generation to delete.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteGenerationByIdResponse](../../models/operations/deletegenerationbyidresponse.md)>**


## getGenerationById

This endpoint will provide information about a specific generation

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationByIdRequest, GetGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "repellendus";

sdk.generation.getGenerationById(id).then((res: GetGenerationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the generation to return.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGenerationByIdResponse](../../models/operations/getgenerationbyidresponse.md)>**


## getGenerationsByUserId

This endpoint returns all generations by a specific user

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationsByUserIdRequest, GetGenerationsByUserIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const userId: string = "sapiente";
const limit: number = 778157;
const offset: number = 140350;

sdk.generation.getGenerationsByUserId(userId, limit, offset).then((res: GetGenerationsByUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGenerationsByUserIdResponse](../../models/operations/getgenerationsbyuseridresponse.md)>**

