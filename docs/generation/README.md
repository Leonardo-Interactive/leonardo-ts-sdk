# generation

### Available Operations

* [createGeneration](#creategeneration) - Create a Generation of Images
* [deleteGenerationById](#deletegenerationbyid) - Delete a Single Generation
* [getGenerationById](#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](#getgenerationsbyuserid) - Get generations by user ID

## createGeneration

This endpoint will generate images

### Example Usage

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

## deleteGenerationById

This endpoint deletes a specific generation

### Example Usage

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

## getGenerationById

This endpoint will provide information about a specific generation

### Example Usage

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

## getGenerationsByUserId

This endpoint returns all generations by a specific user

### Example Usage

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
