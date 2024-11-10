# UploadCanvasInitImageRequestBody

Query parameters provided in the request body as a JSON object

## Example Usage

```typescript
import { UploadCanvasInitImageRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadCanvasInitImageRequestBody = {
  initExtension: "<value>",
  maskExtension: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `initExtension`                    | *string*                           | :heavy_check_mark:                 | Has to be png, jpg, jpeg, or webp. |
| `maskExtension`                    | *string*                           | :heavy_check_mark:                 | Has to be png, jpg, jpeg, or webp. |