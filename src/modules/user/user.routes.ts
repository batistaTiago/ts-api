import * as Express from 'express'
import { UserController } from './user.controller'

export class UserRoutes {

    constructor() { }

    public index = (request: Express.Request, response: Express.Response) => {
        return UserController.getAll(request, response)
    }

    public create = (request: Express.Request, response: Express.Response) => { 
        return UserController.createUser(request, response)
    }

    public findOne = (request: Express.Request, response: Express.Response) => { 
        return UserController.getById(request, response)
    }

    public update = (request: Express.Request, response: Express.Response) => { 
        return UserController.updateUser(request, response)
    }

    public delete = (request: Express.Request, response: Express.Response) => { 
        return UserController.deleteUser(request, response)
    }
}