import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetVariationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetVariationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariationsIdPathParams;
}

export class GetVariationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVariationsId200ApplicationJSONAny?: any;
}