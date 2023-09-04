# generation

### Available Operations

* [createGeneration](#creategeneration) - Create a Generation of Images
* [deleteGenerationById](#deletegenerationbyid) - Delete a Single Generation
* [deleteGenerationsTextureId](#deletegenerationstextureid) - Delete Texture Generation by ID
* [getGenerationById](#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](#getgenerationsbyuserid) - Get generations by user ID
* [postGenerationsTexture](#postgenerationstexture) - Create Texture Generation

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
  alchemy: false,
  contrastRatio: 3834.41,
  controlNet: false,
  controlNetType: ControlnetType.Canny,
  expandedDomain: false,
  guidanceScale: 791725,
  height: 812169,
  highContrast: false,
  highResolution: false,
  imagePromptWeight: 5288.95,
  imagePrompts: [
    "excepturi",
    "nisi",
  ],
  initGenerationImageId: "recusandae",
  initImageId: "temporibus",
  initStrength: 710.36,
  modelId: "quis",
  negativePrompt: "veritatis",
  nsfw: false,
  numImages: 648172,
  numInferenceSteps: 20218,
  presetStyle: SdGenerationStyle.Leonardo,
  prompt: "repellendus",
  promptMagic: false,
  promptMagicVersion: "sapiente",
  public: false,
  scheduler: SdGenerationSchedulers.DpmSolver,
  sdVersion: SdVersions.V15,
  seed: 870013,
  tiling: false,
  unzoom: false,
  unzoomAmount: 8700.88,
  upscaleRatio: 9786.19,
  weighting: 4736.08,
  width: 799159,
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
const id: string = "quod";

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


## deleteGenerationsTextureId

This endpoint deletes the specific texture generation.

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import {
  DeleteGenerationsTextureIdRequest,
  DeleteGenerationsTextureIdRequestBody,
  DeleteGenerationsTextureIdResponse,
} from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "esse";
const requestBody: DeleteGenerationsTextureIdRequestBody = {
  id: "8ca1ba92-8fc8-4167-82cb-739205929396",
};

sdk.generation.deleteGenerationsTextureId(id, requestBody).then((res: DeleteGenerationsTextureIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | _"id" is required (enter it either in parameters or request body)_                                                   |
| `requestBody`                                                                                                        | [operations.DeleteGenerationsTextureIdRequestBody](../../models/operations/deletegenerationstextureidrequestbody.md) | :heavy_minus_sign:                                                                                                   | Query parameters can also be provided in the request body as a JSON object                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteGenerationsTextureIdResponse](../../models/operations/deletegenerationstextureidresponse.md)>**


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
const id: string = "hic";

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
const userId: string = "saepe";
const limit: number = 681820;
const offset: number = 449950;

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


## postGenerationsTexture

This endpoint will generate a texture generation.

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { PostGenerationsTextureResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.generation.postGenerationsTexture({
  frontRotationOffset: 359508,
  modelAssetId: "iste",
  negativePrompt: "iure",
  preview: false,
  previewDirection: "saepe",
  prompt: "quidem",
  sdVersion: "architecto",
  seed: 60225,
}).then((res: PostGenerationsTextureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostGenerationsTextureRequestBody](../../models/operations/postgenerationstexturerequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostGenerationsTextureResponse](../../models/operations/postgenerationstextureresponse.md)>**

