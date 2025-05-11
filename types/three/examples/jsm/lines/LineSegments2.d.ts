import { Mesh, Object3DEventMap } from '../../../src/Three.js';

import { LineMaterial } from './LineMaterial.js';
import { LineSegmentsGeometry } from './LineSegmentsGeometry.js';

export class LineSegments2<
    TGeometry extends LineSegmentsGeometry = LineSegmentsGeometry,
    TMaterial extends LineMaterial = LineMaterial,
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Mesh<TGeometry, TMaterial, TEventMap> {
    geometry: TGeometry;
    material: TMaterial;

    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isLineSegments2: true;

    computeLineDistances(): this;
}
