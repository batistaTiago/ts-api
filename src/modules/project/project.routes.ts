import * as Express from 'express'
import { ProjectController } from './project.controller'

export class ProjectRoutes {

    constructor() { }

    public index = (request: Express.Request, response: Express.Response) => {
        return ProjectController.getAll(request, response)
    }

    // public create = (request: Express.Request, response: Express.Response) => { 
    //     return ProjectController.createProject(request, response)
    // }

    public findOne = (request: Express.Request, response: Express.Response) => { 
        return ProjectController.getById(request, response)
    }

    public findFeatured = (request: Express.Request, response: Express.Response) => {
        return ProjectController.getFeatured(request, response)
    }

    public findMinor = (request: Express.Request, response: Express.Response) => {
        return ProjectController.getMinor(request, response)
    }
}