import {
    BufferGeometryEventMap,
    EdgesGeometry,
    InstancedBufferGeometry,
    LineSegments,
    Matrix4,
    Mesh, NormalBufferAttributes, NormalOrGLBufferAttributes,
    WireframeGeometry,
} from '../../../src/Three.js';

export class LineSegmentsGeometry<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
    TE extends BufferGeometryEventMap = BufferGeometryEventMap,
> extends InstancedBufferGeometry<Attributes, TE> {
    constructor();
    readonly isLineSegmentsGeometry: true;

    applyMatrix4(matrix: Matrix4): this;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    fromEdgesGeometry(geometry: EdgesGeometry): this;
    fromLineSegments(lineSegments: LineSegments): this;
    fromMesh(mesh: Mesh): this;
    fromWireframeGeometry(geometry: WireframeGeometry): this;
    setColors(array: number[] | Float32Array): this;
    setPositions(array: number[] | Float32Array): this;
}
