# CreateTextToVideoGenerationResponse

## Example Usage

```typescript
import { CreateTextToVideoGenerationResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateTextToVideoGenerationResponse = {
  contentType: "<value>",
  statusCode: 126632,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `object`                                                                                                                        | [operations.CreateTextToVideoGenerationResponseBody](../../../sdk/models/operations/createtexttovideogenerationresponsebody.md) | :heavy_minus_sign:                                                                                                              | Responses for POST /generations-text-to-video                                                                                   |