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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.createModel({
  datasetId: "in",
  description: "illum",
  instancePrompt: "maiores",
  modelType: CustomModelTypeEnum.PixelArt,
  name: "Valerie Runolfsson",
  nsfw: false,
  resolution: 396506,
  sdVersion: SdVersionsEnum.V2,
  strength: StrengthEnum.High,
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.deleteModelById({
  id: "395efb9b-a88f-43a6-a997-074ba4469b6e",
}).then((res: DeleteModelByIdResponse) => {
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.model.getModelById({
  id: "21419598-90af-4a56-be25-16fe4c8b711e",
}).then((res: GetModelByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
