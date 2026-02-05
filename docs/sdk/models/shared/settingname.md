# SettingName

The type of setting to replace:
- `text`: Direct text replacement (value is a string)
- `imageUrl`: Image URL input (value is a URL string)
- `textVariables`: Text with placeholder variables (value is an array of TextVariable)

## Example Usage

```typescript
import { SettingName } from "@leonardo-ai/sdk/sdk/models/shared";

let value: SettingName = SettingName.Text;
```

## Values

| Name            | Value           |
| --------------- | --------------- |
| `Text`          | text            |
| `ImageUrl`      | imageUrl        |
| `TextVariables` | textVariables   |