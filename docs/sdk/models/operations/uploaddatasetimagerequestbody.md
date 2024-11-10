# UploadDatasetImageRequestBody

Query parameters provided in the request body as a JSON object

## Example Usage

```typescript
import { UploadDatasetImageRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadDatasetImageRequestBody = {
  extension: "pdf",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `extension`                        | *string*                           | :heavy_check_mark:                 | Has to be png, jpg, jpeg, or webp. |