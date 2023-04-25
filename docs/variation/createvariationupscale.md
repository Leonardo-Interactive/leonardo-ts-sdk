# createVariationUpscale
Available in: `variation`

This endpoint will create an upscale for the provided image ID

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateVariationUpscaleRequestBody, CreateVariationUpscaleResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateVariationUpscaleRequestBody = {
  id: "5b7fd2ed-0289-421c-9dc6-92601fb576b0",
};

sdk.variation.createVariationUpscale(req).then((res: CreateVariationUpscaleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```