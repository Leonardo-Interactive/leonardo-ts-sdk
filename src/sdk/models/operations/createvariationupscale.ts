import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateVariationUpscaleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export class CreateVariationUpscaleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateVariationUpscaleRequestBody;
}

export class CreateVariationUpscale200ApplicationJSONSDUpscaleJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class CreateVariationUpscale200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdUpscaleJob" })
  sdUpscaleJob?: CreateVariationUpscale200ApplicationJSONSDUpscaleJobOutput;
}

export class CreateVariationUpscaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createVariationUpscale200ApplicationJSONObject?: CreateVariationUpscale200ApplicationJSON;
}