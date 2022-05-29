'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const dbUrl = config_1.default.get("DB_URL");
const sequelizeConnection = new sequelize_1.Sequelize(dbUrl);
exports.default = sequelizeConnection;
//# sourceMappingURL=db.js.map