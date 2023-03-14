import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateVariationUpscaleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

export class CreateVariationUpscaleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateVariationUpscaleRequestBody;
}

export class CreateVariationUpscale200ApplicationJSONSDUpscaleJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class CreateVariationUpscale200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sdUpscaleJob" })
  @Type(() => CreateVariationUpscale200ApplicationJSONSDUpscaleJobOutput)
  sdUpscaleJob?: CreateVariationUpscale200ApplicationJSONSDUpscaleJobOutput;
}

export class CreateVariationUpscaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createVariationUpscale200ApplicationJSONObject?: CreateVariationUpscale200ApplicationJSON;
}
