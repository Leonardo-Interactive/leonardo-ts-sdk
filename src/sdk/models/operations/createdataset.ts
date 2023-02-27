import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class CreateDataset200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "insert_datasets_one" })
  @Type(() => CreateDataset200ApplicationJSONDatasets)
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