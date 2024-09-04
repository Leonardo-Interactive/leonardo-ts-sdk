<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/230025738-42a4980e-a5ea-4d00-a591-65e8de14de85.png" width="200">
   <h1>Leonardo Typescript SDK</h1>
   <p>The API for creating stunning game assets with AI.</p>
   <a href="https://docs.leonardo.ai/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://discord.gg/leonardo-ai"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
   <a href="https://codespaces.new/Leonardo-Interactive/leonardo-ts-sdk.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
</div>

<!-- Start Summary [summary] -->
## Summary

Rest Endpoints: Leonardo.Ai API OpenAPI specification.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @leonardo-ai/sdk
```

### PNPM

```bash
pnpm add @leonardo-ai/sdk
```

### Bun

```bash
bun add @leonardo-ai/sdk
```

### Yarn

```bash
yarn add @leonardo-ai/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Authentication

To get access to the API and fetch an API key, please sign up for [access](https://leonardo.ai/). 

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [initImages](docs/sdks/initimages/README.md)

* [deleteInitImageById](docs/sdks/initimages/README.md#deleteinitimagebyid) - Delete init image
* [getInitImageById](docs/sdks/initimages/README.md#getinitimagebyid) - Get single init image
* [uploadCanvasInitImage](docs/sdks/initimages/README.md#uploadcanvasinitimage) - Upload Canvas Editor init and mask image
* [uploadInitImage](docs/sdks/initimages/README.md#uploadinitimage) - Upload init image

### [dataset](docs/sdks/dataset/README.md)

* [createDataset](docs/sdks/dataset/README.md#createdataset) - Create a Dataset
* [deleteDatasetById](docs/sdks/dataset/README.md#deletedatasetbyid) - Delete a Single Dataset by ID
* [getDatasetById](docs/sdks/dataset/README.md#getdatasetbyid) - Get a Single Dataset by ID
* [uploadDatasetImage](docs/sdks/dataset/README.md#uploaddatasetimage) - Upload dataset image
* [uploadDatasetImageFromGen](docs/sdks/dataset/README.md#uploaddatasetimagefromgen) - Upload a Single Generated Image to a Dataset

### [elements](docs/sdks/elements/README.md)

* [listElements](docs/sdks/elements/README.md#listelements) - List Elements

### [image](docs/sdks/image/README.md)

* [createGeneration](docs/sdks/image/README.md#creategeneration) - Create a Generation of Images
* [deleteGenerationById](docs/sdks/image/README.md#deletegenerationbyid) - Delete a Single Generation
* [getGenerationById](docs/sdks/image/README.md#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](docs/sdks/image/README.md#getgenerationsbyuserid) - Get generations by user ID

### [realtimeCanvas](docs/sdks/realtimecanvas/README.md)

* [createLCMGeneration](docs/sdks/realtimecanvas/README.md#createlcmgeneration) - Create LCM Generation
* [performAlchemyUpscaleLCM](docs/sdks/realtimecanvas/README.md#performalchemyupscalelcm) - Perform Alchemy Upscale on a LCM image
* [performInpaintingLCM](docs/sdks/realtimecanvas/README.md#performinpaintinglcm) - Perform inpainting on a LCM image
* [performInstantRefine](docs/sdks/realtimecanvas/README.md#performinstantrefine) - Perform instant refine on a LCM image

### [motion](docs/sdks/motion/README.md)

* [createSVDMotionGeneration](docs/sdks/motion/README.md#createsvdmotiongeneration) - Create SVD Motion Generation

### [texture](docs/sdks/texture/README.md)

* [createTextureGeneration](docs/sdks/texture/README.md#createtexturegeneration) - Create Texture Generation
* [deleteTextureGenerationById](docs/sdks/texture/README.md#deletetexturegenerationbyid) - Delete Texture Generation by ID

### [user](docs/sdks/user/README.md)

* [getUserSelf](docs/sdks/user/README.md#getuserself) - Get user information

### [models](docs/sdks/models/README.md)

* [createModel](docs/sdks/models/README.md#createmodel) - Train a Custom Model
* [deleteModelById](docs/sdks/models/README.md#deletemodelbyid) - Delete a Single Custom Model by ID
* [getModelById](docs/sdks/models/README.md#getmodelbyid) - Get a Single Custom Model by ID
* [listPlatformModels](docs/sdks/models/README.md#listplatformmodels) - List Platform Models

### [threeDModelAssets](docs/sdks/threedmodelassets/README.md)

* [delete3DModelById](docs/sdks/threedmodelassets/README.md#delete3dmodelbyid) - Delete 3D Model by ID
* [uploadModelAsset](docs/sdks/threedmodelassets/README.md#uploadmodelasset) - Upload 3D Model

### [pricingCalculator](docs/sdks/pricingcalculator/README.md)

* [pricingCalculator](docs/sdks/pricingcalculator/README.md#pricingcalculator) - Calculating API Cost

### [prompt](docs/sdks/prompt/README.md)

* [promptImprove](docs/sdks/prompt/README.md#promptimprove) - Improve a Prompt
* [promptRandom](docs/sdks/prompt/README.md#promptrandom) - Generate a Random prompt

### [variation](docs/sdks/variation/README.md)

* [createUniversalUpscalerJob](docs/sdks/variation/README.md#createuniversalupscalerjob) - Create using Universal Upscaler
* [createVariationNoBG](docs/sdks/variation/README.md#createvariationnobg) - Create no background
* [createVariationUnzoom](docs/sdks/variation/README.md#createvariationunzoom) - Create unzoom
* [createVariationUpscale](docs/sdks/variation/README.md#createvariationupscale) - Create upscale
* [getVariationById](docs/sdks/variation/README.md#getvariationbyid) - Get variation by ID
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { SDKValidationError } from "@leonardo-ai/sdk/sdk/models/errors";

const leonardo = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await leonardo.initImages.deleteInitImageById("<id>");
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { HTTPClient } from "@leonardo-ai/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Leonardo({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://cloud.leonardo.ai/api/rest/v1` | None |

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    serverIdx: 0,
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>");

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    serverURL: "https://cloud.leonardo.ai/api/rest/v1",
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>");

    // Handle the result
    console.log(result);
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

const leonardo = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [datasetCreateDataset](docs/sdks/dataset/README.md#createdataset)
- [datasetDeleteDatasetById](docs/sdks/dataset/README.md#deletedatasetbyid)
- [datasetGetDatasetById](docs/sdks/dataset/README.md#getdatasetbyid)
- [datasetUploadDatasetImageFromGen](docs/sdks/dataset/README.md#uploaddatasetimagefromgen)
- [datasetUploadDatasetImage](docs/sdks/dataset/README.md#uploaddatasetimage)
- [elementsListElements](docs/sdks/elements/README.md#listelements)
- [imageCreateGeneration](docs/sdks/image/README.md#creategeneration)
- [imageDeleteGenerationById](docs/sdks/image/README.md#deletegenerationbyid)
- [imageGetGenerationById](docs/sdks/image/README.md#getgenerationbyid)
- [imageGetGenerationsByUserId](docs/sdks/image/README.md#getgenerationsbyuserid)
- [initImagesDeleteInitImageById](docs/sdks/initimages/README.md#deleteinitimagebyid)
- [initImagesGetInitImageById](docs/sdks/initimages/README.md#getinitimagebyid)
- [initImagesUploadCanvasInitImage](docs/sdks/initimages/README.md#uploadcanvasinitimage)
- [initImagesUploadInitImage](docs/sdks/initimages/README.md#uploadinitimage)
- [modelsCreateModel](docs/sdks/models/README.md#createmodel)
- [modelsDeleteModelById](docs/sdks/models/README.md#deletemodelbyid)
- [modelsGetModelById](docs/sdks/models/README.md#getmodelbyid)
- [modelsListPlatformModels](docs/sdks/models/README.md#listplatformmodels)
- [motionCreateSVDMotionGeneration](docs/sdks/motion/README.md#createsvdmotiongeneration)
- [pricingCalculatorPricingCalculator](docs/sdks/pricingcalculator/README.md#pricingcalculator)
- [promptPromptImprove](docs/sdks/prompt/README.md#promptimprove)
- [promptPromptRandom](docs/sdks/prompt/README.md#promptrandom)
- [realtimeCanvasCreateLCMGeneration](docs/sdks/realtimecanvas/README.md#createlcmgeneration)
- [realtimeCanvasPerformAlchemyUpscaleLCM](docs/sdks/realtimecanvas/README.md#performalchemyupscalelcm)
- [realtimeCanvasPerformInpaintingLCM](docs/sdks/realtimecanvas/README.md#performinpaintinglcm)
- [realtimeCanvasPerformInstantRefine](docs/sdks/realtimecanvas/README.md#performinstantrefine)
- [textureCreateTextureGeneration](docs/sdks/texture/README.md#createtexturegeneration)
- [textureDeleteTextureGenerationById](docs/sdks/texture/README.md#deletetexturegenerationbyid)
- [threeDModelAssetsDelete3DModelById](docs/sdks/threedmodelassets/README.md#delete3dmodelbyid)
- [threeDModelAssetsUploadModelAsset](docs/sdks/threedmodelassets/README.md#uploadmodelasset)
- [userGetUserSelf](docs/sdks/user/README.md#getuserself)
- [variationCreateUniversalUpscalerJob](docs/sdks/variation/README.md#createuniversalupscalerjob)
- [variationCreateVariationNoBG](docs/sdks/variation/README.md#createvariationnobg)
- [variationCreateVariationUnzoom](docs/sdks/variation/README.md#createvariationunzoom)
- [variationCreateVariationUpscale](docs/sdks/variation/README.md#createvariationupscale)
- [variationGetVariationById](docs/sdks/variation/README.md#getvariationbyid)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>", {
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<id>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const sdk = new Leonardo({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
