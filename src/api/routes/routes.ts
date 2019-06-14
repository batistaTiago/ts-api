import * as Express from 'express'
import { UserRoutes } from '../../modules/user/user.routes'
import { AuthService } from '../../modules/auth/auth.service'
import AuthConfig from '../../auth';

class Routes {

    private router: UserRoutes

    constructor() {
        this.router = new UserRoutes()
    }

    public initRoutes(app: Express.Application) {

        app.route('/api/users/all').get(this.router.index)
        app.route('/api/users/create').post(this.router.create)
        app.route('/api/users/:id').all(AuthConfig.authenticate()).get(this.router.findOne)
        app.route('/api/users/:id/update').all(AuthConfig.authenticate()).put(this.router.update)
        app.route('/api/users/:id/delete').all(AuthConfig.authenticate()).delete(this.router.findOne)


        app.route('/token').post(AuthService.authenticate)
        
    }
}

export default new Routes()