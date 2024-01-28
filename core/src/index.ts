export * from "./types";

// Bundle `@kaelan/render-blocks` into `cloakcms` so users don't need to install it:
export * from "@kaelan/render-blocks";

export { buildCMSConfig, getCMSConfig, getCMSInstance } from "./buildCMSConfig";
export { stripTrailingSlash } from "./utils/stripTrailingSlash";
