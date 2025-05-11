import { LineGeometry } from './LineGeometry.js';
import { LineSegments2 } from './LineSegments2.js';
import { LineMaterial } from './LineMaterial.js';
import { Object3DEventMap } from '../../../src/core/Object3D';

export class Line2<
    TGeometry extends LineGeometry = LineGeometry,
    TMaterial extends LineMaterial = LineMaterial,
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends LineSegments2<TGeometry, TMaterial, TEventMap> {
    geometry: TGeometry;
    material: TMaterial;

    constructor(geometry?: LineGeometry, material?: LineMaterial);
    readonly isLine2: true;
}
