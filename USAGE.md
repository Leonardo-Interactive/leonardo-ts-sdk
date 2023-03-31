<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDatasetRequestBody,
  CreateDatasetResponse
} from "@leonardo-ai/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Leonardo } from "@leonardo-ai/sdk";
const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateDatasetRequestBody = {
  description: "corrupti",
  name: "provident",
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->