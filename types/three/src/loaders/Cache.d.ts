declare const Cache: {
    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default {}
     */
    files: any;

    add(key: string, file: any): void;

    /**
     * three-modded: with a `type` (the expected response type), returns a Promise resolving to the cached file.
     */
    get(key: string): any;
    get(key: string, type: string): Promise<any>;

    remove(key: string): void;

    clear(): void;
};

export { Cache };
