import {
    BufferGeometry,
    BufferGeometryEventMap,
    NormalBufferAttributes,
    NormalOrGLBufferAttributes,
} from '../../../src/Three.js';

import { LineSegmentsGeometry } from './LineSegmentsGeometry.js';

export class WireframeGeometry2<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
    TE extends BufferGeometryEventMap = BufferGeometryEventMap,
> extends LineSegmentsGeometry<Attributes, TE> {
    constructor(geometry: BufferGeometry);
    readonly sWireframeGeometry2: boolean;
}
