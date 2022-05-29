"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const lib_1 = require("./lib");
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const PORT = config_1.default.get("PORT");
(0, lib_1.ensureConnection)().then(() => {
    const server = http_1.default.createServer(app_1.app);
    server.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
//# sourceMappingURL=index.js.map