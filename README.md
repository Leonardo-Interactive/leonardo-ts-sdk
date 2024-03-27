<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/230025738-42a4980e-a5ea-4d00-a591-65e8de14de85.png" width="200">
   <h1>Leonardo Typescript SDK</h1>
   <p>The API for creating stunning game assets with AI.</p>
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

    const result = await sdk.dataset.createDataset({
        name: "<value>",
    });

    // Handle the result
    console.log(result);
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

* [listElements](docs/sdks/element/README.md#listelements) - List Elements

### [generation](docs/sdks/generation/README.md)

* [createGeneration](docs/sdks/generation/README.md#creategeneration) - Create a Generation of Images
* [createLCMGeneration](docs/sdks/generation/README.md#createlcmgeneration) - Create LCM Generation
* [createSVDMotionGeneration](docs/sdks/generation/README.md#createsvdmotiongeneration) - Create SVD Motion Generation
* [createTextureGeneration](docs/sdks/generation/README.md#createtexturegeneration) - Create Texture Generation
* [deleteGenerationById](docs/sdks/generation/README.md#deletegenerationbyid) - Delete a Single Generation
* [deleteTextureGenerationById](docs/sdks/generation/README.md#deletetexturegenerationbyid) - Delete Texture Generation by ID
* [getGenerationById](docs/sdks/generation/README.md#getgenerationbyid) - Get a Single Generation
* [getGenerationsByUserId](docs/sdks/generation/README.md#getgenerationsbyuserid) - Get generations by user ID
* [performAlchemyUpscaleLCM](docs/sdks/generation/README.md#performalchemyupscalelcm) - Perform Alchemy Upscale on a LCM image
* [performInpaintingLCM](docs/sdks/generation/README.md#performinpaintinglcm) - Perform inpainting on a LCM image
* [performInstantRefine](docs/sdks/generation/README.md#performinstantrefine) - Perform instant refine on a LCM image

### [initImage](docs/sdks/initimage/README.md)

* [deleteInitImageById](docs/sdks/initimage/README.md#deleteinitimagebyid) - Delete init image
* [getInitImageById](docs/sdks/initimage/README.md#getinitimagebyid) - Get single init image
* [uploadInitImage](docs/sdks/initimage/README.md#uploadinitimage) - Upload init image

### [user](docs/sdks/user/README.md)

* [getUserSelf](docs/sdks/user/README.md#getuserself) - Get user information

### [model](docs/sdks/model/README.md)

* [createModel](docs/sdks/model/README.md#createmodel) - Train a Custom Model
* [delete3DModelById](docs/sdks/model/README.md#delete3dmodelbyid) - Delete 3D Model by ID
* [deleteModelById](docs/sdks/model/README.md#deletemodelbyid) - Delete a Single Custom Model by ID
* [getModelById](docs/sdks/model/README.md#getmodelbyid) - Get a Single Custom Model by ID
* [listPlatformModels](docs/sdks/model/README.md#listplatformmodels) - List Platform Models
* [uploadModelAsset](docs/sdks/model/README.md#uploadmodelasset) - Upload 3D Model

### [variation](docs/sdks/variation/README.md)

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
import * as errors from "@leonardo-ai/sdk/sdk/models/errors";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.dataset.createDataset({
            name: "<value>",
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
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
    signal: request.signal || AbortSignal.timeout(5000);
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

async function run() {
    const sdk = new Leonardo({
        serverIdx: 0,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.dataset.createDataset({
        name: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        serverURL: "https://cloud.leonardo.ai/api/rest/v1",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.dataset.createDataset({
        name: "<value>",
    });

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

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.dataset.createDataset({
        name: "<value>",
    });

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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
