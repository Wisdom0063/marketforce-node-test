'use strict'
import express, {Express} from "express"
import dotenv from "dotenv"
import sequelizeConnection from "./db";
import { ObjectSchema } from "joi";


/**
 * Create an express application
 * @returns 
 */
export function createApp():Express {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({limit:"50mb"}));
    return app;
}


/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns 
 */
export const ensureConnection = async () => {
  try {
    await sequelizeConnection.authenticate();
    // sequelizeConnection.sync({alter:process.env.NODE_ENV==='test', force:process.env.NODE_ENV==='test'})
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);

  }


}


/**
 * Disconnect from a sequelize database
 */
export const disconnect = () => sequelizeConnection.close()




export class CustomError extends Error {
    public status:number
    constructor(message:string, status:number) {
      super(message);
      this.status = status;
    }
  }

  export function throwError(message:string, status:number){
    throw new CustomError(message, status)
  }


  export  function loadEenv () {

    dotenv.config()

      
  }



export const validate = (schema: ObjectSchema, data: object) => {
    const { error, value } = schema.validate(data, { stripUnknown: true, abortEarly: false });
    if (error) {
        const details = error.details.map((detail: any ) => {
            return {
                message: detail.message.replace(/\"/g, ""),
                path: detail.context?.key,

            }
        })
        return {
            error: {
                details,
                message: error.message.replace(/\"/g, "")

            }
        }
    }
    return { value };
};


export function validateRequest(schema: ObjectSchema, data: object){
    const { error, value } = validate(schema, data)
    if (error) {
        throwError(error.message,  400)
    }
    return value

  }






