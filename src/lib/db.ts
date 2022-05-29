'use strict'
import  {Sequelize} from 'sequelize'

const DB_URL = process.env.NODE_ENV === 'test'? process.env.TEST_DB_URL as string : process.env.DB_URL  as string


const sequelizeConnection = new Sequelize(DB_URL, {logging:false})

export default sequelizeConnection
