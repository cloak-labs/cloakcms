"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTrailingSlash = exports.getCMSInstance = exports.getCMSConfig = exports.buildCMSConfig = void 0;
__exportStar(require("./types"), exports);
// Bundle `@kaelan/render-blocks` into `cloakcms` so users don't need to install it:
__exportStar(require("@kaelan/render-blocks"), exports);
var buildCMSConfig_1 = require("./buildCMSConfig");
Object.defineProperty(exports, "buildCMSConfig", { enumerable: true, get: function () { return buildCMSConfig_1.buildCMSConfig; } });
Object.defineProperty(exports, "getCMSConfig", { enumerable: true, get: function () { return buildCMSConfig_1.getCMSConfig; } });
Object.defineProperty(exports, "getCMSInstance", { enumerable: true, get: function () { return buildCMSConfig_1.getCMSInstance; } });
var stripTrailingSlash_1 = require("./utils/stripTrailingSlash");
Object.defineProperty(exports, "stripTrailingSlash", { enumerable: true, get: function () { return stripTrailingSlash_1.stripTrailingSlash; } });
