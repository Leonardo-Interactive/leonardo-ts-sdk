# UploadInitImageRequestBody

Query parameters provided in the request body as a JSON object

## Example Usage

```typescript
import { UploadInitImageRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadInitImageRequestBody = {
  extension: "m1v",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `extension`                        | *string*                           | :heavy_check_mark:                 | Has to be png, jpg, jpeg, or webp. |