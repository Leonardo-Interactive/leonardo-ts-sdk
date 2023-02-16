import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteDatasetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteDatasetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetByIdPathParams;
}

// DeleteDatasetById200ApplicationJSONDatasets
/** 
 * columns and relationships of "datasets"
**/
export class DeleteDatasetById200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteDatasetById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_datasets_by_pk" })
  deleteDatasetsByPk?: DeleteDatasetById200ApplicationJSONDatasets;
}

export class DeleteDatasetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDatasetById200ApplicationJSONObject?: DeleteDatasetById200ApplicationJSON;
}