# getModelById
Available in: `model`

This endpoint gets the specific custom model

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetModelByIdRequest, GetModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { CustomModelTypeEnum, JobStatusEnum, SdVersionsEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetModelByIdRequest = {
  id: "21419598-90af-4a56-be25-16fe4c8b711e",
};

sdk.model.getModelById(req).then((res: GetModelByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```