# @leonardo-ai/sdk

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @leonardo-ai/sdk
```

### Yarn

```bash
yarn add @leonardo-ai/sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Leonardo, withSecurity} from "@leonardo-ai/sdk";
import { CreateDatasetRequest, CreateDatasetResponse } from "@leonardo-ai/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Leonardo(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateDatasetRequest = {
  request: {
    description: "unde",
    name: "deserunt",
  },
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### dataset

* `createDataset` - Create a Dataset
* `deleteDatasetById` - Delete a Single Dataset by ID
* `getDatasetById` - Get a Single Dataset by ID
* `uploadDatasetImage` - Upload dataset image
* `uploadDatasetImageFromGen` - Upload a Single Generated Image to a Dataset

### generation

* `createGeneration` - Create a Generation of Images
* `deleteGenerationById` - Delete a Single Generation
* `getGenerationById` - Get a Single Generation
* `getGenerationsByUserId` - Get generations by user ID

### initImage

* `deleteInitImageById` - Delete init image
* `getInitImageById` - Get single init image
* `uploadInitImage` - Upload init image

### model

* `createModel` - Train a Custom Model
* `deleteModelById` - Delete a Single Custom Model by ID
* `getModelById` - Get a Single Custom Model by ID

### user

* `getUserSelf` - Get user information

### variation

* `createVariationUpscale` - Create upscale
* `getVariationById` - Get variation by ID
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
