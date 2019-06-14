import * as Express from 'express'
import { ProjectService } from './projects.service'
import { ResponseManager } from '../../api/managers/response-manager'

export class ProjectController {

    public static async createProject(req: Express.Request, res: Express.Response) {
        try {
            const project = await ProjectService.create(req.body)
            ResponseManager.success(res, project)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

    public static async getAll(req: Express.Request, res: Express.Response) {
        try {
            const projectsData = await ProjectService.getAll()
            ResponseManager.success(res, projectsData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }

    }

    public static async getById(req: Express.Request, res: Express.Response) {
        try {
            const projectId = parseInt(req.params.id)
            const projectData = await ProjectService.getById(projectId) // la no arquivo de rotas, foi definido como :id
            ResponseManager.success(res, projectData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

}