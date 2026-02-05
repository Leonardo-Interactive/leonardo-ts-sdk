# GetBlueprintVersionsByBlueprintIdResponseBody

Successfully retrieved Blueprint Versions


## Supported Types

### `operations.GetBlueprintVersionsByBlueprintIdSuccessResponse`

```typescript
const value: operations.GetBlueprintVersionsByBlueprintIdSuccessResponse = {
  blueprintVersions: {
    edges: [
      {
        cursor:
          "eyJjcmVhdGVkQXQiOiIyMDI1LTExLTI3VDA1OjEzOjIxLjg5NloiLCJha1VVSUQiOiI5NTZlOTU2NC0xOWY3LTQ5NjgtYjU2ZC0wNWMyYzU2NzcyNmYifQ==",
        node: {
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
        },
      },
    ],
    pageInfo: {
      endCursor:
        "eyJjcmVhdGVkQXQiOiIyMDI1LTExLTI3VDA1OjEzOjIxLjg5NloiLCJha1VVSUQiOiI5NTZlOTU2NC0xOWY3LTQ5NjgtYjU2ZC0wNWMyYzU2NzcyNmYifQ==",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor:
        "eyJjcmVhdGVkQXQiOiIyMDI1LTExLTI3VDA1OjEzOjIxLjg5NloiLCJha1VVSUQiOiI5NTZlOTU2NC0xOWY3LTQ5NjgtYjU2ZC0wNWMyYzU2NzcyNmYifQ==",
    },
    totalCount: 2,
  },
};
```

### `shared.ApiError[]`

```typescript
const value: shared.ApiError[] = [];
```

