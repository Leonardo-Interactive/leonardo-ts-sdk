<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/230025738-42a4980e-a5ea-4d00-a591-65e8de14de85.png" width="200">
   <h1>Leonardo Typescript SDK</h1>
   <p>The API for creating stunning game assets with AI.</p>
   <a href="https://github.com/Leonardo-Interactive/leonardo-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/Leonardo-Interactive/leonardo-ts-sdk/speakeasy_sdk_generate.yml?style=for-the-badge" /></a>
   <a href="https://docs.leonardo.ai/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://discord.gg/leonardo-ai"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
   <a href="https://codespaces.new/Leonardo-Interactive/leonardo-ts-sdk.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @leonardo-ai/sdk
```

### Yarn

```bash
yarn add @leonardo-ai/sdk
```
<!-- End SDK Installation [installation] -->

## Authentication

To get access to the API and fetch an API key, please sign up for [access](https://leonardo.ai/). 

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
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
* [postGenerationsMotionSvd](docs/sdks/generation/README.md#postgenerationsmotionsvd) - Create SVD Motion Generation
* [postGenerationsTexture](docs/sdks/generation/README.md#postgenerationstexture) - Create Texture Generation

### [initImage](docs/sdks/initimage/README.md)

* [deleteInitImageById](docs/sdks/initimage/README.md#deleteinitimagebyid) - Delete init image
* [getInitImageById](docs/sdks/initimage/README.md#getinitimagebyid) - Get single init image
* [uploadInitImage](docs/sdks/initimage/README.md#uploadinitimage) - Upload init image

### [user](docs/sdks/user/README.md)

* [getUserSelf](docs/sdks/user/README.md#getuserself) - Get user information

### [model](docs/sdks/model/README.md)

* [createModel](docs/sdks/model/README.md#createmodel) - Train a Custom Model
* [deleteModelById](docs/sdks/model/README.md#deletemodelbyid) - Delete a Single Custom Model by ID
* [deleteModels3dId](docs/sdks/model/README.md#deletemodels3did) - Delete 3D Model by ID
* [getModelById](docs/sdks/model/README.md#getmodelbyid) - Get a Single Custom Model by ID
* [getPlatformModels](docs/sdks/model/README.md#getplatformmodels) - List Platform Models
* [postModels3dUpload](docs/sdks/model/README.md#postmodels3dupload) - Upload 3D Model

### [variation](docs/sdks/variation/README.md)

* [createVariationNoBG](docs/sdks/variation/README.md#createvariationnobg) - Create no background
* [createVariationUpscale](docs/sdks/variation/README.md#createvariationupscale) - Create upscale
* [getVariationById](docs/sdks/variation/README.md#getvariationbyid) - Get variation by ID
* [postVariationsUnzoom](docs/sdks/variation/README.md#postvariationsunzoom) - Create unzoom
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let res;
    try {
        res = await sdk.dataset.createDataset({
            name: "string",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @leonardo-ai/sdk } from "Leonardo";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Leonardo({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://cloud.leonardo.ai/api/rest/v1` | None |

#### Example

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        serverIdx: 0,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        serverURL: "https://cloud.leonardo.ai/api/rest/v1",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
