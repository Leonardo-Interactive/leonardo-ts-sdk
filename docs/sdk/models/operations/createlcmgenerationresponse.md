# CreateLCMGenerationResponse

## Example Usage

```typescript
import { CreateLCMGenerationResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateLCMGenerationResponse = {
  contentType: "<value>",
  statusCode: 417,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.CreateLCMGenerationResponseBody](../../../sdk/models/operations/createlcmgenerationresponsebody.md) | :heavy_minus_sign:                                                                                              | Responses for POST /generations-lcm                                                                             |