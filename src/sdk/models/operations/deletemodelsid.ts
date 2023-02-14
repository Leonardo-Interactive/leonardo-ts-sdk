import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteModelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteModelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModelsIdPathParams;
}

export class DeleteModelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteModelsId200ApplicationJSONAny?: any;
}