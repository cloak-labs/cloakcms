import type { Plugin } from "@kaelan/with-plugins";
import { type BlockRenderer } from "@kaelan/render-blocks";
export { withPlugins } from "@kaelan/with-plugins";
export { Plugin };
export interface CMSInstance {
    /** The root URL path where your CMS admin UI is accessible. */
    url: `http://${string}` | `https://${string}`;
    /** The root URL path where your CMS admin UI is accessible. */
    adminPath: "/" | `/${string}`;
    /** The root URL path where your CMS stores content/images/files etc. */
    contentPath: "/" | `/${string}`;
    /** Provide a unique name for this CMS instance, allowing you to target it if you have multiple CMS instances. */
    name?: string;
    /**
     * * CMS Client ====================
     * The CMS Client is a function/class/ORM for interacting with this CMS instance. We hold no opinions
     * about how it should work -- we just provide a standardized place to store it.
     */
    client?: Function;
    blockRenderer?: BlockRenderer;
    /**
     * `meta` can be used to store anything you want about the CMS instance.
     * It's particularly useful for plugins to store stuff.
     */
    meta?: Record<string, any>;
    /**
     * * Plugins ====================
     * A plugin is simply a function that receives the current CMS instance config and returns a modified
     * version for the next plugin to consume, until the final plugin returns the final config. Plugins allow
     * you to package up reusable config options, or build better APIs for setting the CMS instance config.
     */
    plugins?: Plugin<CMSInstance>[];
}
export interface CMSConfig {
    instances: CMSInstance[];
}
