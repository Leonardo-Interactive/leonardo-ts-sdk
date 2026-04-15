# Media

## Overview

### Available Operations

* [deleteUploadedMediaById](#deleteuploadedmediabyid) - Delete uploaded media
* [getUploadedMediaById](#getuploadedmediabyid) - Get uploaded media
* [uploadMedia](#uploadmedia) - Upload media

## deleteUploadedMediaById

This endpoint deletes an uploaded media record and removes the associated file from S3

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteUploadedMediaById" method="delete" path="/media/{id}" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.media.deleteUploadedMediaById("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { mediaDeleteUploadedMediaById } from "@leonardo-ai/sdk/funcs/mediaDeleteUploadedMediaById.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await mediaDeleteUploadedMediaById(leonardo, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaDeleteUploadedMediaById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | _"id" is required_                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteUploadedMediaByIdResponse](../../sdk/models/operations/deleteuploadedmediabyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUploadedMediaById

This endpoint returns details of an uploaded media record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUploadedMediaById" method="get" path="/media/{id}" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.media.getUploadedMediaById("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { mediaGetUploadedMediaById } from "@leonardo-ai/sdk/funcs/mediaGetUploadedMediaById.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await mediaGetUploadedMediaById(leonardo, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaGetUploadedMediaById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | _"id" is required_                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUploadedMediaByIdResponse](../../sdk/models/operations/getuploadedmediabyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## uploadMedia

This endpoint returns presigned details to upload a media file to S3

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadMedia" method="post" path="/media" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.media.uploadMedia({
    extension: "pdf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { mediaUploadMedia } from "@leonardo-ai/sdk/funcs/mediaUploadMedia.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await mediaUploadMedia(leonardo, {
    extension: "pdf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaUploadMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadMediaRequestBody](../../sdk/models/operations/uploadmediarequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadMediaResponse](../../sdk/models/operations/uploadmediaresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |