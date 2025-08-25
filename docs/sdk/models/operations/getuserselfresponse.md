# GetUserSelfResponse

## Example Usage

```typescript
import { GetUserSelfResponse } from "@leonardo-ai/sdk/sdk/models/operations";

let value: GetUserSelfResponse = {
  contentType: "<value>",
  statusCode: 582156,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `object`                                                                                        | [operations.GetUserSelfResponseBody](../../../sdk/models/operations/getuserselfresponsebody.md) | :heavy_minus_sign:                                                                              | Responses for GET /me                                                                           |