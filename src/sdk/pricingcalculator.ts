/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";

export class PricingCalculator extends ClientSDK {
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
     * Calculating API Cost
     *
     * @remarks
     * This endpoint returns the cost used for generating images using a particular service type.
     */
    async pricingCalculator(
        request?: operations.PricingCalculatorRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PricingCalculatorResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PricingCalculatorRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/pricing-calculator")();

        const query$ = "";

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "pricingCalculator",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: [] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PricingCalculatorResponse>()
            .json(200, operations.PricingCalculatorResponse$, { key: "object" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
