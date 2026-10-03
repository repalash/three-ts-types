import { Camera, Color, Material, Scene, Texture, WebGLRenderer, WebGLRenderTarget } from "three";

import { Pass } from "./Pass.js";

declare class RenderPass extends Pass {
    scene?: Scene;
    camera?: Camera;

    overrideMaterial?: Material | null;

    clearColor?: Color | null;
    clearAlpha: number | null;
    clear: boolean;
    clearDepth: boolean;
    needsSwap: boolean;

    readonly isRenderPass: true;

    constructor(
        scene?: Scene,
        camera?: Camera,
        overrideMaterial?: Material | null,
        clearColor?: Color | null,
        clearAlpha?: number | null,
    );

    render(
        renderer: WebGLRenderer,
        _: WebGLRenderTarget<Texture> | null,
        writeBuffer?: WebGLRenderTarget<Texture>,
        deltaTime?: number,
        maskActive?: boolean,
        depthBuffer?: /*WebGLRenderBuffer*/ any,
    ): void;
}

export { RenderPass };
