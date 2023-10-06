# Variation
(*variation*)

### Available Operations

* [createVariationUpscale](#createvariationupscale) - Create upscale
* [getVariationById](#getvariationbyid) - Get variation by ID
* [postVariationsUnzoom](#postvariationsunzoom) - Create unzoom

## createVariationUpscale

This endpoint will create an upscale for the provided image ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.variation.createVariationUpscale({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetVariationByIdRequest } from "@leonardo-ai/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });
const id: string = "walker";

  const res = await sdk.variation.getVariationById(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Leonardo({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.variation.postVariationsUnzoom({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostVariationsUnzoomRequestBody](../../models/operations/postvariationsunzoomrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostVariationsUnzoomResponse](../../models/operations/postvariationsunzoomresponse.md)>**

