import { Project, IProject } from './project.interface'
import { IProjectPhoto } from '../project-photo/project-photo.interface';

const model = require('../../models')

export class ProjectService implements IProject {
    public projectId: number
    public titulo: string
    public gitURL: string
    public photos: IProjectPhoto[]

    public status?: string
    public destaque?: boolean
    public descricao?: string
    public deployURL?: string
    public percentageComplete?: number

    constructor() {

    }

    public static async create(user: IProject): Promise<IProject> {
        return model.Project.create(user)
    }

    public static async getAll(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }
        ).then(Project.createProjects)
    }

    public static async getFeatured(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: true },
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }
        ).then(Project.createProjects)
    }

    public static async getMinor(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: false },
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }
        ).then(Project.createProjects)
    }

    public static async getById(id: number): Promise<IProject> {
        return model.Project.findOne(
            {
                where: { projectId: id },
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }
        ).then(Project.createProject)
    }

}