import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDatasetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetDatasetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetByIdPathParams;
}

// GetDatasetById200ApplicationJSONDatasetsDatasetImages
/** 
 * columns and relationships of "dataset_images"
**/
export class GetDatasetById200ApplicationJSONDatasetsDatasetImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

// GetDatasetById200ApplicationJSONDatasets
/** 
 * columns and relationships of "datasets"
**/
export class GetDatasetById200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: any;

  @SpeakeasyMetadata({ data: "json, name=dataset_images", elemType: GetDatasetById200ApplicationJSONDatasetsDatasetImages })
  datasetImages?: GetDatasetById200ApplicationJSONDatasetsDatasetImages[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: any;
}

export class GetDatasetById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets_by_pk" })
  datasetsByPk?: GetDatasetById200ApplicationJSONDatasets;
}

export class GetDatasetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDatasetById200ApplicationJSONObject?: GetDatasetById200ApplicationJSON;
}