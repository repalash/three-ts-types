import { IUniform, RawShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

declare class OutputPass extends Pass {
    readonly isOutputPass: true;

    uniforms: Record<string, IUniform>;
    material: RawShaderMaterial;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out)

    constructor();
}

export { OutputPass };
