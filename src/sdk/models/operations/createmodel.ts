import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=instance_prompt" })
  instancePrompt: string;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "json, name=sd_Version" })
  sdVersion?: any;

  @SpeakeasyMetadata({ data: "json, name=strength" })
  strength?: any;
}

export class CreateModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateModelRequestBody;
}

export class CreateModel200ApplicationJSONSDTrainingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customModelId" })
  customModelId?: string;
}

export class CreateModel200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdTrainingJob" })
  sdTrainingJob?: CreateModel200ApplicationJSONSDTrainingOutput;
}

export class CreateModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createModel200ApplicationJSONObject?: CreateModel200ApplicationJSON;
}