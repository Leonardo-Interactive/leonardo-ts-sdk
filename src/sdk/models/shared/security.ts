import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer;name=Authorization" })
  bearerAuth: string;
}