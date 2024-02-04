import { CMSConfig, CMSInstance } from "./types";
/**
 * @description stores a CMS configuration, but doesn't build it; whenever a CMS getter function is called, if there isn't a built config but there is an idle config waiting to be built, it will build the idle config before returning it. This allows delaying the config build step until it's actually needed.
 * @param config CMSConfig object
 */
export declare function setCMSConfig(config: CMSConfig): void;
/**
 * @description Builds and validates CMS configuration
 * @param config CMSConfig object
 * @returns Built and sanitized CMSConfig object
 */
export declare function buildCMSConfig(config: CMSConfig): Promise<CMSConfig>;
export declare function getCMSConfig(): Promise<CMSConfig>;
/**
 * Retrieves a particular CMS instance object from your global CMS Config.
 * Throws an error if you haven't built your CMS Config yet via `buildCMSConfig`;
 * consider using `getCMSInstanceAsync` if you wish to conditionally build the
 * CMS config if it's missing rather than throwing an error.
 */
export declare function getCMSInstance(name?: string): CMSInstance;
/**
 * Same as `getCMSInstance`, but it will conditionally run `buildCMSConfig` if a config was
 * provided to `setCMSConfig` but hasn't been built yet (rather than just throwing an error).
 * So it's good to pair it with `setCMSConfig`, allowing you to delay the CMS config build
 * process until the moment it's actually needed, saving on app boot-up time.
 */
export declare function getCMSInstanceAsync(name?: string): Promise<CMSInstance>;
