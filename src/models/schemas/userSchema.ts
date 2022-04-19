import {IRolesSchema} from "./rolesSchema";


export interface IUserSchema {
    id: number | string
    email: string
    username: string
    banned: boolean
    banReason: string
    createdAt: string
    updatedAt: string
    roles: IRolesSchema
}