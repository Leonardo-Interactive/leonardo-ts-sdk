# DeleteTextureGenerationByIdRequest

## Example Usage

```typescript
import { DeleteTextureGenerationByIdRequest } from "@leonardo-ai/sdk/sdk/models/operations";

let value: DeleteTextureGenerationByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                                 | [operations.DeleteTextureGenerationByIdRequestBody](../../../sdk/models/operations/deletetexturegenerationbyidrequestbody.md) | :heavy_minus_sign:                                                                                                            | Query parameters can also be provided in the request body as a JSON object                                                    |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | _"id" is required (enter it either in parameters or request body)_                                                            |