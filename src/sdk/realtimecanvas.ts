/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";

export class RealtimeCanvas extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create LCM Generation
     *
     * @remarks
     * This endpoint will generate a LCM image generation.
     */
    async createLCMGeneration(
        request?: operations.CreateLCMGenerationRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateLCMGenerationResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.CreateLCMGenerationRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/generations-lcm")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createLCMGeneration",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreateLCMGenerationResponse>()
            .json(200, operations.CreateLCMGenerationResponse$inboundSchema, { key: "object" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Perform Alchemy Upscale on a LCM image
     *
     * @remarks
     * This endpoint will perform Alchemy Upscale on a LCM image
     */
    async performAlchemyUpscaleLCM(
        request?: operations.PerformAlchemyUpscaleLCMRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PerformAlchemyUpscaleLCMResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PerformAlchemyUpscaleLCMRequestBody$outboundSchema.optional().parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/lcm-upscale")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "performAlchemyUpscaleLCM",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PerformAlchemyUpscaleLCMResponse>()
            .json(200, operations.PerformAlchemyUpscaleLCMResponse$inboundSchema, { key: "object" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Perform inpainting on a LCM image
     *
     * @remarks
     * This endpoint will perform a inpainting on a LCM image
     */
    async performInpaintingLCM(
        request?: operations.PerformInpaintingLCMRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PerformInpaintingLCMResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PerformInpaintingLCMRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/lcm-inpainting")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "performInpaintingLCM",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PerformInpaintingLCMResponse>()
            .json(200, operations.PerformInpaintingLCMResponse$inboundSchema, { key: "object" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Perform instant refine on a LCM image
     *
     * @remarks
     * This endpoint will perform instant refine on a LCM image
     */
    async performInstantRefine(
        request?: operations.PerformInstantRefineRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PerformInstantRefineResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PerformInstantRefineRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/lcm-instant-refine")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "performInstantRefine",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PerformInstantRefineResponse>()
            .json(200, operations.PerformInstantRefineResponse$inboundSchema, { key: "object" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
