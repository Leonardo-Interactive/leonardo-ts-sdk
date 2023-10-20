<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/230025738-42a4980e-a5ea-4d00-a591-65e8de14de85.png" width="200">
   <h1>Leonardo Typescript SDK</h1>
   <p>The API for creating stunning game assets with AI.</p>
   <a href="https://github.com/Leonardo-Interactive/leonardo-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/Leonardo-Interactive/leonardo-ts-sdk/speakeasy_sdk_generate.yml?style=for-the-badge" /></a>
   <a href="https://docs.leonardo.ai/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://discord.gg/leonardo-ai"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
   <a href="https://codespaces.new/Leonardo-Interactive/leonardo-ts-sdk.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
</div>

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

## Authentication

To get access to the API and fetch an API key, please sign up for [access](https://leonardo.ai/). 

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

(async () => {
    const sdk = new Leonardo({
        bearerAuth: "",
    });

    const res = await sdk.dataset.createDataset({
        name: "Van",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [dataset](docs/sdks/dataset/README.md)

* [createDataset](docs/sdks/dataset/README.md#createdataset) - Create a Dataset
* [deleteDatasetById](docs/sdks/dataset/README.md#deletedatasetbyid) - Delete a Single Dataset by ID
* [getDatasetById](docs/sdks/dataset/README.md#getdatasetbyid) - Get a Single Dataset by ID
* [uploadDatasetImage](docs/sdks/dataset/README.md#uploaddatasetimage) - Upload dataset image
* [uploadDatasetImageFromGen](docs/sdks/dataset/README.md#uploaddatasetimagefromgen) - Upload a Single Generated Image to a Dataset

### [element](docs/sdks/element/README.md)

* [getElements](docs/sdks/element/README.md#getelements) - List Elements

### [generation](docs/sdks/generation/README.md)

* [createGeneration](docs/sdks/generation/README.md#creategeneration) - Create a Generation of Images
* [deleteGenerationById](docs/sdks/generation/README.md#deletegenerationbyid) - Delete a Single Generation
* [deleteGenerationsTextureId](docs/sdks/generation/README.md#deletegenerationstextureid) - Delete Texture Generation by ID
* [getGenerationById](docs/sdks/generation/README.md#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](docs/sdks/generation/README.md#getgenerationsbyuserid) - Get generations by user ID
* [postGenerationsTexture](docs/sdks/generation/README.md#postgenerationstexture) - Create Texture Generation

### [initImage](docs/sdks/initimage/README.md)

* [deleteInitImageById](docs/sdks/initimage/README.md#deleteinitimagebyid) - Delete init image
* [getInitImageById](docs/sdks/initimage/README.md#getinitimagebyid) - Get single init image
* [uploadInitImage](docs/sdks/initimage/README.md#uploadinitimage) - Upload init image

### [model](docs/sdks/model/README.md)

* [createModel](docs/sdks/model/README.md#createmodel) - Train a Custom Model
* [deleteModelById](docs/sdks/model/README.md#deletemodelbyid) - Delete a Single Custom Model by ID
* [deleteModels3dId](docs/sdks/model/README.md#deletemodels3did) - Delete 3D Model by ID
* [getModelById](docs/sdks/model/README.md#getmodelbyid) - Get a Single Custom Model by ID
* [getPlatformModels](docs/sdks/model/README.md#getplatformmodels) - List Platform Models
* [postModels3dUpload](docs/sdks/model/README.md#postmodels3dupload) - Upload 3D Model

### [user](docs/sdks/user/README.md)

* [getUserSelf](docs/sdks/user/README.md#getuserself) - Get user information

### [variation](docs/sdks/variation/README.md)

* [createVariationNoBG](docs/sdks/variation/README.md#createvariationnobg) - Create no background
* [createVariationUpscale](docs/sdks/variation/README.md#createvariationupscale) - Create upscale
* [getVariationById](docs/sdks/variation/README.md#getvariationbyid) - Get variation by ID
* [postVariationsUnzoom](docs/sdks/variation/README.md#postvariationsunzoom) - Create unzoom
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->
# Dev Containers
<div align="left">
    <a href="https://codespaces.new/Leonardo-Interactive/leonardo-ts-sdk.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
    
</div>

Experience our SDK in an enhanced sandbox environment. Try it now in **GitHub Codespaces**!

* [Explore Dev Containers](.devcontainer/README.md)
<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
