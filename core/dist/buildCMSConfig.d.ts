import { CMSConfig, CMSInstance } from "./types";
/**
 * @description Builds and validates CMS configuration
 * @param config CMSConfig object
 * @returns Built and sanitized CMSConfig object
 */
export declare function buildCMSConfig(config: CMSConfig): Promise<CMSConfig>;
export declare function getCMSConfig(): CMSConfig;
export declare function getCMSInstance(name?: string): CMSInstance;
