import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteModelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteModelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModelsIdPathParams;
}

// DeleteModelsId200ApplicationJSONCustomModels
/** 
 * columns and relationships of "custom_models"
**/
export class DeleteModelsId200ApplicationJSONCustomModels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteModelsId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_custom_models_by_pk" })
  deleteCustomModelsByPk?: DeleteModelsId200ApplicationJSONCustomModels;
}

export class DeleteModelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteModelsId200ApplicationJSONObject?: DeleteModelsId200ApplicationJSON;
}