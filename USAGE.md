<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDatasetRequest,
  CreateDatasetResponse
} from "@leonardo-ai/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Leonardo } from "@leonardo-ai/sdk";

const sdk = new Leonardo({
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
});
    
const req: CreateDatasetRequest = {
  request: {
    description: "unde",
    name: "deserunt",
  },
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->