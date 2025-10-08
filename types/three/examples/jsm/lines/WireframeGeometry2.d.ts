import {
    BufferGeometry,
    BufferGeometryEventMap,
    NormalBufferAttributes,
    NormalOrGLBufferAttributes,
} from "three";

import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";

export class WireframeGeometry2<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
    TE extends BufferGeometryEventMap = BufferGeometryEventMap,
> extends LineSegmentsGeometry<Attributes, TE> {
    constructor(geometry: BufferGeometry);
    readonly sWireframeGeometry2: boolean;
}
