import * as Express from 'express'

export function errorHandlerApi(err: Express.ErrorRequestHandler, req: Express.Request, res: Express.Response, next: Express.RequestHandler) {
    console.log('API error handler foi executado', err)
    res.status(500).json(
        { 
            errorCode: '0',
            message: 'Internal server error'
        }
    )
}