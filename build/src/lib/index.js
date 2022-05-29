'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEenv = exports.throwError = exports.CustomError = exports.disconnect = exports.ensureConnection = exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
/**
 * Create an express application
 * @returns
 */
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json({ limit: "50mb" }));
    return app;
}
exports.createApp = createApp;
/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns
 */
const ensureConnection = async () => {
    try {
        await db_1.default.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
exports.ensureConnection = ensureConnection;
/**
 * Disconnect from a sequelize database
 */
const disconnect = () => db_1.default.close();
exports.disconnect = disconnect;
class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.CustomError = CustomError;
function throwError(message, status) {
    throw new CustomError(message, status);
}
exports.throwError = throwError;
function loadEenv() {
    dotenv_1.default.config();
}
exports.loadEenv = loadEenv;
//# sourceMappingURL=index.js.map