import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetGenerationsByUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;
}

export class GetGenerationsByUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=offset",
  })
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

// GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages
/**
 * columns and relationships of "generated_images"
 **/
export class GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric,
  })
  @Expose({ name: "generated_image_variation_generics" })
  @Type(
    () =>
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
  )
  generatedImageVariationGenerics?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "likeCount" })
  likeCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

// GetGenerationsByUserId200ApplicationJSONGenerations
/**
 * columns and relationships of "generations"
 **/
export class GetGenerationsByUserId200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages,
  })
  @Expose({ name: "generated_images" })
  @Type(
    () => GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages
  )
  generatedImages?: GetGenerationsByUserId200ApplicationJSONGenerationsGeneratedImages[];

  @SpeakeasyMetadata()
  @Expose({ name: "guidanceScale" })
  guidanceScale?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "imageHeight" })
  imageHeight?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "imageWidth" })
  imageWidth?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "inferenceSteps" })
  inferenceSteps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "initStrength" })
  initStrength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "modelId" })
  modelId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "negativePrompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "presetStyle" })
  presetStyle?: shared.SdGenerationStyleEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "public" })
  public?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "scheduler" })
  scheduler?: shared.SdGenerationSchedulersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sdVersion" })
  sdVersion?: shared.SdVersionsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "seed" })
  seed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: shared.JobStatusEnum;
}

export class GetGenerationsByUserId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetGenerationsByUserId200ApplicationJSONGenerations,
  })
  @Expose({ name: "generations" })
  @Type(() => GetGenerationsByUserId200ApplicationJSONGenerations)
  generations?: GetGenerationsByUserId200ApplicationJSONGenerations[];
}

export class GetGenerationsByUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getGenerationsByUserId200ApplicationJSONObject?: GetGenerationsByUserId200ApplicationJSON;
}
