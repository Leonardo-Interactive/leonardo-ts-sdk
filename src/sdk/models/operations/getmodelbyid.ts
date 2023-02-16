import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  createdAt?: string;

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
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.CustomModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
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