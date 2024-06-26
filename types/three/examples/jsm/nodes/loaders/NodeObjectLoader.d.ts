import { NodeLoaderResult } from './NodeLoader';
import { Material, ObjectLoader, Texture } from '../../../../src/Three';
import { AnyJson } from '../core/constants';

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: AnyJson, textures: { [key: string]: Texture }): NodeLoaderResult;

    parseMaterials(json: AnyJson, textures: { [key: string]: Texture }): { [key: string]: Material };
}
