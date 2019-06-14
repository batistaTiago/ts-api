import { IProjectPhoto } from "../project-photo/project-photo.interface";

export interface IProject {
    readonly projectId: number
    titulo: string
    gitURL: string
    photos: IProjectPhoto[]


    status?: string
    destaque?: boolean
    descricao?: string
    deployURL?: string
    percentageComplete?: number
}


export class Project {
    public static createProject({ projectId, titulo, gitURL, photos, status, destaque, descricao, deployURL, percentageComplete }: any): IProject { 
        return { projectId, titulo, gitURL, photos, status, destaque, descricao, deployURL, percentageComplete }
    }

    public static createProjects(data: any[]): IProject[] {
        return data.map(Project.createProject)
    }
}