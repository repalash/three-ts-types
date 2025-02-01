import {
    Scene,
    Camera,
    Material,
    Color,
    WebGLMultipleRenderTargets,
    WebGLRenderTarget,
    WebGLRenderer,
} from '../../../src/Three.js';
import { Pass } from './Pass.js';

export class RenderPass extends Pass {
    constructor(scene?: Scene, camera?: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
    scene?: Scene;
    camera?: Camera;
    overrideMaterial?: Material;
    clearColor?: Color;
    clearAlpha: number;
    clearDepth: boolean;

    render(
        renderer: WebGLRenderer,
        _: WebGLMultipleRenderTargets | WebGLRenderTarget | null,
        writeBuffer?: WebGLMultipleRenderTargets | WebGLRenderTarget,
        deltaTime?: number,
        maskActive?: boolean,
        depthBuffer?: /*WebGLRenderBuffer*/ any,
    ): void;
}
