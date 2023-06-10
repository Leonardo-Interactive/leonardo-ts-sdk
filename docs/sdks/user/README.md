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
    bearerAuth: "",
  },
});

sdk.user.getUserSelf().then((res: GetUserSelfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserSelfResponse](../../models/operations/getuserselfresponse.md)>**

