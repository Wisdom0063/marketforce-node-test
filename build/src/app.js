"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const lib_1 = require("./lib");
const middleware_1 = require("./middleware");
exports.app = (0, lib_1.createApp)();
exports.app.use(middleware_1.errorHandler);
//# sourceMappingURL=app.js.map