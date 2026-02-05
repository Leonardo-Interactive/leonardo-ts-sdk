# Input

## Example Usage

```typescript
import { Input } from "@leonardo-ai/sdk/sdk/models/operations";

let value: Input = {
  collectionIds: [],
  nodeInputs: [],
  public: false,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `collectionIds`                                               | *number*[]                                                    | :heavy_minus_sign:                                            | Optional list of collection IDs to add the generations to     | []                                                            |
| `nodeInputs`                                                  | [shared.NodeInput](../../../sdk/models/shared/nodeinput.md)[] | :heavy_check_mark:                                            | Array of node input objects to customize the Blueprint        |                                                               |
| `public`                                                      | *boolean*                                                     | :heavy_check_mark:                                            | Whether the resulting generations should be public            | false                                                         |