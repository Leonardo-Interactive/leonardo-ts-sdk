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
import { ControlnetType, SdGenerationSchedulers, SdGenerationStyle, SdVersions } from "@leonardo-ai/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.generation.createGeneration({
    imagePrompts: [
      "payment",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeleteGenerationByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });
const id: string = "Sports";

  const res = await sdk.generation.deleteGenerationById(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeleteGenerationsTextureIdRequest, DeleteGenerationsTextureIdRequestBody } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });
const id: string = "Lodge";
const requestBody: DeleteGenerationsTextureIdRequestBody = {};

  const res = await sdk.generation.deleteGenerationsTextureId(id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetGenerationByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });
const id: string = "male";

  const res = await sdk.generation.getGenerationById(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetGenerationsByUserIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });
const userId: string = "Oriental";
const limit: number = 135536;
const offset: number = 934375;

  const res = await sdk.generation.getGenerationsByUserId(userId, limit, offset);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.generation.postGenerationsTexture({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostGenerationsTextureRequestBody](../../models/operations/postgenerationstexturerequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostGenerationsTextureResponse](../../models/operations/postgenerationstextureresponse.md)>**

