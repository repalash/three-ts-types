import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class ShaderPass extends Pass {
    constructor(shader: object, textureID?: string);
    textureID: string;
    uniforms: { [name: string]: { value: any } };
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings still say fsQuad)
}
