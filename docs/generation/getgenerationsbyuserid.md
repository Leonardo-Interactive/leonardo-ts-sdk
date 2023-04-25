# getGenerationsByUserId
Available in: `generation`

This endpoint returns all generations by a specific user

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationsByUserIdRequest, GetGenerationsByUserIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
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

const req: GetGenerationsByUserIdRequest = {
  limit: 359444,
  offset: 296140,
  userId: "iusto",
};

sdk.generation.getGenerationsByUserId(req).then((res: GetGenerationsByUserIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```