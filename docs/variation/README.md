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

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.variation.createVariationUpscale({
  id: "816742cb-7392-4059-a939-6fea7596eb10",
}).then((res: CreateVariationUpscaleResponse) => {
  if (res.statusCode == 200) {
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
import { JobStatus, VariationType } from "@leonardo-ai/sdk/dist/sdk/models/shared";

const sdk = new Leonardo({
  security: {
    bearerAuth: "",
  },
});

sdk.variation.getVariationById("reiciendis").then((res: GetVariationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
