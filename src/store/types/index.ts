// User
export interface IUserRoles {
    id: number | string
    roleId: number | string
    userId: number | string
}

export interface IRoles {
    id: number | string
    value: string
    description: string
    createdAt: string
    updatedAt: string
    UserRoles: IUserRoles
}

export interface IUser {
    id: number | string
    email: string
    username: string
    banned: boolean
    banReason: string
    createdAt: string
    updatedAt: string
    roles: IRoles[]
}

// Categories

export interface ICategory {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

export interface IPostCategoryParams {
    name: string
}

export interface IPutCategoryParams extends IPostCategoryParams {
    id: number
}