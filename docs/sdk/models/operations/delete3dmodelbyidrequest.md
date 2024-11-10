# Delete3DModelByIdRequest

## Example Usage

```typescript
import { Delete3DModelByIdRequest } from "@leonardo-ai/sdk/sdk/models/operations";

let value: Delete3DModelByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                             | [operations.Delete3DModelByIdRequestBody](../../../sdk/models/operations/delete3dmodelbyidrequestbody.md) | :heavy_minus_sign:                                                                                        | Query parameters can also be provided in the request body as a JSON object                                |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | _"id" is required (enter it either in parameters or request body)_                                        |