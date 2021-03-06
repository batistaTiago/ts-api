import * as Express from 'express'
import * as HTTPStatus from 'http-status'

export class ResponseManager {
    public static success(res: Express.Response, data: any) {
        res.status(HTTPStatus.OK).json({ payload: data })
    }

    public static badRequest(res: Express.Response, error: any = null, message: string = 'Bad request') {
        res.status(HTTPStatus.BAD_REQUEST).send(message)
    }

    public static error(res: Express.Response, error: any, message: string) {
        console.log('Ocorreu um erro: ' + error)
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message)
    }
}
