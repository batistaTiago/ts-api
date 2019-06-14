import * as Express from 'express'
import { ProjectPhotoService } from './project-photo.service'
import { ResponseManager } from '../../api/managers/response-manager'

export class ProjectPhotoController {

    public static async createProjectPhoto(req: Express.Request, res: Express.Response) {
        try {
            const projectPhoto = await ProjectPhotoService.create(req.body)
            ResponseManager.success(res, projectPhoto)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

    public static async getAll(req: Express.Request, res: Express.Response) {
        try {
            const projectPhotosData = await ProjectPhotoService.getAll()
            ResponseManager.success(res, projectPhotosData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }

    }

    public static async getById(req: Express.Request, res: Express.Response) {
        try {
            const projectPhotoId = parseInt(req.params.id)
            const projectPhotoData = await ProjectPhotoService.getById(projectPhotoId)
            ResponseManager.success(res, projectPhotoData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

}