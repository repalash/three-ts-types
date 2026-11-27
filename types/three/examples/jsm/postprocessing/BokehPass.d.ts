import { Camera, Scene, ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export interface BokehPassParameters {
    focus?: number;
    aspect?: number;
    aperture?: number;
    maxblur?: number;
}

export class BokehPass extends Pass {
    constructor(scene: Scene, camera: Camera, params: BokehPassParameters);
    scene: Scene;
    camera: Camera;
    materialBokeh: ShaderMaterial;
    uniforms: object;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
}
