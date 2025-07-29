# ImageType

Type indicating whether the init image is uploaded or generated. Use only image or imageId with imageType.

## Example Usage

```typescript
import { ImageType } from "@leonardo-ai/sdk/sdk/models/operations";

let value: ImageType = ImageType.Uploaded;
```

## Values

| Name        | Value       |
| ----------- | ----------- |
| `Generated` | GENERATED   |
| `Uploaded`  | UPLOADED    |