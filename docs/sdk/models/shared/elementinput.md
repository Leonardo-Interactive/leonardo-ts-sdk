# ElementInput

## Example Usage

```typescript
import { ElementInput } from "@leonardo-ai/sdk/sdk/models/shared";

let value: ElementInput = {
  akUUID: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `akUUID`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for element. Elements can be found from the List Elements endpoint. |
| `weight`                                                                              | *number*                                                                              | :heavy_minus_sign:                                                                    | Weight for the element                                                                |