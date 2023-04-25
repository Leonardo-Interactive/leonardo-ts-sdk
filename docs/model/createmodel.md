# createModel
Available in: `model`

This endpoint will train a new custom model

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateModelRequestBody, CreateModelResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { CustomModelTypeEnum, SdVersionsEnum, StrengthEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateModelRequestBody = {
  datasetId: "in",
  description: "illum",
  instancePrompt: "maiores",
  modelType: CustomModelTypeEnum.PixelArt,
  name: "Valerie Runolfsson",
  nsfw: false,
  resolution: 396506,
  sdVersion: SdVersionsEnum.V2,
  strength: StrengthEnum.High,
};

sdk.model.createModel(req).then((res: CreateModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```