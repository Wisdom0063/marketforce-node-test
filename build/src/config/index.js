'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file load all configuration values from the .env file
 * @author Wisdom Kwarteng
 */
const convict_1 = __importDefault(require("convict"));
const lib_1 = require("../lib");
if (!process.env.NODE_ENV)
    process.env.NODE_ENV = 'development';
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
    (0, lib_1.loadEenv)();
const config = (0, convict_1.default)({
    NODE_ENV: {
        doc: 'Node Env',
        default: 'development',
        env: 'NODE_ENV'
    },
    PORT: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    DB_URL: {
        doc: 'Mongodb connection url',
        format: String,
        env: 'DB_URL',
        default: process.env.DB_URL,
    },
    TEST_DB_URL: {
        doc: 'Mongodb  test connection url',
        format: String,
        env: 'TEST_DB_URL',
        default: process.env.TEST_DB_URL,
    }
});
config.validate({ allowed: 'strict' });
exports.default = config;
//# sourceMappingURL=index.js.map