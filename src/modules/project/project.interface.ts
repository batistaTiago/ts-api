export interface IProject {
    readonly projectId: number
    titulo: string
    gitURL: string
    photos: string[]


    status?: string
    destaque?: boolean
    descricao?: string
    deployURL?: string
    percentageComplete?: number
}


export class Project {
    public static createProject(data: any): IProject { 
        return { 
            projectId: data.projectId, 
            titulo: data.titulo, 
            gitURL: data.gitURL, 
            photos: data.ProjectPhotos.map((element) => element.imageURL), 
            status: data.status, 
            destaque: data.destaque, 
            descricao: data.descricao, 
            deployURL: data.deployURL, 
            percentageComplete: data.percentageComplete }
    }

    public static createProjects(data: any[]): IProject[] {
        return data.map(Project.createProject)
    }
}