import { Fog } from "../../scenes/Fog.js";
import { Material } from "../../materials/Material.js";
import { WebGLRenderTarget } from "../WebGLRenderTarget.js";
import { Texture } from "../../textures/Texture.js";
import { IUniform } from "../shaders/UniformsLib.js";

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
