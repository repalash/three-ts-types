import { LoadingManager, CompressedTextureLoader, CompressedTexture, WebGLRenderer } from '../../../src/Three';

export class KTX2Loader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): this;
    setWorkerLimit(limit: number): this;
    detectSupport(renderer: WebGLRenderer): this;
    dispose(): this;

    createTexture(buffer: ArrayBuffer, config: any): Promise<CompressedTexture>;
}
