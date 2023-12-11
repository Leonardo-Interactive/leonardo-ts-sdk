<!-- Start SDK Example Usage [usage] -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.dataset.createDataset({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->