import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetGenerationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetGenerationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenerationByIdPathParams;
}

// GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
/** 
 * columns and relationships of "generated_image_variation_generic"
**/
export class GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transformType" })
  transformType?: shared.VARIATIONTYPEEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

// GetGenerationById200ApplicationJSONGenerationsGeneratedImages
/** 
 * columns and relationships of "generated_images"
**/
export class GetGenerationById200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generated_image_variation_generics", elemType: GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric })
  generatedImageVariationGenerics?: GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=likeCount" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

// GetGenerationById200ApplicationJSONGenerations
/** 
 * columns and relationships of "generations"
**/
export class GetGenerationById200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generated_images", elemType: GetGenerationById200ApplicationJSONGenerationsGeneratedImages })
  generatedImages?: GetGenerationById200ApplicationJSONGenerationsGeneratedImages[];

  @SpeakeasyMetadata({ data: "json, name=guidanceScale" })
  guidanceScale?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageHeight" })
  imageHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=imageWidth" })
  imageWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=inferenceSteps" })
  inferenceSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=initStrength" })
  initStrength?: number;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=negativePrompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=presetStyle" })
  presetStyle?: shared.SdGenerationStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduler" })
  scheduler?: shared.SdGenerationSchedulersEnum;

  @SpeakeasyMetadata({ data: "json, name=sdVersion" })
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: shared.JobStatusEnum;
}

export class GetGenerationById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generations_by_pk" })
  generationsByPk?: GetGenerationById200ApplicationJSONGenerations;
}

export class GetGenerationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGenerationById200ApplicationJSONObject?: GetGenerationById200ApplicationJSON;
}