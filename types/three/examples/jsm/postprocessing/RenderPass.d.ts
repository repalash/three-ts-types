import { Camera, Color, Material, Scene, Texture, WebGLRenderer, WebGLRenderTarget } from '../../../src/Three.js';
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
        _: WebGLRenderTarget<Texture | Texture[]> | null,
        writeBuffer?: WebGLRenderTarget<Texture | Texture[]>,
        deltaTime?: number,
        maskActive?: boolean,
        depthBuffer?: /*WebGLRenderBuffer*/ any,
    ): void;
}
