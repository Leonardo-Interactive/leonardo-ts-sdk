import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteGenerationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteGenerationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGenerationsIdPathParams;
}

// DeleteGenerationsId200ApplicationJSONGenerations
/** 
 * columns and relationships of "generations"
**/
export class DeleteGenerationsId200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteGenerationsId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_generations_by_pk" })
  deleteGenerationsByPk?: DeleteGenerationsId200ApplicationJSONGenerations;
}

export class DeleteGenerationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGenerationsId200ApplicationJSONObject?: DeleteGenerationsId200ApplicationJSON;
}