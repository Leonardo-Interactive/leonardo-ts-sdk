import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Model {
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
   * createModel - Train a Custom Model
   *
   * This endpoint will train a new custom model
  **/
  createModel(
    req: operations.CreateModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModelRequest(req);
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
        const res: operations.CreateModelResponse =
            new operations.CreateModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createModel200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateModel200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteModelById - Delete a Single Custom Model by ID
   *
   * This endpoint will delete a specific custom model
  **/
  deleteModelById(
    req: operations.DeleteModelByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelByIdRequest(req);
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
        const res: operations.DeleteModelByIdResponse =
            new operations.DeleteModelByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteModelById200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteModelById200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelById - Get a Single Custom Model by ID
   *
   * This endpoint gets the specific custom model
  **/
  getModelById(
    req: operations.GetModelByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelByIdRequest(req);
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
        const res: operations.GetModelByIdResponse =
            new operations.GetModelByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getModelById200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetModelById200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
