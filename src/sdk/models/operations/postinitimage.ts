import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostInitImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;
}

export class PostInitImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostInitImageRequestBody;
}

export class PostInitImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postInitImage200ApplicationJSONAny?: any;
}