# DeleteTextureGenerationByIdResponse

## Example Usage

```typescript
import { DeleteTextureGenerationByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: DeleteTextureGenerationByIdResponse = {
  contentType: "<value>",
  statusCode: 255340,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `object`                                                                                                                        | [operations.DeleteTextureGenerationByIdResponseBody](../../../sdk/models/operations/deletetexturegenerationbyidresponsebody.md) | :heavy_minus_sign:                                                                                                              | Responses for DELETE /api/rest/v1/generations-texture/{id}                                                                      |