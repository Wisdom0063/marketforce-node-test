"use strict"

import config, { NODE_ENV } from "../config"
import Transaction from "./transactions"
import Wallet from "./wallet"

const isDev = config.get("NODE_ENV")=== NODE_ENV.DEVELOPMENT
const isTest = config.get("NODE_ENV")=== NODE_ENV.TEST

console.log(isDev, isTest)

const dbInit = () => Promise.all([
    Wallet.sync({ alter: isDev || isTest}),
    Transaction.sync({ alter: isDev || isTest }),
  ])


  export {
    Transaction,
    Wallet,
    dbInit
}

