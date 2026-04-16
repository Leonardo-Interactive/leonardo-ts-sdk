# UploadMediaRequestBody

Query parameters provided in the request body as a JSON object

## Example Usage

```typescript
import { UploadMediaRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UploadMediaRequestBody = {
  extension: "png",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `extension`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The file extension of the media file to upload. Supported extensions: mp4, mov. |