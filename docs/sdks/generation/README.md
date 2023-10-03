# Generation
(*generation*)

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
  contrastRatio: 4444.14,
  controlNet: false,
  controlNetType: ControlnetType.Canny,
  expandedDomain: false,
  guidanceScale: 784343,
  height: 244808,
  highContrast: false,
  highResolution: false,
  imagePromptWeight: 2793,
  imagePrompts: [
    "Product",
  ],
  initGenerationImageId: "actuating DNS",
  initImageId: "salmon wireless rarely",
  initStrength: 1502.38,
  modelId: "emulation Country",
  negativePrompt: "Kentucky MTF",
  nsfw: false,
  numImages: 649224,
  numInferenceSteps: 895539,
  photoReal: false,
  presetStyle: SdGenerationStyle.Leonardo,
  prompt: "aggregate",
  promptMagic: false,
  promptMagicVersion: "visionary which",
  public: false,
  scheduler: SdGenerationSchedulers.Ddim,
  sdVersion: SdVersions.V2,
  seed: 262328,
  tiling: false,
  unzoom: false,
  unzoomAmount: 371.25,
  upscaleRatio: 485.82,
  weighting: 9968.92,
  width: 152007,
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
const id: string = "Sports";

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
const id: string = "Lodge";
const requestBody: DeleteGenerationsTextureIdRequestBody = {
  id: "<ID>",
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
const id: string = "male";

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
const userId: string = "Oriental";
const limit: number = 135536;
const offset: number = 934375;

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
  frontRotationOffset: 854632,
  modelAssetId: "West",
  negativePrompt: "quantifying pink ah",
  preview: false,
  previewDirection: "Auto",
  prompt: "Coupe North Steel",
  sdVersion: "Market parsing inasmuch",
  seed: 895868,
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

