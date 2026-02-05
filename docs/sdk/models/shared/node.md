# Node

## Example Usage

```typescript
import { Node } from "@leonardo-ai/sdk/sdk/models/shared";

let value: Node = {
  akUUID: "956e9564-19f7-4968-b56d-05c2c567726f",
  cost: 160,
  createdAt: new Date("2025-11-27T05:13:21.896Z"),
  executability: {
    isExecutable: true,
    reasons: [
      {
        models: "gemini-2.5-flash-image",
      },
    ],
  },
  uiMetadataSchemaVersion: "21",
  updatedAt: new Date("2025-11-27T05:13:21.896Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `akUUID`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 956e9564-19f7-4968-b56d-05c2c567726f                                                          |
| `cost`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 160                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2025-11-27T05:13:21.896Z                                                                      |
| `executability`                                                                               | [shared.Executability](../../../sdk/models/shared/executability.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `models`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `uiMetadata`                                                                                  | [shared.UiMetadata](../../../sdk/models/shared/uimetadata.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `uiMetadataSchemaVersion`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 21                                                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2025-11-27T05:13:21.896Z                                                                      |