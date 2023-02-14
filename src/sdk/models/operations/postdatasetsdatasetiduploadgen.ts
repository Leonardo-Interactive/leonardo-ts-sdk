import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostDatasetsDatasetIdUploadGenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class PostDatasetsDatasetIdUploadGenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedImageId" })
  generatedImageId: string;
}

export class PostDatasetsDatasetIdUploadGenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDatasetsDatasetIdUploadGenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDatasetsDatasetIdUploadGenRequestBody;
}

export class PostDatasetsDatasetIdUploadGenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDatasetsDatasetIdUploadGen200ApplicationJSONAny?: any;
}