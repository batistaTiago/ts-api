import{ Project, IProject } from './project.interface'
const model = require('../../models')

export class ProjectService implements IProject {
    public id: number
    public name: string
    public status: string

    constructor() {

    }

    public static async create(user: IProject): Promise<IProject> {
        return model.Project.create(user)
     }
    
    public static async getAll(): Promise<IProject[]>  { 
        return model.Project.findAll(
            { order: ['name'] }
        ).then(Project.createProjects)
    }
    
    public static async getById(id: number): Promise<IProject> { 
        return model.Project.findOne(
            { where: { id } }
        ).then(Project.createProject)
    }

}