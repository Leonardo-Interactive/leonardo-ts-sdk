import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// GetUserSelf200ApplicationJSONUserDetailsUsers
/** 
 * columns and relationships of "users"
**/
export class GetUserSelf200ApplicationJSONUserDetailsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

// GetUserSelf200ApplicationJSONUserDetails
/** 
 * columns and relationships of "user_details"
**/
export class GetUserSelf200ApplicationJSONUserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=showNsfw" })
  showNsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: GetUserSelf200ApplicationJSONUserDetailsUsers;
}

export class GetUserSelf200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user_details", elemType: GetUserSelf200ApplicationJSONUserDetails })
  userDetails?: GetUserSelf200ApplicationJSONUserDetails[];
}

export class GetUserSelfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserSelf200ApplicationJSONObject?: GetUserSelf200ApplicationJSON;
}