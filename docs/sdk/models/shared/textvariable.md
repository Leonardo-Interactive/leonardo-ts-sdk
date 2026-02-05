# TextVariable

A text variable for replacing placeholders in Blueprint templates

## Example Usage

```typescript
import { TextVariable } from "@leonardo-ai/sdk/sdk/models/shared";

let value: TextVariable = {
  name: "characterName",
  value: "Luna",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | The name of the placeholder variable (without curly braces) | characterName                                               |
| `value`                                                     | *string*                                                    | :heavy_check_mark:                                          | The value to replace the placeholder with                   | Luna                                                        |