import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteInitImageIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteInitImageIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInitImageIdPathParams;
}

export class DeleteInitImageIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInitImageId200ApplicationJSONAny?: any;
}