import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetGenerationsByUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export class GetGenerationsByUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class GetGenerationsByUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenerationsByUserIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenerationsByUserIdQueryParams;
}

// GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
/** 
 * columns and relationships of "generated_image_variation_generic"
**/
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;

  @SpeakeasyMetadata({ data: "json, name=transformType" })
  transformType?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

// GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages
/** 
 * columns and relationships of "generated_images"
**/
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generated_image_variation_generics", elemType: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric })
  generatedImageVariationGenerics?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=likeCount" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

// GetGenerationsByUserId200ApplicationJSONGenerations
/** 
 * columns and relationships of "generations"
**/
export class GetGenerationsByUserId200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generated_images", elemType: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages })
  generatedImages?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages[];

  @SpeakeasyMetadata({ data: "json, name=guidanceScale" })
  guidanceScale?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageHeight" })
  imageHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=imageWidth" })
  imageWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=inferenceSteps" })
  inferenceSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=initStrength" })
  initStrength?: any;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=negativePrompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=presetStyle" })
  presetStyle?: any;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduler" })
  scheduler?: any;

  @SpeakeasyMetadata({ data: "json, name=sdVersion" })
  sdVersion?: any;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: any;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;
}

export class GetGenerationsByUserId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generations", elemType: GetGenerationsByUserId200ApplicationJSONGenerations })
  generations?: GetGenerationsByUserId200ApplicationJSONGenerations[];
}

export class GetGenerationsByUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGenerationsByUserId200ApplicationJSONObject?: GetGenerationsByUserId200ApplicationJSON;
}