import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


// GetUserSelf200ApplicationJSONUserDetailsUsers
/** 
 * columns and relationships of "users"
**/
export class GetUserSelf200ApplicationJSONUserDetailsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username?: string;
}

// GetUserSelf200ApplicationJSONUserDetails
/** 
 * columns and relationships of "user_details"
**/
export class GetUserSelf200ApplicationJSONUserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "showNsfw" })
  showNsfw?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => GetUserSelf200ApplicationJSONUserDetailsUsers)
  user?: GetUserSelf200ApplicationJSONUserDetailsUsers;
}

export class GetUserSelf200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetUserSelf200ApplicationJSONUserDetails })
  @Expose({ name: "user_details" })
  @Type(() => GetUserSelf200ApplicationJSONUserDetails)
  userDetails?: GetUserSelf200ApplicationJSONUserDetails[];
}

export class GetUserSelfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getUserSelf200ApplicationJSONObject?: GetUserSelf200ApplicationJSON;
}