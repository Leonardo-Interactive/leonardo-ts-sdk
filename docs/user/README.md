# user

### Available Operations

* [getUserSelf](#getuserself) - Get user information

## getUserSelf

This endpoint will return your user information, including your user ID.

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";
import { GetUserSelfResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";

const sdk = new Leonardo({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.getUserSelf().then((res: GetUserSelfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
