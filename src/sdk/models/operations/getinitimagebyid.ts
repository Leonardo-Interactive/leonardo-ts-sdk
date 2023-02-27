import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


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

export class GetInitImageById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "init_images_by_pk" })
  @Type(() => GetInitImageById200ApplicationJSONInitImages)
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