import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetInitImageByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetInitImageByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInitImageByIdPathParams;
}

// GetInitImageById200ApplicationJSONInitImages
/** 
 * columns and relationships of "init_images"
**/
export class GetInitImageById200ApplicationJSONInitImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export class GetInitImageById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=init_images_by_pk" })
  initImagesByPk?: GetInitImageById200ApplicationJSONInitImages;
}

export class GetInitImageByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInitImageById200ApplicationJSONObject?: GetInitImageById200ApplicationJSON;
}