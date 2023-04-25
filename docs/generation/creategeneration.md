# createGeneration
Available in: `generation`

This endpoint will generate images

## Example Usage
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateGenerationRequestBody, CreateGenerationResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import {
  ControlnetTypeEnum,
  SdGenerationSchedulersEnum,
  SdGenerationStyleEnum,
  SdVersionsEnum,
} from "@leonardo-ai/sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateGenerationRequestBody = {
  controlNet: false,
  controlNetType: ControlnetTypeEnum.Depth,
  guidanceScale: 449950,
  height: 359508,
  initGenerationImageId: "iste",
  initImageId: "iure",
  initStrength: 9023.49,
  modelId: "quidem",
  negativePrompt: "architecto",
  numImages: 60225,
  numInferenceSteps: 969810,
  presetStyle: SdGenerationStyleEnum.None,
  prompt: "mollitia",
  promptMagic: false,
  public: false,
  scheduler: SdGenerationSchedulersEnum.DpmSolver,
  sdVersion: SdVersionsEnum.V15,
  tiling: false,
  width: 210382,
};

sdk.generation.createGeneration(req).then((res: CreateGenerationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```