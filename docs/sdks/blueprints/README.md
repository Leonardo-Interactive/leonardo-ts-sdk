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

### Example Usage: error

<!-- UsageSnippet language="typescript" operationID="executeBlueprint" method="post" path="/blueprint-executions" example="error" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.executeBlueprint({
    blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
    input: {
      collectionIds: [],
      nodeInputs: [],
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
      nodeInputs: [],
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
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="executeBlueprint" method="post" path="/blueprint-executions" example="success" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.executeBlueprint({
    blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
    input: {
      collectionIds: [],
      nodeInputs: [],
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
      nodeInputs: [],
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

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="getBlueprintById" method="get" path="/blueprints/{id}" example="badRequest" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintById("8f161ed5-dc84-4f5b-8ef5-4f3e5821df56");

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
  const res = await blueprintsGetBlueprintById(leonardo, "8f161ed5-dc84-4f5b-8ef5-4f3e5821df56");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintById failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="getBlueprintById" method="get" path="/blueprints/{id}" example="notFound" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintById("d5f01775-fb53-4c5c-8d08-df840b5a6c71");

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
  const res = await blueprintsGetBlueprintById(leonardo, "d5f01775-fb53-4c5c-8d08-df840b5a6c71");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintById failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="getBlueprintById" method="get" path="/blueprints/{id}" example="success" -->
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

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecution" method="get" path="/blueprint-executions/{id}" example="badRequest" -->
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
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecution" method="get" path="/blueprint-executions/{id}" example="notFound" -->
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
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecution" method="get" path="/blueprint-executions/{id}" example="success" -->
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

### Example Usage: notAccessible

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecutionGenerations" method="get" path="/blueprint-executions/{id}/generations" example="notAccessible" -->
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
### Example Usage: promptModerationFailure

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecutionGenerations" method="get" path="/blueprint-executions/{id}/generations" example="promptModerationFailure" -->
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
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="getBlueprintExecutionGenerations" method="get" path="/blueprint-executions/{id}/generations" example="success" -->
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

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="getBlueprintVersionsByBlueprintId" method="get" path="/blueprints/{id}/versions" example="badRequest" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintVersionsByBlueprintId("a6daa51b-6406-4e13-93f8-b7c8344fad6c");

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
  const res = await blueprintsGetBlueprintVersionsByBlueprintId(leonardo, "a6daa51b-6406-4e13-93f8-b7c8344fad6c");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintVersionsByBlueprintId failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="getBlueprintVersionsByBlueprintId" method="get" path="/blueprints/{id}/versions" example="notFound" -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.getBlueprintVersionsByBlueprintId("7b44812d-6ac6-40b5-ad08-7c47a3f9807c");

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
  const res = await blueprintsGetBlueprintVersionsByBlueprintId(leonardo, "7b44812d-6ac6-40b5-ad08-7c47a3f9807c");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("blueprintsGetBlueprintVersionsByBlueprintId failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="getBlueprintVersionsByBlueprintId" method="get" path="/blueprints/{id}/versions" example="success" -->
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