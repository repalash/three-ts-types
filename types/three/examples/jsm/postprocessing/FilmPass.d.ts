import { ShaderMaterial } from '../../../src/Three';

import { Pass, FullScreenQuad } from './Pass';

export class FilmPass extends Pass {
    constructor(noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
