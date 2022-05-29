import { Express } from "express";
/**
 * Create an express application
 * @returns
 */
export declare function createApp(): Express;
/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns
 */
export declare const ensureConnection: () => Promise<void>;
/**
 * Disconnect from a sequelize database
 */
export declare const disconnect: () => Promise<void>;
export declare class CustomError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare function throwError(message: string, status: number): void;
export declare function loadEenv(): void;
