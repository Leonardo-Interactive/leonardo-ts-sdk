# PricingCalculatorPricingCalculatorObject

Parameters for IMAGE_GENERATION service


## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alchemyMode`                                                                                                                                                                               | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use Alchemy.                                                                                                                                                                      |
| `controlnetsCost`                                                                                                                                                                           | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The total cost of controlnets input.                                                                                                                                                        |
| `highResolution`                                                                                                                                                                            | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use high resolution.                                                                                                                                                              |
| `imageHeight`                                                                                                                                                                               | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features |
| `imageWidth`                                                                                                                                                                                | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features |
| `inferenceSteps`                                                                                                                                                                            | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The Step Count to use for the generation. Must be between 10 and 60.                                                                                                                        |
| `isModelCustom`                                                                                                                                                                             | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use custom model.                                                                                                                                                                 |
| `isSDXL`                                                                                                                                                                                    | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use SDXL model.                                                                                                                                                                   |
| `isSDXLLightning`                                                                                                                                                                           | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use SDXL Lightning model.                                                                                                                                                         |
| `loraCount`                                                                                                                                                                                 | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The number of elements used for the generation.                                                                                                                                             |
| `numImages`                                                                                                                                                                                 | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.                                                                  |
| `promptMagic`                                                                                                                                                                               | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | Enable to use Prompt Magic.                                                                                                                                                                 |
| `promptMagicStrength`                                                                                                                                                                       | *number*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | Strength of prompt magic. Must be a float between 0.1 and 1.0                                                                                                                               |
| `promptMagicVersion`                                                                                                                                                                        | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | Prompt magic version v2 or v3, for use when promptMagic: true                                                                                                                               |