# ExecuteBlueprintRequestBody

## Example Usage

```typescript
import { ExecuteBlueprintRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";
import { SettingName } from "@leonardo-ai/sdk/sdk/models/shared";

let value: ExecuteBlueprintRequestBody = {
  blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
  input: {
    collectionIds: [],
    nodeInputs: [
      {
        nodeId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        settingName: SettingName.Text,
        value: "A futuristic cityscape at sunset",
      },
    ],
    public: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `blueprintVersionId`                                        | *string*                                                    | :heavy_check_mark:                                          | The unique identifier of the Blueprint Version to execute   | 550e8400-e29b-41d4-a716-446655440000                        |
| `input`                                                     | [operations.Input](../../../sdk/models/operations/input.md) | :heavy_check_mark:                                          | N/A                                                         |                                                             |