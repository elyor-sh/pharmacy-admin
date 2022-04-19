
// Categories

export interface ICategoriesSchema {
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