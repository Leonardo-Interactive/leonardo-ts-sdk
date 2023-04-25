# getGenerationById
Available in: `generation`

This endpoint will provide information about a specific generation

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationByIdRequest, GetGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import {
  JobStatusEnum,
  SdGenerationSchedulersEnum,
  SdGenerationStyleEnum,
  SdVersionsEnum,
  VARIATIONTYPEEnum,
} from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetGenerationByIdRequest = {
  id: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
};

sdk.generation.getGenerationById(req).then((res: GetGenerationByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```