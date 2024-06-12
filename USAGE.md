<!-- Start SDK Example Usage [usage] -->
```typescript
import { Leonardo } from "@leonardo-ai/sdk";

const leonardo = new Leonardo({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await leonardo.initImages.deleteInitImageById("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->