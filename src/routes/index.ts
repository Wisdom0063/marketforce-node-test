"use strict"

/**
 * Wallet Transfer API request handlers
 * @author Wisdom Kwarteng
 */
import express from "express"
import { transferFundsController } from "../controllers"
export const transferRouter = express.Router()

export enum TransferRoutes{
    root = '/'
}

export enum AppRoutes{
    transfers = '/transfers'
}

/**
 * API request handler for transferring funds
 */
 transferRouter.post(TransferRoutes.root, transferFundsController)