<!-- Start SDK Example Usage [usage] -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

async function run() {
    const sdk = new Leonardo({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.dataset.createDataset({
        name: "string",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->