import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class UploadInitImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "extension" })
  extension: string;
}

export class UploadInitImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadInitImageRequestBody;
}

export class UploadInitImage200ApplicationJSONInitImageUploadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "__typename" })
  typename?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fields" })
  fields?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class UploadInitImage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uploadInitImage" })
  @Type(() => UploadInitImage200ApplicationJSONInitImageUploadOutput)
  uploadInitImage?: UploadInitImage200ApplicationJSONInitImageUploadOutput;
}

export class UploadInitImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  uploadInitImage200ApplicationJSONObject?: UploadInitImage200ApplicationJSON;
}