# PerformInpaintingLCMResponse

## Example Usage

```typescript
import { PerformInpaintingLCMResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: PerformInpaintingLCMResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `object`                                                                                                          | [operations.PerformInpaintingLCMResponseBody](../../../sdk/models/operations/performinpaintinglcmresponsebody.md) | :heavy_minus_sign:                                                                                                | Responses for POST /lcm-inpainting                                                                                |