# variation

### Available Operations

* [createVariationUpscale](#createvariationupscale) - Create upscale
* [getVariationById](#getvariationbyid) - Get variation by ID
* [postVariationsUnzoom](#postvariationsunzoom) - Create unzoom

## createVariationUpscale

This endpoint will create an upscale for the provided image ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateVariationUpscaleResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.variation.createVariationUpscale({
  id: "f097b007-4f15-4471-b5e6-e13b99d488e1",
}).then((res: CreateVariationUpscaleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateVariationUpscaleRequestBody](../../models/operations/createvariationupscalerequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateVariationUpscaleResponse](../../models/operations/createvariationupscaleresponse.md)>**


## getVariationById

This endpoint will get the variation by ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetVariationByIdRequest, GetVariationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});
const id: string = "repudiandae";

sdk.variation.getVariationById(id).then((res: GetVariationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | "id" is required                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVariationByIdResponse](../../models/operations/getvariationbyidresponse.md)>**


## postVariationsUnzoom

This endpoint will create an unzoom variation for the provided image ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { PostVariationsUnzoomResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.variation.postVariationsUnzoom({
  id: "91e450ad-2abd-4442-a980-2d502a94bb4f",
  isVariation: false,
}).then((res: PostVariationsUnzoomResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostVariationsUnzoomRequestBody](../../models/operations/postvariationsunzoomrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostVariationsUnzoomResponse](../../models/operations/postvariationsunzoomresponse.md)>**

