import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteDatasetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

// DeleteDatasetById200ApplicationJSONDatasets
/**
 * columns and relationships of "datasets"
 **/
export class DeleteDatasetById200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class DeleteDatasetById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "delete_datasets_by_pk" })
  @Type(() => DeleteDatasetById200ApplicationJSONDatasets)
  deleteDatasetsByPk?: DeleteDatasetById200ApplicationJSONDatasets;
}

export class DeleteDatasetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  deleteDatasetById200ApplicationJSONObject?: DeleteDatasetById200ApplicationJSON;
}
