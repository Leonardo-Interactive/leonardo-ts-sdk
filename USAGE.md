<!-- Start SDK Example Usage [usage] -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { SettingName } from "@leonardo-ai/sdk/sdk/models/shared";

const leonardo = new Leonardo({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await leonardo.blueprints.executeBlueprint({
    blueprintVersionId: "550e8400-e29b-41d4-a716-446655440000",
    input: {
      collectionIds: [],
      nodeInputs: [
        {
          nodeId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          settingName: SettingName.Text,
          value: "A futuristic cityscape at sunset",
        },
        {
          nodeId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
          settingName: SettingName.TextVariables,
          value: [
            {
              name: "characterName",
              value: "Luna",
            },
            {
              name: "outfit",
              value: "cyberpunk armor",
            },
          ],
        },
        {
          nodeId: "c3d4e5f6-a7b8-9012-cdef-123456789012",
          settingName: SettingName.ImageUrl,
          value: "https://cdn.leonardo.ai/users/example/image.png",
        },
      ],
      public: false,
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->