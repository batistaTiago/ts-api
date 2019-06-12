import * as Express from 'express'
import * as BodyParser from 'body-parser'
import Routes from './routes/routes'
import { errorHandlerApi } from './error-handler.api'

class Api {

    public express: Express.Application

    constructor(express: Express.Application) { 
        this.express = express
        this.middleWare()
    }

    public middleWare(): void {
        this.express.use(BodyParser.urlencoded({ extended: true }))
        this.express.use(BodyParser.json())
        this.express.use(errorHandlerApi)
        this.router(this.express)
    }

    private router(application: Express.Application) {
        new Routes(application)
    }
}

export default new Api(Express()).express