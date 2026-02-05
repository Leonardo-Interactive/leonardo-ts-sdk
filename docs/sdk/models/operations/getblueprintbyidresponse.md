# GetBlueprintByIdResponse

## Example Usage

```typescript
import { GetBlueprintByIdResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetBlueprintByIdResponse = {
  contentType: "<value>",
  statusCode: 859417,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `oneOf`                                                               | *operations.GetBlueprintByIdResponseBody*                             | :heavy_minus_sign:                                                    | Successfully retrieved Blueprint                                      |