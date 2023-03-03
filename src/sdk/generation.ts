import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Generation {
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
   * createGeneration - Create a Generation of Images
   *
   * This endpoint will generate images
  **/
  createGeneration(
    req: operations.CreateGenerationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateGenerationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateGenerationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/generations";

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
        const res: operations.CreateGenerationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createGeneration200ApplicationJSONObject = plainToInstance(
                operations.CreateGeneration200ApplicationJSON,
                httpRes?.data as operations.CreateGeneration200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteGenerationById - Delete a Single Generation
   *
   * This endpoint deletes a specific generation
  **/
  deleteGenerationById(
    req: operations.DeleteGenerationByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteGenerationByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteGenerationByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/generations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteGenerationByIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteGenerationById200ApplicationJSONObject = plainToInstance(
                operations.DeleteGenerationById200ApplicationJSON,
                httpRes?.data as operations.DeleteGenerationById200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenerationById - Get a Single Generation
   *
   * This endpoint will provide information about a specific generation
  **/
  getGenerationById(
    req: operations.GetGenerationByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenerationByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenerationByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/generations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGenerationByIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getGenerationById200ApplicationJSONObject = plainToInstance(
                operations.GetGenerationById200ApplicationJSON,
                httpRes?.data as operations.GetGenerationById200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenerationsByUserId - Get generations by user ID
   *
   * This endpoint returns all generations by a specific user
  **/
  getGenerationsByUserId(
    req: operations.GetGenerationsByUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenerationsByUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenerationsByUserIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/generations/user/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGenerationsByUserIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getGenerationsByUserId200ApplicationJSONObject = plainToInstance(
                operations.GetGenerationsByUserId200ApplicationJSON,
                httpRes?.data as operations.GetGenerationsByUserId200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
