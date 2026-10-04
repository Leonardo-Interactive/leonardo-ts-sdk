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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `extension`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The file extension of the media file to upload. Supported extensions for video: `mp4`, `mov`. Supported for audio: `mp3`, `wav`. |
| `originalFilename`                                                                                                               | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Original file name for display. Required for audio uploads (`mp3`, `wav`). Optional for video.                                   |
| `teamId`                                                                                                                         | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Optional team UUID. When set, the upload is associated with that team and the caller must be a member.                           |