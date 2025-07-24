import {
    Color,
    ColorRepresentation,
    MaterialEventMap,
    MaterialParameters,
    ShaderMaterial,
    Vector2,
} from '../../../src/Three.js';

export interface LineMaterialParameters extends MaterialParameters {
    alphaToCoverage?: boolean | undefined;
    color?: ColorRepresentation | undefined;
    dashed?: boolean | undefined;
    dashScale?: number | undefined;
    dashSize?: number | undefined;
    dashOffset?: number | undefined;
    gapSize?: number | undefined;
    linewidth?: number | undefined;
    resolution?: Vector2 | undefined;
    wireframe?: boolean | undefined;
    worldUnits?: boolean | undefined;
}

export class LineMaterial<TE extends MaterialEventMap = MaterialEventMap> extends ShaderMaterial<TE> {
    constructor(parameters?: LineMaterialParameters);
    color: Color;
    dashed: boolean;
    dashScale: number;
    dashSize: number;
    dashOffset: number;
    gapSize: number;
    opacity: number;
    readonly isLineMaterial: true;
    linewidth: number;
    resolution: Vector2;
    alphaToCoverage: boolean;
    worldUnits: boolean;
}
