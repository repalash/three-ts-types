import { DataTexture, ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings still say fsQuad)
    goWild: boolean;
    curF: number;
    randX: number;

    generateTrigger(): void;
    generateHeightmap(dt_size: number): DataTexture;
}
