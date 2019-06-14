import { IProject } from "../project/project.interface";

export interface IProjectPhoto {
    readonly photoId: number
    photoURL: string
    projectId?: number
    project?: IProject
}


export class ProjectPhoto {
    public static createProjectPhoto({ photoId, photoURL }: any): IProjectPhoto { 
        return { photoId, photoURL }
    }

    public static createProjectPhotos(data: any[]): IProjectPhoto[] {
        return data.map(ProjectPhoto.createProjectPhoto)
    }
}