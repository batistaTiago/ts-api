export interface IUser {
    readonly id: number
    name: string
    email: string
    password: string
}

export interface IUserDetail extends IUser {
    id: number
    name: string
    email: string
    password: string
}

export class User {
    public static createUser({ id, name, email, password }: any): IUser { 
        return { id, name, email, password }
    }

    public static createUsers(data: any[]): IUser[] {
        return data.map(User.createUser)
    }

    public static createWithId({ id, name, email, password }: any): IUserDetail { 
        return { id, name, email, password }
    }

    public static createWithEmail({id, name, email, password}: any): IUserDetail {
        return { id, name, email, password }
    }
}