import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostVariationsUpscaleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export class PostVariationsUpscaleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVariationsUpscaleRequestBody;
}

export class PostVariationsUpscaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postVariationsUpscale200ApplicationJSONAny?: any;
}