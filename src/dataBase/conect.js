const mongoose = require('mongoose')


const connectDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.kjvo1wb.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if(error) return console.error('Ocorreu um erro ao se conectar ao banco de dados: ' + error)

        return console.log('Conectdo ao servidor com sucesso')
    })
}


module.exports = connectDataBase