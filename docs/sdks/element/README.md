# Element
(*element*)

### Available Operations

* [getElements](#getelements) - List Elements

## getElements

Get a list of public Elements available for use with generations.

### Example Usage

```typescript
import { Leonardo } from "@leonardo-ai/sdk";

(async() => {
  const sdk = new Leonardo({
    bearerAuth: "",
  });

  const res = await sdk.element.getElements();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetElementsResponse](../../models/operations/getelementsresponse.md)>**

