import {
    ColorSpace,
    MagnificationTextureFilter,
    MinificationTextureFilter,
    PixelFormatGPU,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { Vector4 } from "../math/Vector4.js";
import { DepthTexture } from "../textures/DepthTexture.js";
import { Texture } from "../textures/Texture.js";
import { EventDispatcher } from "./EventDispatcher.js";

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
    samples?: number | undefined;
    count?: number | undefined;
}

export class RenderTarget<TTexture extends Texture = Texture> extends EventDispatcher<{ dispose: {} }> {
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
    textures: TTexture[];

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

    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    get texture(): TTexture;
    set texture(value: TTexture);

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: RenderTarget): this;
    dispose(): void;
}
