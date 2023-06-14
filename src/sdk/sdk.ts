/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Dataset } from "./dataset";
import { Generation } from "./generation";
import { InitImage } from "./initimage";
import { Model } from "./model";
import * as shared from "./models/shared";
import { User } from "./user";
import { Variation } from "./variation";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Leonardo.Ai API server
     */
    "https://cloud.leonardo.ai/api/rest/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.0";
    sdkVersion = "1.40.0";
    genVersion = "2.40.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Rest Endpoints: Leonardo.Ai API OpenAPI specification.
 */
export class Leonardo {
    public dataset: Dataset;
    public generation: Generation;
    public initImage: InitImage;
    public model: Model;
    public user: User;
    public variation: Variation;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.dataset = new Dataset(this.sdkConfiguration);
        this.generation = new Generation(this.sdkConfiguration);
        this.initImage = new InitImage(this.sdkConfiguration);
        this.model = new Model(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.variation = new Variation(this.sdkConfiguration);
    }
}
