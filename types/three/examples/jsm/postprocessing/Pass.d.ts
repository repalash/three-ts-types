import { Material, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from '../../../src/Three.js';

export class Pass {
    constructor();

    isPass: boolean;
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    renderToScreen: boolean;

    setSize(width: number, height: number): void;
    render(
        renderer: WebGLRenderer,
        writeBuffer: WebGLMultipleRenderTargets | WebGLRenderTarget | null,
        readBuffer?: WebGLMultipleRenderTargets | WebGLRenderTarget,
        deltaTime?: number,
        maskActive?: boolean,
    ): void;

    dispose(): void;
}

export class FullScreenQuad {
    constructor(material?: Material);

    render(renderer: WebGLRenderer): void;
    dispose(): void;

    material: Material;
}
