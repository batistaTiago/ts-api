export interface IProject {
    readonly id: number
    name: string
    status: string
}


export class Project {
    public static createProject({ id, name, status }: any): IProject { 
        return { id, name, status }
    }

    public static createProjects(data: any[]): IProject[] {
        return data.map(Project.createProject)
    }
}