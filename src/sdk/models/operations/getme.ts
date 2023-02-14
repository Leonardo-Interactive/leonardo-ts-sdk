import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMe200ApplicationJSONAny?: any;
}