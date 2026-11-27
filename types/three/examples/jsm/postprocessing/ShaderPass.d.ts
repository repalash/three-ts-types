import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class ShaderPass extends Pass {
    constructor(shader: object, textureID?: string);
    textureID: string;
    uniforms: { [name: string]: { value: any } };
    material: ShaderMaterial;
    /**
     * three-modded: keep the renderer's current render target instead of setting `writeBuffer` (when not `renderToScreen`).
     * @default false
     */
    useExistingRenderTarget: boolean;
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
}
