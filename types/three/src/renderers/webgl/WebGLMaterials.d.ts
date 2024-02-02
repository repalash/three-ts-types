import { Fog } from '../../scenes/Fog';
import { Material } from '../../materials/Material';
import { WebGLRenderTarget } from '../WebGLRenderTarget';
import { Texture } from '../../textures/Texture';
import { IUniform } from '../shaders/UniformsLib';

export class WebGLMaterials {
    refreshTransformUniform(map: Texture, uniform: IUniform): void;
    refreshFogUniforms(uniforms: IUniform, fog: Fog): void;
    refreshMaterialUniforms(
        uniforms: IUniform,
        material: Material,
        pixelRatio: number,
        height: number,
        transmissionRenderTarget: WebGLRenderTarget,
    ): void;
}
