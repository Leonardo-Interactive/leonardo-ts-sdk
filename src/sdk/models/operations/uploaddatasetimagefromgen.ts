import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class UploadDatasetImageFromGenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class UploadDatasetImageFromGenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "generatedImageId" })
  generatedImageId: string;
}

export class UploadDatasetImageFromGenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadDatasetImageFromGenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadDatasetImageFromGenRequestBody;
}

export class UploadDatasetImageFromGen200ApplicationJSONDatasetGenUploadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class UploadDatasetImageFromGen200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uploadDatasetImageFromGen" })
  @Type(() => UploadDatasetImageFromGen200ApplicationJSONDatasetGenUploadOutput)
  uploadDatasetImageFromGen?: UploadDatasetImageFromGen200ApplicationJSONDatasetGenUploadOutput;
}

export class UploadDatasetImageFromGenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  uploadDatasetImageFromGen200ApplicationJSONObject?: UploadDatasetImageFromGen200ApplicationJSON;
}