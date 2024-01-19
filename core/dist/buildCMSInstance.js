"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCMSInstance = void 0;
const with_plugins_1 = require("@kaelan/with-plugins");
/**
 * @description Builds and validates a CMSInstance configuration
 * @param config CMSInstance object
 * @returns Built and sanitized CMSInstance object
 */
async function buildCMSInstance(config) {
    if (Array.isArray(config.plugins)) {
        const configAfterPlugins = await (0, with_plugins_1.withPlugins)(config, config.plugins);
        return configAfterPlugins;
    }
    return config;
}
exports.buildCMSInstance = buildCMSInstance;
