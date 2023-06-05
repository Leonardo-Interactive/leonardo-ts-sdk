# user

### Available Operations

* [getUserSelf](#getuserself) - Get user information

## getUserSelf

This endpoint will return your user such as your user id, username, token renewal date and current amounts of the following: subscription tokens, gpt (prompt generation) tokens, model training tokens and api credit (which is used via a production api key). Please note that the api credit unit is the millicent, ie. 100,000 credits = $1

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
