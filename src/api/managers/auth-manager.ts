import * as Express from 'express'
import * as HTTPStatus from 'http-status'
import * as BCrypt from 'bcryptjs'

import * as JWT from 'jwt-simple'
import { EnvironmentConfig } from '../../config/env/config'
import { ResponseManager } from './response-manager'


export class AuthManager {
    public static authenticate(res: Express.Response, credentials: any, data: any) {
        const passwordsMatch = BCrypt.compareSync(credentials.password, data.password)

        if (passwordsMatch) {
            const payload = { id: data.id }
            ResponseManager.success(res, JWT.encode(payload, EnvironmentConfig.getSettings().secret))
        }
        else {
            res.sendStatus(HTTPStatus.UNAUTHORIZED)
        }
    }
}