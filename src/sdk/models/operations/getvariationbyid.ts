import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class GetVariationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetVariationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariationByIdPathParams;
}

// GetVariationById200ApplicationJSONGeneratedImageVariationGeneric
/** 
 * columns and relationships of "generated_image_variation_generic"
**/
export class GetVariationById200ApplicationJSONGeneratedImageVariationGeneric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: shared.JobStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "transformType" })
  transformType?: shared.VARIATIONTYPEEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class GetVariationById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetVariationById200ApplicationJSONGeneratedImageVariationGeneric })
  @Expose({ name: "generated_image_variation_generic" })
  @Type(() => GetVariationById200ApplicationJSONGeneratedImageVariationGeneric)
  generatedImageVariationGeneric?: GetVariationById200ApplicationJSONGeneratedImageVariationGeneric[];
}

export class GetVariationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVariationById200ApplicationJSONObject?: GetVariationById200ApplicationJSON;
}