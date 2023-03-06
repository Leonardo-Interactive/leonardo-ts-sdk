import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class UploadDatasetImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class UploadDatasetImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "extension" })
  extension: string;
}

export class UploadDatasetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadDatasetImagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadDatasetImageRequestBody;
}

export class UploadDatasetImage200ApplicationJSONDatasetUploadOutput extends SpeakeasyBase {
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

export class UploadDatasetImage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uploadDatasetImage" })
  @Type(() => UploadDatasetImage200ApplicationJSONDatasetUploadOutput)
  uploadDatasetImage?: UploadDatasetImage200ApplicationJSONDatasetUploadOutput;
}

export class UploadDatasetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  uploadDatasetImage200ApplicationJSONObject?: UploadDatasetImage200ApplicationJSON;
}