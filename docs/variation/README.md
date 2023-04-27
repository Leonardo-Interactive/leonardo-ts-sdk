# variation

### Available Operations

* [createVariationUpscale](#createvariationupscale) - Create upscale
* [getVariationById](#getvariationbyid) - Get variation by ID

## createVariationUpscale

This endpoint will create an upscale for the provided image ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateVariationUpscaleResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.variation.createVariationUpscale({
  id: "5b7fd2ed-0289-421c-9dc6-92601fb576b0",
}).then((res: CreateVariationUpscaleResponse | AxiosError) => {
  if (res instanceof CreateVariationUpscaleResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getVariationById

This endpoint will get the variation by ID

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetVariationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { JobStatusEnum, VARIATIONTYPEEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.variation.getVariationById({
  id: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
}).then((res: GetVariationByIdResponse | AxiosError) => {
  if (res instanceof GetVariationByIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```
