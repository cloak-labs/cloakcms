import { withPlugins } from "@kaelan/with-plugins";
/**
 * @description Builds and validates a CMSInstance configuration
 * @param config CMSInstance object
 * @returns Built and sanitized CMSInstance object
 */
export async function buildCMSInstance(config) {
    if (Array.isArray(config.plugins)) {
        const configAfterPlugins = await withPlugins(config, config.plugins);
        return configAfterPlugins;
    }
    return config;
}
