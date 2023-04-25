# deleteGenerationById
Available in: `generation`

This endpoint deletes a specific generation

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteGenerationByIdRequest, DeleteGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteGenerationByIdRequest = {
  id: "52c59559-07af-4f1a-ba2f-a9467739251a",
};

sdk.generation.deleteGenerationById(req).then((res: DeleteGenerationByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```