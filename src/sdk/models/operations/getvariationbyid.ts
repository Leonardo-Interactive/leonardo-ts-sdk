import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transformType" })
  transformType?: shared.VARIATIONTYPEEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export class GetVariationById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generated_image_variation_generic", elemType: GetVariationById200ApplicationJSONGeneratedImageVariationGeneric })
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