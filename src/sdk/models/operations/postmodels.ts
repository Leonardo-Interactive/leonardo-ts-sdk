import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostModelsRequestBody extends SpeakeasyBase {
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

export class PostModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostModelsRequestBody;
}

export class PostModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postModels200ApplicationJSONAny?: any;
}