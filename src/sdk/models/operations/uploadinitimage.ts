import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadInitImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;
}

export class UploadInitImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadInitImageRequestBody;
}

export class UploadInitImage200ApplicationJSONInitImageUploadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=__typename" })
  typename?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export class UploadInitImage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadInitImage" })
  uploadInitImage?: UploadInitImage200ApplicationJSONInitImageUploadOutput;
}

export class UploadInitImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadInitImage200ApplicationJSONObject?: UploadInitImage200ApplicationJSON;
}