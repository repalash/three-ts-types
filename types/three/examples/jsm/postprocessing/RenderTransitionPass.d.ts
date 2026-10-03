import { Camera, Object3D, ShaderMaterial, Texture, WebGLRenderer, WebGLRenderTarget } from "three";
import { FullScreenQuad, Pass } from "./Pass.js";

export class RenderTransitionPass extends Pass {
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings still say fsQuad)

    sceneA: Object3D;
    cameraA: Camera;
    sceneB: Object3D;
    cameraB: Camera;

    renderTargetA: WebGLRenderTarget;
    renderTargetB: WebGLRenderTarget;

    constructor(sceneA: Object3D, cameraA: Camera, sceneB: Object3D, cameraB: Camera);

    setTransition(value: number): void;

    useTexture(value: boolean): void;

    setTexture(value: Texture | null): void;

    setTextureThreshold(value: number): void;

    setSize(width: number, height: number): void;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget): void;

    dispose(): void;

    createMaterial(): ShaderMaterial;
}
