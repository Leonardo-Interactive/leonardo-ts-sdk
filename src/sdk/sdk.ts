import * as utils from "../internal/utils";
import { Dataset } from "./dataset";
import { Generation } from "./generation";
import { InitImage } from "./initimage";
import { Model } from "./model";
import * as shared from "./models/shared";
import { User } from "./user";
import { Variation } from "./variation";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://cloud.leonardo.ai/api/rest/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}


export class Leonardo {
  public dataset: Dataset;
  public generation: Generation;
  public initImage: InitImage;
  public model: Model;
  public user: User;
  public variation: Variation;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.6.0";
  private _genVersion = "1.7.0";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.dataset = new Dataset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generation = new Generation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.initImage = new InitImage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.model = new Model(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.variation = new Variation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}