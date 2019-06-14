import{ User, IUser, IUserDetail } from './user.interface'
const model = require('../../models')

export class UserService implements IUser {
    public id: number
    public name: string
    public email: string
    public password: string

    constructor() {

    }

    public static async create(user: IUser): Promise<IUser> {
        return model.User.create(user)
     }
    
    public static async getAll(): Promise<IUser[]>  { 
        return model.User.findAll(
            { order: ['name'] }
        ).then(User.createUsers)
    }
    
    public static async getById(id: number): Promise<IUser> { 
        return model.User.findOne(
            { where: { id } }
        ).then(User.createWithId)
    }

    public static async getByEmail(email: string): Promise<IUser> {
        return model.User.findOne(
            { where: { email } }
        ).then(User.createWithEmail)
    }
    
    public static async update(id: number, user: IUser): Promise<IUser> { 
        return model.User.update(user,
            { 
                where: { id }, 
                fields: ['name', 'email', 'password'],
                hooks: true,
                individualHooks: true
            }
        )
    }
    
    public static async delete(id: number): Promise<IUser> {
        return model.User.destroy(
            {
                where: { id }
            }
        )
     }
}