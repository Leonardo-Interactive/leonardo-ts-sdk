# model

### Available Operations

* [createModel](#createmodel) - Train a Custom Model
* [deleteModelById](#deletemodelbyid) - Delete a Single Custom Model by ID
* [getModelById](#getmodelbyid) - Get a Single Custom Model by ID

## createModel

This endpoint will train a new custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateModelResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { CustomModelTypeEnum, SdVersionsEnum, StrengthEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.createModel({
  datasetId: "molestiae",
  description: "quod",
  instancePrompt: "quod",
  modelType: CustomModelTypeEnum.GameItems,
  name: "Miss Lowell Parisian",
  nsfw: false,
  resolution: 582020,
  sdVersion: SdVersionsEnum.V15,
  strength: StrengthEnum.Medium,
}).then((res: CreateModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteModelById

This endpoint will delete a specific custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.deleteModelById("hic").then((res: DeleteModelByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getModelById

This endpoint gets the specific custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { CustomModelTypeEnum, JobStatusEnum, SdVersionsEnum } from "@leonardo-ai/sdk/dist/sdk/models/shared";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.getModelById("optio").then((res: GetModelByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
