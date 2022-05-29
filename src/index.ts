"use strict"
require("dotenv").config()
import config from './config';
import { ensureConnection } from './lib';
import http from "http"
import {app} from "./app"
import { dbInit, Transaction, Wallet } from './models';
const PORT = config.get("PORT")
const server = http.createServer(app);
server.listen(PORT,  async  () => {
  await  ensureConnection()

  await dbInit().catch(error=>console.log(error))



    console.log(`Server running on http://localhost:${PORT}`)
})
