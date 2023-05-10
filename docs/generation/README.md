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

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.generation.createGeneration({
  controlNet: false,
  controlNetType: ControlnetTypeEnum.Canny,
  guidanceScale: 477665,
  height: 791725,
  initGenerationImageId: "placeat",
  initImageId: "voluptatum",
  initStrength: 4799.77,
  modelId: "excepturi",
  negativePrompt: "nisi",
  numImages: 925597,
  numInferenceSteps: 836079,
  presetStyle: SdGenerationStyleEnum.Leonardo,
  prompt: "quis",
  promptMagic: false,
  public: false,
  scheduler: SdGenerationSchedulersEnum.Klms,
  sdVersion: SdVersionsEnum.V2,
  tiling: false,
  width: 20218,
}).then((res: CreateGenerationResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.generation.deleteGenerationById("ipsam").then((res: DeleteGenerationByIdResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.generation.getGenerationById("repellendus").then((res: GetGenerationByIdResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.generation.getGenerationsByUserId("sapiente", 778157, 140350).then((res: GetGenerationsByUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
