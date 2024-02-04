"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCMSInstanceAsync = exports.getCMSInstance = exports.getCMSConfig = exports.buildCMSConfig = exports.setCMSConfig = void 0;
const buildCMSInstance_1 = require("./buildCMSInstance");
let _idle_config;
let _config;
/**
 * @description stores a CMS configuration, but doesn't build it; whenever a CMS getter function is called, if there isn't a built config but there is an idle config waiting to be built, it will build the idle config before returning it. This allows delaying the config build step until it's actually needed.
 * @param config CMSConfig object
 */
function setCMSConfig(config) {
    _idle_config = config;
}
exports.setCMSConfig = setCMSConfig;
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
async function getCMSConfig() {
    if (!_config) {
        if (!_idle_config)
            throw Error("Called getCMSConfig() before setCMSConfig() and/or buildCMSConfig()");
        else {
            return await buildCMSConfig(_idle_config);
        }
    }
    return _config;
}
exports.getCMSConfig = getCMSConfig;
/**
 * Retrieves a particular CMS instance object from your global CMS Config.
 * Throws an error if you haven't built your CMS Config yet via `buildCMSConfig`;
 * consider using `getCMSInstanceAsync` if you wish to conditionally build the
 * CMS config if it's missing rather than throwing an error.
 */
function getCMSInstance(name) {
    if (!_config) {
        throw Error("getCMSInstance() was called before buildCMSConfig()");
    }
    return _getInstance(name);
}
exports.getCMSInstance = getCMSInstance;
/**
 * Same as `getCMSInstance`, but it will conditionally run `buildCMSConfig` if a config was
 * provided to `setCMSConfig` but hasn't been built yet (rather than just throwing an error).
 * So it's good to pair it with `setCMSConfig`, allowing you to delay the CMS config build
 * process until the moment it's actually needed, saving on app boot-up time.
 */
async function getCMSInstanceAsync(name) {
    if (!_config) {
        if (!_idle_config)
            throw Error("getCMSInstance() was called before setCMSConfig() and/or buildCMSConfig()");
        else {
            await buildCMSConfig(_idle_config);
        }
    }
    return _getInstance(name);
}
exports.getCMSInstanceAsync = getCMSInstanceAsync;
function _getInstance(name) {
    _validateInstances();
    return name
        ? _config.instances.find((instance) => instance.name == name)
        : _config.instances[0];
}
function _validateInstances() {
    if (!_config?.instances || !_config?.instances?.length)
        throw Error("getCMSInstance() was called without setting any `instances` in your CMS config");
}
