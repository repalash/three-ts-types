/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

import {
    WebGLRenderer,
    WebGLRenderTarget,
    TextureDataType,
    DataTexture,
    WebGLMultipleRenderTargets,
} from '../../../src/Three';

export const NO_COMPRESSION: 0;
export const ZIPS_COMPRESSION: 2;
export const ZIP_COMPRESSION: 3;

export interface EXRExporterParseOptions {
    compression?: number;
    type?: TextureDataType;
    /**
     * For WebGLMultipleRenderTargets only
     */
    textureIndex?: number;
}

export class EXRExporter {
    parse(
        renderer: WebGLRenderer,
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets,
        options?: EXRExporterParseOptions,
    ): Uint8Array;
    parse(
        renderer: WebGLRenderer | undefined,
        renderTarget: DataTexture,
        options?: EXRExporterParseOptions,
    ): Uint8Array;
}
