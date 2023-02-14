import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteDatasetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteDatasetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetsIdPathParams;
}

export class DeleteDatasetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDatasetsId200ApplicationJSONAny?: any;
}