# GetMotionVariationByIdResponse

## Example Usage

```typescript
import { GetMotionVariationByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetMotionVariationByIdResponse = {
  contentType: "<value>",
  statusCode: 228813,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `object`                                                                                                              | [operations.GetMotionVariationByIdResponseBody](../../../sdk/models/operations/getmotionvariationbyidresponsebody.md) | :heavy_minus_sign:                                                                                                    | Responses for GET /motion-variations/{id}                                                                             |