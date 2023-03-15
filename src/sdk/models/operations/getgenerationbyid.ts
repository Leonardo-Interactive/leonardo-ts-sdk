import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetGenerationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

// GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
/**
 * columns and relationships of "generated_image_variation_generic"
 **/
export class GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric extends SpeakeasyBase {
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

// GetGenerationById200ApplicationJSONGenerationsGeneratedImages
/**
 * columns and relationships of "generated_images"
 **/
export class GetGenerationById200ApplicationJSONGenerationsGeneratedImages extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric,
  })
  @Expose({ name: "generated_image_variation_generics" })
  @Type(
    () =>
      GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric
  )
  generatedImageVariationGenerics?: GetGenerationById200ApplicationJSONGenerationsGeneratedImagesGeneratedImageVariationGeneric[];

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

// GetGenerationById200ApplicationJSONGenerations
/**
 * columns and relationships of "generations"
 **/
export class GetGenerationById200ApplicationJSONGenerations extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetGenerationById200ApplicationJSONGenerationsGeneratedImages,
  })
  @Expose({ name: "generated_images" })
  @Type(() => GetGenerationById200ApplicationJSONGenerationsGeneratedImages)
  generatedImages?: GetGenerationById200ApplicationJSONGenerationsGeneratedImages[];

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

export class GetGenerationById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "generations_by_pk" })
  @Type(() => GetGenerationById200ApplicationJSONGenerations)
  generationsByPk?: GetGenerationById200ApplicationJSONGenerations;
}

export class GetGenerationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getGenerationById200ApplicationJSONObject?: GetGenerationById200ApplicationJSON;
}
