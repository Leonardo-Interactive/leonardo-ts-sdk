# PromptImproveResponse

## Example Usage

```typescript
import { PromptImproveResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: PromptImproveResponse = {
  contentType: "<value>",
  statusCode: 833179,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `object`                                                                                            | [operations.PromptImproveResponseBody](../../../sdk/models/operations/promptimproveresponsebody.md) | :heavy_minus_sign:                                                                                  | Responses for POST /prompt/improve                                                                  |