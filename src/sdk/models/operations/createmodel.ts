import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class CreateModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instance_prompt" })
  instancePrompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modelType" })
  modelType?: shared.CustomModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "resolution" })
  resolution?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sd_Version" })
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "strength" })
  strength?: shared.StrengthEnum;
}

export class CreateModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateModelRequestBody;
}

export class CreateModel200ApplicationJSONSDTrainingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "customModelId" })
  customModelId?: string;
}

export class CreateModel200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sdTrainingJob" })
  @Type(() => CreateModel200ApplicationJSONSDTrainingOutput)
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