import * as Express from 'express'
import { UserRoutes } from '../../modules/user/user.routes'
import { ProjectRoutes } from '../../modules/project/project.routes'
import { AuthService } from '../../modules/auth/auth.service'
import AuthConfig from '../../auth';

class Routes {

    private userRouter: UserRoutes
    private projectRouter: ProjectRoutes

    constructor() {
        this.userRouter = new UserRoutes()
        this.projectRouter = new ProjectRoutes()
    }

    public initRoutes(app: Express.Application) {

        app.route('/').get(
            (req, res) => {
                res.send('<h1>Bem vindo à minha API!</h1>')
            }
        )


        /* rotas de usuario */
        app.route('/api/users/create').post(this.userRouter.create)
        app.route('/api/users/all').get(this.userRouter.index)

        /* apenas um usuário logado pode acessar as rotas abaixo */
        // app.route('/api/users/all').all(AuthConfig.config().authenticate()).get(this.userRouter.index)
        app.route('/api/users/:id').all(AuthConfig.config().authenticate()).get(this.userRouter.findOne)
        app.route('/api/users/:id/update').all(AuthConfig.config().authenticate()).put(this.userRouter.update)
        app.route('/api/users/:id/delete').all(AuthConfig.config().authenticate()).delete(this.userRouter.findOne)


        /* rotas de projeto */
        app.route('/api/projects/all').get(this.projectRouter.index)
        app.route('/api/projects/all/:id').get(this.projectRouter.findOne)
        app.route('/api/projects/featured').get(this.projectRouter.findFeatured)
        app.route('/api/projects/minor').get(this.projectRouter.findMinor)

        /* rota de token de autenticação jwt */
        app.route('/token').post(AuthService.authenticate)
        
    }
}

export default new Routes()