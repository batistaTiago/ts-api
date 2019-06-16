import { Project, IProject } from './project.interface'

const model = require('../../models')

export class ProjectService implements IProject {
    public projectId: number
    public titulo: string
    public gitURL: string
    public photos: string[]

    public status?: string
    public destaque?: boolean
    public descricao?: string
    public deployURL?: string
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
                include: [{ model: model.ProjectPhoto }]
            }
        ).then((data) => {
            data.forEach(element => {
                console.log(element.ProjectPhotos)
            });
            return Project.createProjects(data)
        })
    }

    public static async getFeatured(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: true },
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }).then(Project.createProjects)
        // ).then((data) => {
        //     data.forEach(element => {
        //         element.ProjectPhotos.forEach(photoElement => {
        //             console.log(photoElement.dataValues.imageURL)
        //         })
        //     });
        //     return Project.createProjects(data)
        // })
    }

    public static async getMinor(): Promise<IProject[]> {
        return model.Project.findAll(
            {
                where: { destaque: false },
                order: ['titulo'],
                include: [{ model: model.ProjectPhoto }]
            }
        ).then((data) => {
            data.forEach(element => {
                console.log(element.ProjectPhotos)
            });
            return Project.createProjects(data)
        })
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