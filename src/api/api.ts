import * as Express from 'express'
import * as BodyParser from 'body-parser'
import Routes from './routes/routes'
import AuthConfig from '../auth'
import * as cors from 'cors'

class Api {

    public express: Express.Application

    constructor(express: Express.Application) {
        this.express = express
        this.middleWare()
    }

    private static errorHandler(
        err: Express.ErrorRequestHandler,
        req: Express.Request,
        res: Express.Response,
        next: Express.RequestHandler
    ) {
        console.log('API error handler foi executado', err)
        res.status(500).json(
            {
                errorCode: '0',
                message: 'Internal server error'
            }
        )
    }

    public middleWare(): void {
        this.express.use(BodyParser.urlencoded({ extended: true }))
        this.express.use(BodyParser.json())
        this.express.use(Api.errorHandler)
        // this.express.use(cors({origin: null}));
        // Add headers
        this.express.use(
            (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

                // Website you wish to allow to connect
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

                // Request methods you wish to allow
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

                // Request headers you wish to allow
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                // res.setHeader('Access-Control-Allow-Credentials', true);

                // Pass to next layer of middleware
                next();
            }
        );

        this.express.use(AuthConfig.config().initialize())

        this.router(this.express)
    }

    private router(application: Express.Application) {
        Routes.initRoutes(application)
    }
}

export default new Api(Express()).express