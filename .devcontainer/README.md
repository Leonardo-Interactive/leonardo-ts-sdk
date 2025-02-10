<div align="center">
    <a href="https://codespaces.new/Leonardo-Interactive/leonardo-ts-sdk.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
    <a href="https://app.codeanywhere.com/#https://github.com/Leonardo-Interactive/leonardo-ts-sdk/tree/main"><img src="https://codeanywhere.com/img/open-in-codeanywhere-btn.svg" alt=""></a>
</div>
<br>

> **Remember to shutdown a GitHub Codespace or stop workspaces on Codeanywhere when not in use!**

# Dev Containers Quick Start

The default location for usage snippets is the `samples` directory.

## Running a Usage Sample

A sample usage example has been provided in a `root.ts` file. As you work with the SDK, it's expected that you will modify these samples to fit your needs. To execute this particular snippet, use the command below.

```
ts-node root.ts
```

## Generating Additional Usage Samples

The speakeasy CLI allows you to generate more usage snippets. Here's how:

- To generate a sample for a specific operation by providing an operation ID, use:

```
speakeasy generate usage -s https://api-docs-nine-delta.vercel.app/cloud/openapi.json -l typescript -i {INPUT_OPERATION_ID} -o ./samples
```

- To generate samples for an entire namespace (like a tag or group name), use:

```
speakeasy generate usage -s https://api-docs-nine-delta.vercel.app/cloud/openapi.json -l typescript -n {INPUT_TAG_NAME} -o ./samples
```
