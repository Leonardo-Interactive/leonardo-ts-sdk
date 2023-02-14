import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetGenerationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetGenerationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenerationsIdPathParams;
}

export class GetGenerationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGenerationsId200ApplicationJSONAny?: any;
}