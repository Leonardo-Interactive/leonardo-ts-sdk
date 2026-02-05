# Value

The replacement value. Type depends on settingName:
- `text`: string (the full text)
- `imageUrl`: string (the image URL)
- `textVariables`: array of TextVariable objects


## Supported Types

### `string`

```typescript
const value: string = "A futuristic cityscape at sunset";
```

### `shared.TextVariable[]`

```typescript
const value: shared.TextVariable[] = [
  {
    name: "characterName",
    value: "Luna",
  },
];
```

