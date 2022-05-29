
'use strict'
/**
 * This file load all configuration values from the .env file
 * @author Wisdom Kwarteng
 */
import  convict from "convict"
import { loadEenv } from "../lib"

export enum NODE_ENV{
  DEVELOPMENT = 'development',
  TEST = 'test',
  PRODUCTION = 'production'
}

if (!process.env.NODE_ENV) process.env.NODE_ENV = NODE_ENV.DEVELOPMENT

if (process.env.NODE_ENV === NODE_ENV.DEVELOPMENT|| process.env.NODE_ENV === NODE_ENV.TEST) loadEenv()




const config = convict({
    NODE_ENV: {
      doc: 'Node Env',
      default: NODE_ENV.DEVELOPMENT,
      env: 'NODE_ENV'
    },
    PORT: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3003,
      env: 'PORT'
    },
    DB_URL: {
      doc: 'Mongodb connection url',
      format: String,
      env: 'DB_URL',
      default: process.env.DB_URL as string,
    },

    TEST_DB_URL: {
        doc: 'Mongodb  test connection url',
        format: String,
        env: 'TEST_DB_URL',
        default: process.env.TEST_DB_URL as string,
      },
      NAX_RECIPIENTS_PER_TRANSACTION:{
        doc: "Maximum recipient per bulk transaction",
        format: Number,
        env: 'NAX_RECIPIENTS_PER_TRANSACTION',
        default: 10,
      },

})
config.validate({allowed: 'strict'});
export default config