# PerformAlchemyUpscaleLCMResponse

## Example Usage

```typescript
import { PerformAlchemyUpscaleLCMResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: PerformAlchemyUpscaleLCMResponse = {
  contentType: "<value>",
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `object`                                                                                                                  | [operations.PerformAlchemyUpscaleLCMResponseBody](../../../sdk/models/operations/performalchemyupscalelcmresponsebody.md) | :heavy_minus_sign:                                                                                                        | Responses for POST /lcm-upscale                                                                                           |