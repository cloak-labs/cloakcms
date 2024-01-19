import type { CMSInstance } from "./types";
/**
 * @description Builds and validates a CMSInstance configuration
 * @param config CMSInstance object
 * @returns Built and sanitized CMSInstance object
 */
export declare function buildCMSInstance(config: CMSInstance): Promise<CMSInstance>;
