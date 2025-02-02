import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { Object3D } from '../core/Object3D.js';
import { Shape } from '../extras/core/Shape.js';
import { Texture } from '../textures/Texture.js';
import { Material } from '../materials/Material.js';
import { AnimationClip } from '../animation/AnimationClip.js';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { Source } from '../textures/Source.js';
import { Skeleton } from '../objects/Skeleton.js';

export class ObjectLoader extends Loader<Object3D> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    parse(json: unknown, onLoad?: (object: Object3D) => void): Object3D;
    parseAsync(json: unknown): Promise<Object3D>;
    parseGeometries(
        json: unknown,
        shapes: { [key: string]: Shape },
    ): { [key: string]: InstancedBufferGeometry | BufferGeometry };
    parseMaterials(json: unknown, textures: { [key: string]: Texture }): { [key: string]: Material };
    parseAnimations(json: unknown): { [key: string]: AnimationClip };
    parseShapes(json: any[]): { [key: string]: Shape };
    parseImages(json: unknown, onLoad?: () => void): { [key: string]: Source };
    parseImagesAsync(json: unknown): Promise<{ [key: string]: Source }>;
    parseTextures(json: unknown, images: { [key: string]: Source }): { [key: string]: Texture };
    parseSkeletons(json: unknown[], object: Object3D): { [key: string]: Skeleton };
    bindSkeletons(object: Object3D, skeletons: Record<string, Skeleton>): void;
    parseObject(
        data: unknown,
        geometries: { [key: string]: InstancedBufferGeometry | BufferGeometry },
        materials: { [key: string]: Material },
        textures: { [key: string]: Texture },
        animations: { [key: string]: AnimationClip },
    ): Object3D;
}
