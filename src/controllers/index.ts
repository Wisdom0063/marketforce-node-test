"use strict"

import { NextFunction, Request, Response } from "express";
import { validateRequest } from "../lib";
import { transferBulkFunds } from "../services";
import { transferBulkSchema } from "./schema";

export async function transferFundsController(req:Request, res:Response, next:NextFunction){
    try {
        const {sender, recipients} = validateRequest(transferBulkSchema, req.body)
         const results=   await transferBulkFunds({sender, recipients})
     return res.json({data:results})
    } catch (error) {
        next(error)
        return
    }

}


