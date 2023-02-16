import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteGenerationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteGenerationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGenerationByIdPathParams;
}

// DeleteGenerationById200ApplicationJSONGenerations
/** 
 * columns and relationships of "generations"
**/
export class DeleteGenerationById200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteGenerationById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_generations_by_pk" })
  deleteGenerationsByPk?: DeleteGenerationById200ApplicationJSONGenerations;
}

export class DeleteGenerationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGenerationById200ApplicationJSONObject?: DeleteGenerationById200ApplicationJSON;
}