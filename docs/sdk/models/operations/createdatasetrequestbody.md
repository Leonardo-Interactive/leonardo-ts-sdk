# CreateDatasetRequestBody

Query parameters to be provided in the request body as a JSON object

## Example Usage

```typescript
import { CreateDatasetRequestBody } from "@leonardo-ai/sdk/sdk/models/operations";

let value: CreateDatasetRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `description`                  | *string*                       | :heavy_minus_sign:             | A description for the dataset. |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the dataset.       |