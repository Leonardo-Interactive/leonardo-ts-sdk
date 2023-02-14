import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostDatasetsDatasetIdUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class PostDatasetsDatasetIdUploadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;
}

export class PostDatasetsDatasetIdUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDatasetsDatasetIdUploadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDatasetsDatasetIdUploadRequestBody;
}

export class PostDatasetsDatasetIdUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDatasetsDatasetIdUpload200ApplicationJSONAny?: any;
}