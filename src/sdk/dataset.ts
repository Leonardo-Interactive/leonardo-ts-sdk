import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Dataset {
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
   * createDataset - Create a Dataset
   *
   * This endpoint creates a new dataset
  **/
  createDataset(
    req: operations.CreateDatasetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDatasetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDatasetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/datasets";

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
        const res: operations.CreateDatasetResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createDataset200ApplicationJSONObject = plainToInstance(
                operations.CreateDataset200ApplicationJSON,
                httpRes?.data as operations.CreateDataset200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteDatasetById - Delete a Single Dataset by ID
   *
   * This endpoint deletes the specific dataset
  **/
  deleteDatasetById(
    req: operations.DeleteDatasetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDatasetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDatasetByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/datasets/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDatasetByIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteDatasetById200ApplicationJSONObject = plainToInstance(
                operations.DeleteDatasetById200ApplicationJSON,
                httpRes?.data as operations.DeleteDatasetById200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDatasetById - Get a Single Dataset by ID
   *
   * This endpoint gets the specific dataset
  **/
  getDatasetById(
    req: operations.GetDatasetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDatasetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDatasetByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/datasets/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDatasetByIdResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getDatasetById200ApplicationJSONObject = plainToInstance(
                operations.GetDatasetById200ApplicationJSON,
                httpRes?.data as operations.GetDatasetById200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * uploadDatasetImage - Upload dataset image
   *
   * This endpoint returns presigned details to upload a dataset image to S3
  **/
  uploadDatasetImage(
    req: operations.UploadDatasetImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadDatasetImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadDatasetImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/datasets/{datasetId}/upload", req.pathParams);

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
        const res: operations.UploadDatasetImageResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.uploadDatasetImage200ApplicationJSONObject = plainToInstance(
                operations.UploadDatasetImage200ApplicationJSON,
                httpRes?.data as operations.UploadDatasetImage200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * uploadDatasetImageFromGen - Upload a Single Generated Image to a Dataset
   *
   * This endpoint will upload a previously generated image to the dataset
  **/
  uploadDatasetImageFromGen(
    req: operations.UploadDatasetImageFromGenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadDatasetImageFromGenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadDatasetImageFromGenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/datasets/{datasetId}/upload/gen", req.pathParams);

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
        const res: operations.UploadDatasetImageFromGenResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.uploadDatasetImageFromGen200ApplicationJSONObject = plainToInstance(
                operations.UploadDatasetImageFromGen200ApplicationJSON,
                httpRes?.data as operations.UploadDatasetImageFromGen200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
