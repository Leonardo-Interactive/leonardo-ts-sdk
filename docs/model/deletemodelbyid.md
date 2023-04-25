# deleteModelById
Available in: `model`

This endpoint will delete a specific custom model

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteModelByIdRequest, DeleteModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteModelByIdRequest = {
  id: "395efb9b-a88f-43a6-a997-074ba4469b6e",
};

sdk.model.deleteModelById(req).then((res: DeleteModelByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```