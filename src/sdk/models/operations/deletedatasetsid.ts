import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteDatasetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteDatasetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetsIdPathParams;
}

// DeleteDatasetsId200ApplicationJSONDatasets
/** 
 * columns and relationships of "datasets"
**/
export class DeleteDatasetsId200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteDatasetsId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_datasets_by_pk" })
  deleteDatasetsByPk?: DeleteDatasetsId200ApplicationJSONDatasets;
}

export class DeleteDatasetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDatasetsId200ApplicationJSONObject?: DeleteDatasetsId200ApplicationJSON;
}