import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class FilmPass extends Pass {
    constructor(intensity?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings still say fsQuad)
}
