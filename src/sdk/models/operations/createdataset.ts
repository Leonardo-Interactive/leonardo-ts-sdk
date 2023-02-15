import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDatasetRequestBody;
}

// CreateDataset200ApplicationJSONDatasets
/** 
 * columns and relationships of "datasets"
**/
export class CreateDataset200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class CreateDataset200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_datasets_one" })
  insertDatasetsOne?: CreateDataset200ApplicationJSONDatasets;
}

export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDataset200ApplicationJSONObject?: CreateDataset200ApplicationJSON;
}