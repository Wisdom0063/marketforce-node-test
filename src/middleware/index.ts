import {Request, Response, NextFunction} from "express"
/**
 * Express error middleware
 * @param error 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    const { message, status: statusCode = 500 } = error;
    if (res.headersSent) {
        return next(error)
      }
    return res.status(statusCode).json(
        statusCode === 500
            ? { error: { message: "Sorry an error occurred. Please try again later" } }
            : {
                error: {
                    message
                }
            }
    );
}


 