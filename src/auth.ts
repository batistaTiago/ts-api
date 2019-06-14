import * as Passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { UserService } from './modules/user/user.service'
import { EnvironmentConfig } from './config/env/config'

export default class AuthConfig {

    private static configured: boolean = false

    private constructor() { }

    public static config() {
        if (!this.configured) {
            let options = {
                secretOrKey: EnvironmentConfig.getSettings().secret,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            }

            Passport.use(new Strategy(options, (jwtPayload, done) => {
                UserService.getById(jwtPayload.id)
                    .then(
                        (user) => {
                            if (user) {
                                return done(null, {
                                    id: user.id,
                                    email: user.email,
                                })
                            }
                            return done(null, false)
                        }
                    )
                    .catch(
                        (err) => {
                            return done(err, null)
                        }
                    )
            }))
        }
    }

    public static initialize = () => {
        AuthConfig.config()
        return Passport.initialize()
    }

    public static authenticate = () => {
        AuthConfig.config()
        return Passport.authenticate('jwt', { session: false })
    }
}