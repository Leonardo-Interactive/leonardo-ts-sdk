# dataset

### Available Operations

* [createDataset](#createdataset) - Create a Dataset
* [deleteDatasetById](#deletedatasetbyid) - Delete a Single Dataset by ID
* [getDatasetById](#getdatasetbyid) - Get a Single Dataset by ID
* [uploadDatasetImage](#uploaddatasetimage) - Upload dataset image
* [uploadDatasetImageFromGen](#uploaddatasetimagefromgen) - Upload a Single Generated Image to a Dataset

## createDataset

This endpoint creates a new dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateDatasetRequestBody, CreateDatasetResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateDatasetRequestBody = {
  description: "corrupti",
  name: "Ben Mueller",
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDatasetById

This endpoint deletes the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteDatasetByIdRequest, DeleteDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteDatasetByIdRequest = {
  id: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
};

sdk.dataset.deleteDatasetById(req).then((res: DeleteDatasetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDatasetById

This endpoint gets the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetDatasetByIdRequest, GetDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetDatasetByIdRequest = {
  id: "c78ca1ba-928f-4c81-a742-cb7392059293",
};

sdk.dataset.getDatasetById(req).then((res: GetDatasetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDatasetImage

This endpoint returns presigned details to upload a dataset image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageRequest, UploadDatasetImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UploadDatasetImageRequest = {
  requestBody: {
    extension: "natus",
  },
  datasetId: "laboriosam",
};

sdk.dataset.uploadDatasetImage(req).then((res: UploadDatasetImageResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDatasetImageFromGen

This endpoint will upload a previously generated image to the dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageFromGenRequest, UploadDatasetImageFromGenResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UploadDatasetImageFromGenRequest = {
  requestBody: {
    generatedImageId: "hic",
  },
  datasetId: "saepe",
};

sdk.dataset.uploadDatasetImageFromGen(req).then((res: UploadDatasetImageFromGenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
