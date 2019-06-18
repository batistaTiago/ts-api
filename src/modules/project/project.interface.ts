export interface IProject {
    readonly projectId: number
    titulo: string
    gitUrl: string
    imageUrls: string[]


    status?: string
    destaque?: boolean
    description?: string
    deployUrl?: string
    percentageComplete?: number
}


export class Project {
    public static createProject(data: any): IProject { 
        return { 
            projectId: data.projectId, 
            titulo: data.titulo, 
            gitUrl: data.gitUrl, 
            imageUrls: data.ProjectPhotos.map((element) => element.imageURL), 
            status: data.status, 
            destaque: data.destaque, 
            description: data.description, 
            deployUrl: data.deployUrl, 
            percentageComplete: data.percentageComplete 
        }
    }

    public static createProjects(data: any[]): IProject[] {
        return data.map(Project.createProject)
    }
}