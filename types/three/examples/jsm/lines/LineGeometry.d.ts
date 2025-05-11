import {
    BufferGeometryEventMap,
    Line,
    NormalBufferAttributes,
    NormalOrGLBufferAttributes,
} from '../../../src/Three.js';

import { LineSegmentsGeometry } from './LineSegmentsGeometry.js';

export class LineGeometry<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
    TE extends BufferGeometryEventMap = BufferGeometryEventMap,
> extends LineSegmentsGeometry<Attributes, TE> {
    constructor();
    readonly isLineGeometry: true;

    fromLine(line: Line): this;
}
