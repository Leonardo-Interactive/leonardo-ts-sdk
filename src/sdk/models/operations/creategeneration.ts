import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateGenerationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "guidance_scale" })
  guidanceScale?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "init_generation_image_id" })
  initGenerationImageId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "init_image_id" })
  initImageId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "init_strength" })
  initStrength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "modelId" })
  modelId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "negative_prompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "num_images" })
  numImages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "num_inference_steps" })
  numInferenceSteps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "presetStyle" })
  presetStyle?: shared.SdGenerationStyleEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "public" })
  public?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduler" })
  scheduler?: shared.SdGenerationSchedulersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sd_version" })
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tiling" })
  tiling?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "width" })
  width?: number;
}

export class CreateGeneration200ApplicationJSONSDGenerationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "generationId" })
  generationId?: string;
}

export class CreateGeneration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sdGenerationJob" })
  @Type(() => CreateGeneration200ApplicationJSONSDGenerationOutput)
  sdGenerationJob?: CreateGeneration200ApplicationJSONSDGenerationOutput;
}

export class CreateGenerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createGeneration200ApplicationJSONObject?: CreateGeneration200ApplicationJSON;
}
