import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteModelByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteModelByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModelByIdPathParams;
}

// DeleteModelById200ApplicationJSONCustomModels
/** 
 * columns and relationships of "custom_models"
**/
export class DeleteModelById200ApplicationJSONCustomModels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteModelById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_custom_models_by_pk" })
  deleteCustomModelsByPk?: DeleteModelById200ApplicationJSONCustomModels;
}

export class DeleteModelByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteModelById200ApplicationJSONObject?: DeleteModelById200ApplicationJSON;
}