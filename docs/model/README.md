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

## deleteModelById

This endpoint will delete a specific custom model

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteModelByIdRequest, DeleteModelByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteModelByIdRequest = {
  id: "395efb9b-a88f-43a6-a997-074ba4469b6e",
};

sdk.model.deleteModelById(req).then((res: DeleteModelByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getModelById

This endpoint gets the specific custom model

### Example Usage

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
