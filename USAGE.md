<!-- Start SDK Example Usage -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateDatasetResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.createDataset({
  description: "corrupti",
  name: "Kelvin Sporer",
}).then((res: CreateDatasetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->