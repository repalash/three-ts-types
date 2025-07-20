import {
    BufferGeometryEventMap,
    EdgesGeometry,
    InstancedBufferGeometry,
    LineSegments,
    Matrix4,
    Mesh,
    NormalBufferAttributes,
    NormalOrGLBufferAttributes,
    WireframeGeometry,
} from '../../../src/Three.js';

export class LineSegmentsGeometry<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
    TE extends BufferGeometryEventMap = BufferGeometryEventMap,
> extends InstancedBufferGeometry<Attributes, TE> {
    constructor();
    readonly isLineSegmentsGeometry: true;

    applyMatrix4(matrix: Matrix4): LineSegmentsGeometry;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    fromEdgesGeometry(geometry: EdgesGeometry): LineSegmentsGeometry;
    fromLineSegments(lineSegments: LineSegments): LineSegmentsGeometry;
    fromMesh(mesh: Mesh): LineSegmentsGeometry;
    fromWireframeGeometry(geometry: WireframeGeometry): LineSegmentsGeometry;
    setColors(array: number[] | Float32Array): LineSegmentsGeometry;
    setPositions(array: number[] | Float32Array): LineSegmentsGeometry;
}
