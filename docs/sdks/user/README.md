# User
(*user*)

### Available Operations

* [getUserSelf](#getuserself) - Get user information

## getUserSelf

This endpoint will return your user information such as your user id, username, token renewal date and current amounts of the following: subscription tokens, gpt (prompt generation) tokens, and model training tokens

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
  const sdk = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.user.getUserSelf();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserSelfResponse](../../sdk/models/operations/getuserselfresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
