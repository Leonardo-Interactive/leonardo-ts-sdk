import * as utils from "../internal/utils";
import { CreatingDatasets } from "./creatingdatasets";
import { GeneratingImages } from "./generatingimages";
import { ImageVariations } from "./imagevariations";
import { InitImages } from "./initimages";
import { Security } from "./models/shared";
import { TrainingModels } from "./trainingmodels";
import { UserInformation } from "./userinformation";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://cloud.leonardo.ai/api/rest/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class Leonardo {
  public creatingDatasets: CreatingDatasets;
  public generatingImages: GeneratingImages;
  public imageVariations: ImageVariations;
  public initImages: InitImages;
  public trainingModels: TrainingModels;
  public userInformation: UserInformation;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.1.1";
  private _genVersion = "1.3.1";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.creatingDatasets = new CreatingDatasets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generatingImages = new GeneratingImages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imageVariations = new ImageVariations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.initImages = new InitImages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trainingModels = new TrainingModels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userInformation = new UserInformation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}