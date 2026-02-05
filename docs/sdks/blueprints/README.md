# Blueprints

## Overview

### Available Operations

* [executeBlueprint](#executeblueprint) - Execute a Blueprint
* [getBlueprintById](#getblueprintbyid) - Get Blueprint by ID
* [getBlueprintExecution](#getblueprintexecution) - Get Blueprint Execution by ID
* [getBlueprintExecutionGenerations](#getblueprintexecutiongenerations) - Get Blueprint Execution Generations by Execution ID
* [getBlueprintVersionsByBlueprintId](#getblueprintversionsbyblueprintid) - Get Blueprint Versions by Blueprint ID

## executeBlueprint

Execute a Blueprint Version with custom node inputs. This endpoint triggers the execution of the specified Blueprint Version and returns a Blueprint Execution ID to track the job.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="executeBlueprint" method="post" path="/blueprint-executions" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { SettingName } from "@leonardo-ai/sdk/sdk/models/shared";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.executeBlueprint({
    blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
    input: {
      collectionIds: [],
      nodeInputs: [
        {
          nodeId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          settingName: SettingName.Text,
          value: "A futuristic cityscape at sunset",
        },
        {
          nodeId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
          settingName: SettingName.TextVariables,
          value: [
            {
              name: "characterName",
              value: "Luna",
            },
            {
              name: "outfit",
              value: "cyberpunk armor",
            },
          ],
        },
        {
          nodeId: "c3d4e5f6-a7b8-9012-cdef-123456789012",
          settingName: SettingName.ImageUrl,
          value: "https://cdn.leonardo.ai/users/example/image.png",
        },
      ],
      public: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { blueprintsExecuteBlueprint } from "@leonardo-ai/sdk/funcs/blueprintsExecuteBlueprint.js";
import { SettingName } from "@leonardo-ai/sdk/sdk/models/shared";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await blueprintsExecuteBlueprint(leonardo, {
    blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
    input: {
      collectionIds: [],
      nodeInputs: [
        {
          nodeId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          settingName: SettingName.Text,
          value: "A futuristic cityscape at sunset",
        },
        {
          nodeId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
          settingName: SettingName.TextVariables,
          value: [
            {
              name: "characterName",
              value: "Luna",
            },
            {
              name: "outfit",
              value: "cyberpunk armor",
            },
          ],
        },
        {
          nodeId: "c3d4e5f6-a7b8-9012-cdef-123456789012",
          settingName: SettingName.ImageUrl,
          value: "https://cdn.leonardo.ai/users/example/image.png",
        },
      ],
      public: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsExecuteBlueprint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExecuteBlueprintRequestBody](../../sdk/models/operations/executeblueprintrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExecuteBlueprintResponse](../../sdk/models/operations/executeblueprintresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBlueprintById

Returns a single Blueprint by its akUUID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBlueprintById" method="get" path="/blueprints/{id}" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintById("151f5c6d-c840-46cd-84ea-f25ac4521a39");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { blueprintsGetBlueprintById } from "@leonardo-ai/sdk/funcs/blueprintsGetBlueprintById.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await blueprintsGetBlueprintById(leonardo, "151f5c6d-c840-46cd-84ea-f25ac4521a39");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The akUUID of the Blueprint to return                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBlueprintByIdResponse](../../sdk/models/operations/getblueprintbyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBlueprintExecution

Retrieves details of a specific Blueprint Execution by its akUUID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecution" method="get" path="/blueprint-executions/{id}" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintExecution("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { blueprintsGetBlueprintExecution } from "@leonardo-ai/sdk/funcs/blueprintsGetBlueprintExecution.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await blueprintsGetBlueprintExecution(leonardo, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintExecution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The akUUID of the Blueprint Execution to retrieve                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBlueprintExecutionResponse](../../sdk/models/operations/getblueprintexecutionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBlueprintExecutionGenerations

Retrieves paginated generations for a specific Blueprint Execution, including their statuses and any prompt moderation failure details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecutionGenerations" method="get" path="/blueprint-executions/{id}/generations" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintExecutionGenerations("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { blueprintsGetBlueprintExecutionGenerations } from "@leonardo-ai/sdk/funcs/blueprintsGetBlueprintExecutionGenerations.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await blueprintsGetBlueprintExecutionGenerations(leonardo, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintExecutionGenerations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The akUUID of the Blueprint Execution to retrieve generations for                                                                                                              |
| `after`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for forward pagination - returns generations after this cursor                                                                                                          |
| `before`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for backward pagination - returns generations before this cursor                                                                                                        |
| `first`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Number of generations to return from the beginning of the list (forward pagination)                                                                                            |
| `last`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Number of generations to return from the end of the list (backward pagination)                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBlueprintExecutionGenerationsResponse](../../sdk/models/operations/getblueprintexecutiongenerationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBlueprintVersionsByBlueprintId

Returns all versions of a Blueprint by its akUUID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBlueprintVersionsByBlueprintId" method="get" path="/blueprints/{id}/versions" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintVersionsByBlueprintId("b18920da-63c6-48a9-8fec-f3b887c8d851");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LeonardoCore } from "@leonardo-ai/sdk/core.js";
import { blueprintsGetBlueprintVersionsByBlueprintId } from "@leonardo-ai/sdk/funcs/blueprintsGetBlueprintVersionsByBlueprintId.js";

// Use `LeonardoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const leonardo = new LeonardoCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await blueprintsGetBlueprintVersionsByBlueprintId(leonardo, "b18920da-63c6-48a9-8fec-f3b887c8d851");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintVersionsByBlueprintId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The akUUID of the Blueprint                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBlueprintVersionsByBlueprintIdResponse](../../sdk/models/operations/getblueprintversionsbyblueprintidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |