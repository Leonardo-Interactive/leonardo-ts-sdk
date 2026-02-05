# Executability

## Example Usage

```typescript
import { Executability } from "@leonardo-ai/sdk/sdk/models/shared";

let value: Executability = {
  isExecutable: true,
  reasons: [
    {
      models: "gemini-2.5-flash-image",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `isExecutable`                                            | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       | true                                                      |
| `reasons`                                                 | [shared.Reasons](../../../sdk/models/shared/reasons.md)[] | :heavy_minus_sign:                                        | N/A                                                       |                                                           |