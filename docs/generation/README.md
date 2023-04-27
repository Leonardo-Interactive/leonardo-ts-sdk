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
import { CreateGenerationResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
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

sdk.generation.createGeneration({
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
}).then((res: CreateGenerationResponse | AxiosError) => {
  if (res instanceof CreateGenerationResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteGenerationById

This endpoint deletes a specific generation

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.generation.deleteGenerationById({
  id: "52c59559-07af-4f1a-ba2f-a9467739251a",
}).then((res: DeleteGenerationByIdResponse | AxiosError) => {
  if (res instanceof DeleteGenerationByIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getGenerationById

This endpoint will provide information about a specific generation

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
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

sdk.generation.getGenerationById({
  id: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
}).then((res: GetGenerationByIdResponse | AxiosError) => {
  if (res instanceof GetGenerationByIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getGenerationsByUserId

This endpoint returns all generations by a specific user

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetGenerationsByUserIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
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

sdk.generation.getGenerationsByUserId({
  limit: 359444,
  offset: 296140,
  userId: "iusto",
}).then((res: GetGenerationsByUserIdResponse | AxiosError) => {
  if (res instanceof GetGenerationsByUserIdResponse && res.statusCode == 200) {
    // handle response
  }
});
```
