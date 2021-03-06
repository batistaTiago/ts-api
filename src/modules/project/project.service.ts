import { Project, IProject } from './project.interface'

const model = require('../../models')

export class ProjectService implements IProject {
    public projectId: number
    public titulo: string
    public gitUrl: string
    public imageUrls: string[]
    public techUsed: string[]

    public status?: string
    public destaque?: boolean
    public description?: string
    public deployUrl?: string
    public percentageComplete?: number

    constructor() {

    }

    public static async create(project: IProject): Promise<IProject> {
        return model.Project.create(project)
    }

    public static async getAll(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                order: ['titulo'],
                include: [
                    { model: model.ProjectPhoto },
                    {
                        model: model.Tech,
                        as: 'tech'
                    }
                ]
            }
        ).then(Project.createProjects)
    }

    public static async getFeatured(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: true },
                order: ['titulo'],
                include: [
                    { model: model.ProjectPhoto },
                    {
                        model: model.Tech,
                        as: 'tech'
                    }
                ]
            }).then(Project.createProjects)
    }

    public static async getMinor(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: false },
                order: ['titulo'],
                include: [
                    { model: model.ProjectPhoto },
                    {
                        model: model.Tech,
                        as: 'tech'
                    }
                ]
            }
        ).then(Project.createProjects)
    }

    public static async getById(id: number): Promise<IProject> {
        return model.Project.findOne(
            {
                where: { projectId: id },
                order: ['titulo'],
                include: [
                    { model: model.ProjectPhoto },
                    {
                        model: model.Tech,
                        as: 'tech'
                    }
                ]
            }
        ).then(Project.createProject)
    }

}