import { buildCMSInstance } from "./buildCMSInstance";
import { CMSConfig, CMSInstance } from "./types";

let _config: CMSConfig;

/**
 * @description Builds and validates CMS configuration
 * @param config CMSConfig object
 * @returns Built and sanitized CMSConfig object
 */
export async function buildCMSConfig(config: CMSConfig): Promise<CMSConfig> {
  let builtInstances = [];

  for (let i = 0; i < config.instances.length; i++) {
    let instance = config.instances[i];
    if (i == 0 && !instance.name) instance.name = "default";
    instance = await buildCMSInstance(instance);
    builtInstances.push(instance);
  }

  const finalConfig = {
    ...config,
    instances: builtInstances,
  };

  _config = finalConfig; // save in global variable; getCMSConfig() returns it

  return finalConfig;
}

export function getCMSConfig(): CMSConfig {
  if (!_config) throw Error("Called getCMSConfig() before buildCMSConfig()");
  return _config;
}

export function getCMSInstance(name?: string): CMSInstance {
  if (!_config) throw Error("Called getCMSInstance() before buildCMSConfig()");
  if (!_config?.instances || !_config?.instances?.length)
    throw Error(
      "Called getCMSInstance() without setting `instances` in your CMS config"
    );

  return name
    ? _config.instances.find((instance) => instance.name == name)
    : _config.instances[0]; // return 1st instance if `name` not provided
}
