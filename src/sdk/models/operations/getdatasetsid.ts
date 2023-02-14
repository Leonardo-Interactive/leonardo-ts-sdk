import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDatasetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetDatasetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetsIdPathParams;
}

export class GetDatasetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDatasetsId200ApplicationJSONAny?: any;
}