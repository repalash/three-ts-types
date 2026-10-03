import { JSONMeta, Object3D, Object3DEventMap, Object3DJSON } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";
import { LightShadow } from "./LightShadow.js";

export interface LightJSON extends Object3DJSON {
    color: number;
    intensity: number;
}

export interface LightEventMap extends Object3DEventMap {
    dispose: {};
}

/**
 * Abstract base class for lights - all other light types inherit the
 * properties and methods described here.
 */
export abstract class Light<
    TShadowSupport extends LightShadow | undefined = LightShadow | undefined,
    TEventMap extends LightEventMap = LightEventMap,
> extends Object3D<TEventMap> {
    /**
     * Constructs a new light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity.
     */
    constructor(color?: ColorRepresentation, intensity?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isLight: boolean;
    /**
     * The light's shadow, on lights that support shadows (three-modded keeps the TShadowSupport generic).
     */
    shadow: TShadowSupport;
    /**
     * The light's color.
     */
    color: Color;
    /**
     * The light's intensity.
     *
     * @default 1
     */
    intensity: number;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
    copy(source: Light, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): LightJSON;
}
