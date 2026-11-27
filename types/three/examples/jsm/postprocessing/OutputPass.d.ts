import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class OutputPass extends Pass {
    constructor();
    uniforms: object;
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings still say fsQuad)
}
