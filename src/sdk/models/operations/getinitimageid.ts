import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetInitImageIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetInitImageIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInitImageIdPathParams;
}

export class GetInitImageIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInitImageId200ApplicationJSONAny?: any;
}