import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetModelByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

// GetModelById200ApplicationJSONCustomModels
/**
 * columns and relationships of "custom_models"
 **/
export class GetModelById200ApplicationJSONCustomModels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instancePrompt" })
  instancePrompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modelHeight" })
  modelHeight?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "modelWidth" })
  modelWidth?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "public" })
  public?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sdVersion" })
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: shared.JobStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: shared.CustomModelTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt?: string;
}

export class GetModelById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "custom_models_by_pk" })
  @Type(() => GetModelById200ApplicationJSONCustomModels)
  customModelsByPk?: GetModelById200ApplicationJSONCustomModels;
}

export class GetModelByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getModelById200ApplicationJSONObject?: GetModelById200ApplicationJSON;
}
