"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
/**
 * Express error middleware
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns
 */
function errorHandler(error, req, res, next) {
    const { message, status: statusCode = 500 } = error;
    if (res.headersSent) {
        return next(error);
    }
    return res.status(statusCode).json(statusCode === 500
        ? { error: { message: "Sorry an error occurred. Please try again later" } }
        : {
            error: {
                message
            }
        });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.js.map