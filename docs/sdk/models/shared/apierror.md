# ApiError

API error response structure

## Example Usage

```typescript
import { ApiError } from "@leonardo-ai/sdk/sdk/models/shared";

let value: ApiError = {
  message: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `extensions`                                                  | [shared.Extensions](../../../sdk/models/shared/extensions.md) | :heavy_minus_sign:                                            | Additional error details and context                          |
| `locations`                                                   | [shared.Locations](../../../sdk/models/shared/locations.md)[] | :heavy_minus_sign:                                            | Location information for the error                            |
| `message`                                                     | *string*                                                      | :heavy_check_mark:                                            | Error message                                                 |
| `path`                                                        | *string*[]                                                    | :heavy_minus_sign:                                            | Path to the field that caused the error                       |