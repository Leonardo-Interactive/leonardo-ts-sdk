import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetGenerationsUserUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export class GetGenerationsUserUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class GetGenerationsUserUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenerationsUserUserIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenerationsUserUserIdQueryParams;
}

export class GetGenerationsUserUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGenerationsUserUserId200ApplicationJSONAny?: any;
}