import * as Express from 'express'
import { UserService } from '../user/user.service'
import { AuthManager } from '../../api/managers/auth-manager'

export class AuthService {
    public static async authenticate(req: Express.Request, res: Express.Response) {
        const { email, password } = req.body
        const credentials = { email, password }

        // if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
        if (credentials.email && credentials.password) {
            let data = await UserService.getByEmail(credentials.email)
            AuthManager.authenticate(res, credentials, data)
        }
    }
}