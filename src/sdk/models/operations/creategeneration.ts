import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateGenerationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guidance_scale" })
  guidanceScale?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=init_generation_image_id" })
  initGenerationImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=init_image_id" })
  initImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=init_strength" })
  initStrength?: number;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=negative_prompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=num_images" })
  numImages?: number;

  @SpeakeasyMetadata({ data: "json, name=num_inference_steps" })
  numInferenceSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=presetStyle" })
  presetStyle?: any;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduler" })
  scheduler?: any;

  @SpeakeasyMetadata({ data: "json, name=sd_version" })
  sdVersion?: any;

  @SpeakeasyMetadata({ data: "json, name=tiling" })
  tiling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}

export class CreateGenerationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGenerationRequestBody;
}

export class CreateGeneration200ApplicationJSONSDGenerationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generationId" })
  generationId?: string;
}

export class CreateGeneration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdGenerationJob" })
  sdGenerationJob?: CreateGeneration200ApplicationJSONSDGenerationOutput;
}

export class CreateGenerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGeneration200ApplicationJSONObject?: CreateGeneration200ApplicationJSON;
}