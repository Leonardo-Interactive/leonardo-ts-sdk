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
import { CreateDatasetResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.createDataset({
  description: "corrupti",
  name: "Ben Mueller",
}).then((res: CreateDatasetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDatasetById

This endpoint deletes the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { DeleteDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.deleteDatasetById("iure").then((res: DeleteDatasetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDatasetById

This endpoint gets the specific dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetDatasetByIdResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.getDatasetById("magnam").then((res: GetDatasetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDatasetImage

This endpoint returns presigned details to upload a dataset image to S3

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.uploadDatasetImage({
  extension: "debitis",
}, "ipsa").then((res: UploadDatasetImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDatasetImageFromGen

This endpoint will upload a previously generated image to the dataset

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { UploadDatasetImageFromGenResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.dataset.uploadDatasetImageFromGen({
  generatedImageId: "delectus",
}, "tempora").then((res: UploadDatasetImageFromGenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
