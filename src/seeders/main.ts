import * as http from 'http'
import Api from '../api/api'
import { EnvironmentConfig } from '../config/env/config'

const server = http.createServer(Api)
const config = EnvironmentConfig.getSettings()
const port = process.env.PORT || config.serverPort

const models = require('../models')

console.log('sincronizando sequelize')

// models.sequelize.sync().then(
//     () => {
//         console.log('sinc deu certo')
//         server.listen(config.serverPort)

//         server.on('listening', () => {
//             console.log(`Server rodando na porta ${config.serverPort}...`)
//         })

//         server.on('error', (error: NodeJS.ErrnoException) => {
//             console.log('Houve um erro: ', error)
//         })
//     }
// )

server.listen(port)

server.on('listening', () => {
    console.log(`Server rodando na porta ${config.serverPort}...`)
})

