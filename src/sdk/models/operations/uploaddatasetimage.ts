import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadDatasetImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class UploadDatasetImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;
}

export class UploadDatasetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadDatasetImagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadDatasetImageRequestBody;
}

export class UploadDatasetImage200ApplicationJSONDatasetUploadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export class UploadDatasetImage200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadDatasetImage" })
  uploadDatasetImage?: UploadDatasetImage200ApplicationJSONDatasetUploadOutput;
}

export class UploadDatasetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadDatasetImage200ApplicationJSONObject?: UploadDatasetImage200ApplicationJSON;
}