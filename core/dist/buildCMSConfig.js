"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCMSInstance = exports.getCMSConfig = exports.buildCMSConfig = void 0;
const buildCMSInstance_1 = require("./buildCMSInstance");
let _config;
/**
 * @description Builds and validates CMS configuration
 * @param config CMSConfig object
 * @returns Built and sanitized CMSConfig object
 */
async function buildCMSConfig(config) {
    let builtInstances = [];
    for (let i = 0; i < config.instances.length; i++) {
        let instance = config.instances[i];
        if (i == 0 && !instance.name)
            instance.name = "default";
        instance = await (0, buildCMSInstance_1.buildCMSInstance)(instance);
        builtInstances.push(instance);
    }
    const finalConfig = {
        ...config,
        instances: builtInstances,
    };
    _config = finalConfig; // save in global variable; getCMSConfig() returns it
    return finalConfig;
}
exports.buildCMSConfig = buildCMSConfig;
function getCMSConfig() {
    if (!_config)
        throw Error("Called getCMSConfig() before buildCMSConfig()");
    return _config;
}
exports.getCMSConfig = getCMSConfig;
function getCMSInstance(name) {
    if (!_config) {
        throw Error("Called getCMSInstance() before buildCMSConfig()");
    }
    if (!_config?.instances || !_config?.instances?.length)
        throw Error("Called getCMSInstance() without setting `instances` in your CMS config");
    return name
        ? _config.instances.find((instance) => instance.name == name)
        : _config.instances[0]; // return 1st instance if `name` not provided
}
exports.getCMSInstance = getCMSInstance;
