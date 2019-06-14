import * as Express from 'express'
import { ProjectPhotoController } from './project-photo.controller'

export class ProjectRoutes {

    constructor() { }

    public index = (request: Express.Request, response: Express.Response) => {
        return ProjectPhotoController.getAll(request, response)
    }

    public create = (request: Express.Request, response: Express.Response) => { 
        return ProjectPhotoController.createProjectPhoto(request, response)
    }

    public findOne = (request: Express.Request, response: Express.Response) => { 
        return ProjectPhotoController.getById(request, response)
    }
}