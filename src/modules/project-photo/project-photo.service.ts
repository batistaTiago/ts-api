import{ ProjectPhoto, IProjectPhoto } from './project-photo.interface'
import { IProject } from '../project/project.interface';

const model = require('../../models')

export class ProjectPhotoService implements IProjectPhoto {
    photoId: number;
    photoURL: string;
    projectId?: number;
    project?: IProject;


    constructor() {

    }

    public static async create(user: IProjectPhoto): Promise<IProjectPhoto> {
        return model.ProjectPhoto.create(user)
     }
    
    public static async getAll(): Promise<IProjectPhoto[]>  { 
        return model.ProjectPhoto.findAll(
            { order: ['projectId'] }
        ).then(ProjectPhoto.createProjectPhotos)
    }
    
    public static async getById(id: number): Promise<IProjectPhoto> { 
        return model.ProjectPhoto.findOne(
            { where: { id } }
        ).then(ProjectPhoto.createProjectPhoto)
    }

}