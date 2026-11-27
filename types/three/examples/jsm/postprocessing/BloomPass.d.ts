import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class BloomPass extends Pass {
    constructor(strength?: number, kernelSize?: number, sigma?: number);
    convolutionUniforms: object;
    materialConvolution: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
}
