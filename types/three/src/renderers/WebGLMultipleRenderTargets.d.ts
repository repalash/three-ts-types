import { EventDispatcher } from '../core/EventDispatcher';
import { Texture } from '../textures/Texture';
import { WebGLRenderTargetOptions } from './WebGLRenderTarget';
import { Vector4 } from '../math/Vector4';
import { DepthTexture } from '../textures/DepthTexture';

/**
 * This class original extended WebGLMultipleRenderTarget
 * However, there are some issues with this method as documented below
 */
export class WebGLMultipleRenderTargets extends EventDispatcher {
    texture: Texture[];

    readonly isWebGLMultipleRenderTargets = true;
    readonly isWebGLRenderTarget = true;

    /**
     * @param width The width of the render target.
     * @param height The height of the render target.
     * @param count The number of render targets.
     * @param options object that holds texture parameters for an auto-generated target texture and depthBuffer/stencilBuffer booleans.
     * For an explanation of the texture parameters see {@link Texture}.
     */
    constructor(width?: number, height?: number, count?: number, options?: WebGLRenderTargetOptions);

    setSize(width: number, height: number, depth?: number): this;
    copy(source: WebGLMultipleRenderTargets): this;
    clone(): this;
    dispose(): void;

    width: number;
    height: number;
    depth: number;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
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
}
