# UserDetails

columns and relationships of "user_details"

## Example Usage

```typescript
import { UserDetails } from "@leonardo-ai/sdk/sdk/models/operations";

let value: UserDetails = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `apiConcurrencySlots`                                                | *number*                                                             | :heavy_minus_sign:                                                   | API Concurrency Slots.                                               |
| `apiPaidTokens`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of API paid tokens the user has.                     |
| `apiPlanTokenRenewalDate`                                            | *string*                                                             | :heavy_minus_sign:                                                   | API Plan Token Renewal Date.                                         |
| `apiSubscriptionTokens`                                              | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of Enterprise API subscriptions tokens the user has. |
| `paidTokens`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of paid tokens the user has.                         |
| `subscriptionGptTokens`                                              | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of user plan GPT tokens the user has.                |
| `subscriptionModelTokens`                                            | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of model training tokens the user has.               |
| `subscriptionTokens`                                                 | *number*                                                             | :heavy_minus_sign:                                                   | Current balance of user plan subscription tokens the user has.       |
| `tokenRenewalDate`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | User Plan Token Renewal Date.                                        |
| `user`                                                               | [operations.Users](../../../sdk/models/operations/users.md)          | :heavy_minus_sign:                                                   | columns and relationships of "users"                                 |