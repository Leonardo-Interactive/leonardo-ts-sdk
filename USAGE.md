<!-- Start SDK Example Usage -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

(async () => {
    const sdk = new Leonardo({
        bearerAuth: "",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->