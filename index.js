const doteEnv = require('dotenv')
const connectToDataBase = require('./src/dataBase/conect')

// require('./modules/https')
doteEnv.config()
connectToDataBase()
require('./modules/express')