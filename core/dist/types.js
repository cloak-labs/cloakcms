"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPlugins = void 0;
// I don't know why, but re-exporting withPlugins from index.ts causes module parsing error, while exporting from here works:
var with_plugins_1 = require("@kaelan/with-plugins");
Object.defineProperty(exports, "withPlugins", { enumerable: true, get: function () { return with_plugins_1.withPlugins; } });
