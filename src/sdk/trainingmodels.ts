import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class TrainingModels {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteModelsId - Delete a Single Custom Model by ID
   *
   * This endpoint will delete a specific custom model
  **/
  deleteModelsId(
    req: operations.DeleteModelsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteModelsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteModelsId200ApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelsId - Get a Single Custom Model by ID
   *
   * This endpoint gets the specific custom model
  **/
  getModelsId(
    req: operations.GetModelsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModelsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getModelsId200ApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postModels - Train a Custom Model
   *
   * This endpoint will train a new custom model
  **/
  postModels(
    req: operations.PostModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/models";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postModels200ApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
