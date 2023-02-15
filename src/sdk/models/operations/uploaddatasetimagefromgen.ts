import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadDatasetImageFromGenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class UploadDatasetImageFromGenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedImageId" })
  generatedImageId: string;
}

export class UploadDatasetImageFromGenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadDatasetImageFromGenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadDatasetImageFromGenRequestBody;
}

export class UploadDatasetImageFromGen200ApplicationJSONDatasetGenUploadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class UploadDatasetImageFromGen200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadDatasetImageFromGen" })
  uploadDatasetImageFromGen?: UploadDatasetImageFromGen200ApplicationJSONDatasetGenUploadOutput;
}

export class UploadDatasetImageFromGenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadDatasetImageFromGen200ApplicationJSONObject?: UploadDatasetImageFromGen200ApplicationJSON;
}