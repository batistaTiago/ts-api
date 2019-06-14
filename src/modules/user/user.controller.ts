import * as Express from 'express'
import { UserService } from './user.service'
import { ResponseManager } from '../../api/managers/response-manager'

export class UserController {

    public static async getAll(req: Express.Request, res: Express.Response) {
        try {
            const usersData = await UserService.getAll()
            ResponseManager.success(res, usersData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }

    }

    public static async createUser(req: Express.Request, res: Express.Response) {
        try {
            const user = await UserService.create(req.body)
            ResponseManager.success(res, user)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

    public static async getById(req: Express.Request, res: Express.Response) {
        try {
            const userId = parseInt(req.params.id)
            const userData = await UserService.getById(userId) // la no arquivo de rotas, foi definido como :id
            ResponseManager.success(res, userData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

    public static async updateUser(req: Express.Request, res: Express.Response) {
        const userId = parseInt(req.params.id) // la no arquivo de rotas, foi definido como :id
        const newUserData = req.body

        try {
            const updatedUserData = await UserService.update(userId, newUserData)
            ResponseManager.success(res, updatedUserData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

    public static async deleteUser(req: Express.Request, res: Express.Response) {
        const userId = parseInt(req.params.id)

        try {
            const deletedUserData = UserService.delete(userId)
            ResponseManager.success(res, deletedUserData)
        } catch (error) {
            ResponseManager.error(res, error, 'Erro ao processar requisição.')
        }
    }

}