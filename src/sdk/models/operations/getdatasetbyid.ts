import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetDatasetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

// GetDatasetById200ApplicationJSONDatasetsDatasetImages
/**
 * columns and relationships of "dataset_images"
 **/
export class GetDatasetById200ApplicationJSONDatasetsDatasetImages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

// GetDatasetById200ApplicationJSONDatasets
/**
 * columns and relationships of "datasets"
 **/
export class GetDatasetById200ApplicationJSONDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({
    elemType: GetDatasetById200ApplicationJSONDatasetsDatasetImages,
  })
  @Expose({ name: "dataset_images" })
  @Type(() => GetDatasetById200ApplicationJSONDatasetsDatasetImages)
  datasetImages?: GetDatasetById200ApplicationJSONDatasetsDatasetImages[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt?: string;
}

export class GetDatasetById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datasets_by_pk" })
  @Type(() => GetDatasetById200ApplicationJSONDatasets)
  datasetsByPk?: GetDatasetById200ApplicationJSONDatasets;
}

export class GetDatasetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getDatasetById200ApplicationJSONObject?: GetDatasetById200ApplicationJSON;
}
