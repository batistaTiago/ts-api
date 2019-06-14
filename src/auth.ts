import * as Passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { UserService } from './modules/user/user.service'
import { EnvironmentConfig } from './config/env/config'

export default class AuthConfig {
    
    private constructor() { }
    
    public static config() {
        let options = {
            secretOrKey: EnvironmentConfig.getSettings().secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
        }
        
        Passport.use(
            new Strategy(
                options, 
                (jwtPayload, done) => {
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
                }
            )
        )
                
        return {
            initialize: () => {
                return Passport.initialize()
            },
            authenticate: () => {
                return Passport.authenticate('jwt', { session: false })
            }
        }
    }
}