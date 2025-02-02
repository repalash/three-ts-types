import { Vector4 } from '../math/Vector4.js';
import { Texture } from '../textures/Texture.js';
import { DepthTexture } from '../textures/DepthTexture.js';
import { EventDispatcher } from './EventDispatcher.js';
import {
    ColorSpace,
    MagnificationTextureFilter,
    MinificationTextureFilter,
    PixelFormatGPU,
    TextureDataType,
    TextureEncoding,
    Wrapping,
} from '../constants.js';

// these shouldn't be undefined. can be not defined
export interface RenderTargetOptions {
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: MagnificationTextureFilter;
    minFilter?: MinificationTextureFilter;
    generateMipmaps?: boolean; // true;
    format?: number; // RGBAFormat;
    type?: TextureDataType; // UnsignedByteType;
    anisotropy?: number; // 1;
    colorSpace?: ColorSpace;
    internalFormat?: PixelFormatGPU | null;
    depthBuffer?: boolean; // true;
    stencilBuffer?: boolean; // false;
    depthTexture?: DepthTexture | null;
    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number;
    /** @deprecated Use 'colorSpace' in three.js r152+. */
    encoding?: TextureEncoding;
}

export class RenderTarget<TTexture extends Texture | Texture[] = Texture> extends EventDispatcher<{ dispose: {} }> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isRenderTarget: true;

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: TTexture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: RenderTarget): this;
    dispose(): void;
}
