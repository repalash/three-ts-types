import { Mapping } from '../constants';
import { Texture } from '../textures/Texture';

/**
 * A class containing utility functions for images.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ImageUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ImageUtils.js | Source}
 */
export namespace ImageUtils {
    /**
     * Returns a data URI containing a representation of the given image.
     * @param image The image object.
     * @param forcePng If set, the image will always be in png format, otherwise they will be exported as jpeg if the size is more than 2048
     */
    function getDataURL(
        image: HTMLImageElement | HTMLCanvasElement | CanvasImageSource | ImageBitmap | ImageData,
        forcePng?: boolean,
    ): string;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    function sRGBToLinear(image: HTMLImageElement | HTMLCanvasElement | ImageBitmap): HTMLCanvasElement;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    function sRGBToLinear(image: ImageData): {
        data: ImageData['data'];
        width: ImageData['width'];
        height: ImageData['height'];
    };
}
