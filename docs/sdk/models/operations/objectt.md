# ObjectT

The end frame image. Supported only on kling2_1 model when used in conjunction with an init image.

## Example Usage

```typescript
import { ObjectT, String } from "@leonardo-ai/sdk/sdk/models/operations";

let value: ObjectT = {
  id: "<id>",
  type: String.Generated,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The ID of the end frame image.                                        |
| `type`                                                                | [operations.String](../../../sdk/models/operations/string.md)         | :heavy_check_mark:                                                    | Type indicating whether the end frame image is uploaded or generated. |