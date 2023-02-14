import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetModelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetModelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetModelsIdPathParams;
}

export class GetModelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getModelsId200ApplicationJSONAny?: any;
}