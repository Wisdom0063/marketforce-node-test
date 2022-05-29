import { Request, Response, NextFunction } from "express";
/**
 * Express error middleware
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns
 */
export declare function errorHandler(error: any, req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
