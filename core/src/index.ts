export * from "./types";

// Bundle `render-blocks` into `cloakcms` so users don't need to install it:
export * from "render-blocks";

export { buildCMSConfig, getCMSConfig, getCMSInstance } from "./buildCMSConfig";
export { stripTrailingSlash } from "./utils/stripTrailingSlash";
