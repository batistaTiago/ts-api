import * as http from 'http'
import Api from '../api/api'
import { EnvironmentConfig } from '../config/env/config'

const server = http.createServer(Api)
const config = EnvironmentConfig.getSettings()

const models = require('../models')

console.log('sincronizando sequelize')
console.log(config)

models.sequelize.sync().then(
    () => {
        console.log('sinc deu certo')
        server.listen(config.serverPort)

        server.on('listening', () => {
            console.log(`Server rodando na porta ${config.serverPort}...`)
        })

        server.on('error', (error: NodeJS.ErrnoException) => {
            console.log('Houve um erro: ', error)
        })
    }
)

// server.listen(config.serverPort)

// server.on('listening', () => {
//     console.log(`Server rodando na porta ${config.serverPort}...`)
// })

