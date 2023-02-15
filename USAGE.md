<!-- Start SDK Example Usage -->
```typescript
import { Leonardo, withSecurity} from "@leonardo-ai/sdk";
import { CreateDatasetRequest, CreateDatasetResponse } from "@leonardo-ai/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
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