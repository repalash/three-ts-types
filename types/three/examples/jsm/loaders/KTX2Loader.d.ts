import { LoadingManager, Loader, CompressedTexture, WebGLRenderer } from '../../../src/Three.js';
import WebGPURenderer from '../renderers/webgpu/WebGPURenderer.js';

export class KTX2Loader extends Loader<CompressedTexture> {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): this;
    setWorkerLimit(limit: number): this;
    detectSupport(renderer: WebGLRenderer | WebGPURenderer): this;
    dispose(): this;

    parse(
        buffer: ArrayBuffer,
        onLoad: (texture: CompressedTexture) => void,
        onError?: (event: ErrorEvent) => void,
    ): this;

    createTexture(buffer: ArrayBuffer, config: any): Promise<CompressedTexture>;
}
