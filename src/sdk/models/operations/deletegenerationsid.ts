import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteGenerationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteGenerationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGenerationsIdPathParams;
}

export class DeleteGenerationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGenerationsId200ApplicationJSONAny?: any;
}