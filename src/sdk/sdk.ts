/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Dataset } from "./dataset.js";
import { Elements } from "./elements.js";
import { Image } from "./image.js";
import { InitImages } from "./initimages.js";
import { Models } from "./models.js";
import { Motion } from "./motion.js";
import { PricingCalculator } from "./pricingcalculator.js";
import { Prompt } from "./prompt.js";
import { RealtimeCanvas } from "./realtimecanvas.js";
import { Texture } from "./texture.js";
import { ThreeDModelAssets } from "./threedmodelassets.js";
import { User } from "./user.js";
import { Variation } from "./variation.js";

export class Leonardo extends ClientSDK {
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

    private _initImages?: InitImages;
    get initImages(): InitImages {
        return (this._initImages ??= new InitImages(this.options$));
    }

    private _dataset?: Dataset;
    get dataset(): Dataset {
        return (this._dataset ??= new Dataset(this.options$));
    }

    private _elements?: Elements;
    get elements(): Elements {
        return (this._elements ??= new Elements(this.options$));
    }

    private _image?: Image;
    get image(): Image {
        return (this._image ??= new Image(this.options$));
    }

    private _realtimeCanvas?: RealtimeCanvas;
    get realtimeCanvas(): RealtimeCanvas {
        return (this._realtimeCanvas ??= new RealtimeCanvas(this.options$));
    }

    private _motion?: Motion;
    get motion(): Motion {
        return (this._motion ??= new Motion(this.options$));
    }

    private _texture?: Texture;
    get texture(): Texture {
        return (this._texture ??= new Texture(this.options$));
    }

    private _user?: User;
    get user(): User {
        return (this._user ??= new User(this.options$));
    }

    private _models?: Models;
    get models(): Models {
        return (this._models ??= new Models(this.options$));
    }

    private _threeDModelAssets?: ThreeDModelAssets;
    get threeDModelAssets(): ThreeDModelAssets {
        return (this._threeDModelAssets ??= new ThreeDModelAssets(this.options$));
    }

    private _pricingCalculator?: PricingCalculator;
    get pricingCalculator(): PricingCalculator {
        return (this._pricingCalculator ??= new PricingCalculator(this.options$));
    }

    private _prompt?: Prompt;
    get prompt(): Prompt {
        return (this._prompt ??= new Prompt(this.options$));
    }

    private _variation?: Variation;
    get variation(): Variation {
        return (this._variation ??= new Variation(this.options$));
    }
}
