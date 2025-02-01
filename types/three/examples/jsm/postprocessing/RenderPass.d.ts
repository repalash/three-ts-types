import {
    Scene,
    Camera,
    Material,
    Color,
    WebGLRenderTarget,
    WebGLRenderer,
} from '../../../src/Three.js';
import { Pass } from './Pass.js';

export class RenderPass extends Pass {
    constructor(
        scene?: Scene,
        camera?: Camera,
        overrideMaterial?: Material | null,
        clearColor?: Color | null,
        clearAlpha?: number | null,
    );

    scene?: Scene;
    camera?: Camera;

    overrideMaterial?: Material | null;

    clearColor?: Color | null;
    clearAlpha: number | null;
    clearDepth: boolean;

    render(
        renderer: WebGLRenderer,
        _: WebGLRenderTarget | null,
        writeBuffer?: WebGLRenderTarget,
        deltaTime?: number,
        maskActive?: boolean,
        depthBuffer?: /*WebGLRenderBuffer*/ any,
    ): void;
}
