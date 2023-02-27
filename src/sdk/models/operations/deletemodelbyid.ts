import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class DeleteModelById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "delete_custom_models_by_pk" })
  @Type(() => DeleteModelById200ApplicationJSONCustomModels)
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