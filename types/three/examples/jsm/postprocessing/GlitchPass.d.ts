import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
    goWild: boolean;
}
