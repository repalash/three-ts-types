import { FullScreenQuad, Pass } from "./Pass.js";

export class SMAAPass extends Pass {
    constructor();
    _fsQuad: FullScreenQuad; // three-modded: the JS has used _fsQuad since r175 (upstream typings leave it out as internal)
}
