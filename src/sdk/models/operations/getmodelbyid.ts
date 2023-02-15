import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetModelByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetModelByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetModelByIdPathParams;
}

// GetModelById200ApplicationJSONCustomModels
/** 
 * columns and relationships of "custom_models"
**/
export class GetModelById200ApplicationJSONCustomModels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instancePrompt" })
  instancePrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=modelHeight" })
  modelHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=modelWidth" })
  modelWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sdVersion" })
  sdVersion?: any;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: any;
}

export class GetModelById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_models_by_pk" })
  customModelsByPk?: GetModelById200ApplicationJSONCustomModels;
}

export class GetModelByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getModelById200ApplicationJSONObject?: GetModelById200ApplicationJSON;
}