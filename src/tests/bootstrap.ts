"use strict"
require("dotenv").config()


import { disconnect, ensureConnection, loadEenv } from "../lib"
import sequelizeConnection from "../lib/db"


(async function () {
    console.log('++++++ Bootstraping Tests +++++++')
    require("dotenv").config()

})()


// afterAll( (done) => {
//      disconnect()
//     done()

// })


// beforeEach( (done)=> { 
//     ensureConnection()
//     done()
// }
// )


