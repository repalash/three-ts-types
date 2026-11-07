import { LoadingManager } from "./LoadingManager.js";

/**
 * Base class for implementing loaders.
 */
export class Loader<TData = unknown, TUrl = string> {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default false
     */
    withCredentials: boolean;

    /**
     * @default ''
     */
    path: string;

    /**
     * @default ''
     */
    resourcePath: string;
    manager: LoadingManager;

    /**
     * @default {}
     */
    requestHeader: { [header: string]: string };

    /**
     * @default 'auto'
     */
    priority: "high" | "low" | "auto";

    /**
     * @default 'default'
     */
    cache: "default" | "no-store" | "reload" | "no-cache" | "force-cache";

    load(
        url: TUrl,
        onLoad: (data: TData) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;
    loadAsync(url: TUrl, onProgress?: (event: ProgressEvent) => void): Promise<TData>;

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;
    setPriority(value: "high" | "low" | "auto"): this;
    setCache(value: "default" | "no-store" | "reload" | "no-cache" | "force-cache"): this;

    static DEFAULT_MATERIAL_NAME: string;
}
