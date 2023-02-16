import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteInitImageByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteInitImageByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInitImageByIdPathParams;
}

// DeleteInitImageById200ApplicationJSONInitImages
/** 
 * columns and relationships of "init_images"
**/
export class DeleteInitImageById200ApplicationJSONInitImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteInitImageById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_init_images_by_pk" })
  deleteInitImagesByPk?: DeleteInitImageById200ApplicationJSONInitImages;
}

export class DeleteInitImageByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInitImageById200ApplicationJSONObject?: DeleteInitImageById200ApplicationJSON;
}