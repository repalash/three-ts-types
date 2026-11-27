import { Texture } from "../../textures/Texture.js";

declare class WebGLEnvironments {
    /**
     * Returns the cube map (or, with `usePMREM`, the PMREM) for an environment texture, or the texture itself when it
     * needs no conversion.
     */
    get(texture: Texture | null | undefined, usePMREM?: boolean): Texture | null;
    dispose(): void;
}

export { WebGLEnvironments };
