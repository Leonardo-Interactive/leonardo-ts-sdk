import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteInitImageIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DeleteInitImageIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInitImageIdPathParams;
}

// DeleteInitImageId200ApplicationJSONInitImages
/** 
 * columns and relationships of "init_images"
**/
export class DeleteInitImageId200ApplicationJSONInitImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class DeleteInitImageId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_init_images_by_pk" })
  deleteInitImagesByPk?: DeleteInitImageId200ApplicationJSONInitImages;
}

export class DeleteInitImageIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInitImageId200ApplicationJSONObject?: DeleteInitImageId200ApplicationJSON;
}