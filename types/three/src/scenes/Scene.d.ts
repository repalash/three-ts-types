import { FogBase } from './Fog.js';
import { Material } from '../materials/Material.js';
import { Object3D, Object3DEventMap } from '../core/Object3D.js';
import { Color } from '../math/Color.js';
import { Texture } from '../textures/Texture.js';
import { CubeTexture } from '../Three.js';

/**
 * Scenes allow you to set up what and where is to be rendered by three.js
 * @remarks
 * This is where you place objects, lights and cameras.
 * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
 * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual: Creating a scene}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
 */
export class Scene<TEventMap extends Object3DEventMap = Object3DEventMap> extends Object3D<TEventMap> {
    /**
     * Create a new {@link Scene} object.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Scene}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isScene: true;

    /**
     * @defaultValue `Scene`
     */
    type: 'Scene';

    /**
     * A {@link Fog | fog} instance defining the type of fog that affects everything rendered in the scene.
     * @defaultValue `null`
     */
    fog: FogBase | null;

    /**
     * Sets the blurriness of the background. Only influences environment maps assigned to {@link THREE.Scene.background | Scene.background}.
     * @defaultValue `0`
     * @remarks Expects a `Float` between `0` and `1`.
     */
    backgroundBlurriness: number;

    /**
     * Attenuates the color of the background. Only applies to background textures.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    backgroundIntensity: number;

    /**
     * Forces everything in the {@link Scene} to be rendered with the defined material.
     * @defaultValue `null`
     */
    overrideMaterial: Material | null;

    /**
     * Defines the background of the scene.
     * @remarks Valid inputs are:
     *  - A {@link THREE.Color | Color} for defining a uniform colored background.
     *  - A {@link THREE.Texture | Texture} for defining a (flat) textured background.
     *  - Texture cubes ({@link THREE.CubeTexture | CubeTexture}) or equirectangular textures for defining a skybox.</li>
     *  - A value 'environment' will force the background to be same as environment.</li>
     * @defaultValue `null`
     */
    background: Color | Texture | CubeTexture | 'environment' | null;
    /**
     * Custom property for background tint, or just background color rendered in the shader
     */
    backgroundColor?: Color | null;

    /**
     * Sets the environment map for all physical materials in the scene.
     * However, it's not possible to overwrite an existing texture assigned to {@link THREE.MeshStandardMaterial.envMap | MeshStandardMaterial.envMap}.
     * @defaultValue `null`
     */
    environment: Texture | null;

    /**
     * Convert the {@link Scene} to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as textures or images for the scene.
     */
    toJSON(meta?: any): any;
}
