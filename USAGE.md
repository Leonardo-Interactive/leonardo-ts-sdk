<!-- Start SDK Example Usage -->
```typescript
import { Leonardo, withSecurity} from "@leonardo-ai/sdk";
import { DeleteDatasetsIdRequest, DeleteDatasetsIdResponse } from "@leonardo-ai/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteDatasetsIdRequest = {
  pathParams: {
    id: "unde",
  },
};

sdk.creatingDatasets.deleteDatasetsId(req).then((res: DeleteDatasetsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->