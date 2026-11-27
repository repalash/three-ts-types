import { Camera, ColorRepresentation, Scene } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class SSAARenderPass extends Pass {
    scene: Scene;
    camera: Camera;

    sampleLevel: number;
    unbiased: boolean;

    stencilBuffer: boolean;

    clearColor: ColorRepresentation;
    clearAlpha: number;

    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
    constructor(scene: Scene, camera: Camera, clearColor?: ColorRepresentation, clearAlpha?: number);
}
