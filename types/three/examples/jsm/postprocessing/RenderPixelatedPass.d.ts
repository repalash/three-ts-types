import { Camera, Scene, ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export interface RenderPixelatedPassParameters {
    normalEdgeStrength?: number;
    depthEdgeStrength?: number;
}

export class RenderPixelatedPass extends Pass {
    constructor(pixelSize: number, scene: Scene, camera: Camera, options?: RenderPixelatedPassParameters);
    pixelSize: number;

    pixelatedMaterial: ShaderMaterial;

    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
    scene: Scene;
    camera: Camera;

    normalEdgeStrength: RenderPixelatedPassParameters["normalEdgeStrength"];
    depthEdgeStrength: RenderPixelatedPassParameters["depthEdgeStrength"];

    setPixelSize(pixelSize: number): void;
}
