# Generation

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
  contrastRatio: 5680.45,
  controlNet: false,
  controlNetType: ControlnetType.Canny,
  expandedDomain: false,
  guidanceScale: 925597,
  height: 836079,
  highContrast: false,
  highResolution: false,
  imagePromptWeight: 710.36,
  imagePrompts: [
    "quis",
  ],
  initGenerationImageId: "veritatis",
  initImageId: "deserunt",
  initStrength: 202.18,
  modelId: "ipsam",
  negativePrompt: "repellendus",
  nsfw: false,
  numImages: 957156,
  numInferenceSteps: 778157,
  photoReal: false,
  presetStyle: SdGenerationStyle.Leonardo,
  prompt: "at",
  promptMagic: false,
  promptMagicVersion: "at",
  public: false,
  scheduler: SdGenerationSchedulers.Pndm,
  sdVersion: SdVersions.V15,
  seed: 799159,
  tiling: false,
  unzoom: false,
  unzoomAmount: 8009.11,
  upscaleRatio: 4614.79,
  weighting: 5204.78,
  width: 780529,
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
const id: string = "dolorum";

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
const id: string = "dicta";
const requestBody: DeleteGenerationsTextureIdRequestBody = {
  id: "ba928fc8-1674-42cb-b392-05929396fea7",
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
const id: string = "corporis";

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
const userId: string = "iste";
const limit: number = 437032;
const offset: number = 902349;

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
  frontRotationOffset: 697631,
  modelAssetId: "architecto",
  negativePrompt: "ipsa",
  preview: false,
  previewDirection: "reiciendis",
  prompt: "est",
  sdVersion: "mollitia",
  seed: 670638,
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

