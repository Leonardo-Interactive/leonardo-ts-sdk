# PageInfo

Pagination information following the Relay cursor pagination spec

## Example Usage

```typescript
import { PageInfo } from "@leonardo-ai/sdk/sdk/models/shared";

let value: PageInfo = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `endCursor`                                 | *string*                                    | :heavy_minus_sign:                          | Cursor for the last item in the result set  |
| `hasNextPage`                               | *boolean*                                   | :heavy_minus_sign:                          | Whether there is a next page                |
| `hasPreviousPage`                           | *boolean*                                   | :heavy_minus_sign:                          | Whether there is a previous page            |
| `startCursor`                               | *string*                                    | :heavy_minus_sign:                          | Cursor for the first item in the result set |