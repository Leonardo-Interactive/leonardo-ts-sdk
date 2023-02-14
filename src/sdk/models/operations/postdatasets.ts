import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostDatasetsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class PostDatasetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDatasetsRequestBody;
}

export class PostDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDatasets200ApplicationJSONAny?: any;
}