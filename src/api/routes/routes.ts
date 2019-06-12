import * as Express from 'express'

class Routes {
    constructor(app: Express.Application) {
        this.getRoutes(app)
    }

    public getRoutes(app: Express.Application) {
        app.route('/').get(
            (_, response: Express.Response) => {
                response.send('Oi!')
            }
        )

        app.route('/:p').get(
            (request: Express.Request, response: Express.Response) => {
                response.send('Oi, ' + request.params.p)
            }
        )
    }
}

export default Routes