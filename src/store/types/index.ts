// User

//      "id": 4,
//     "email": "superadmin@mail.ru",
//     "username": "superadmin",
//     "banned": false,
//     "banReason": null,
//     "createdAt": "2022-04-11T11:34:35.652Z",
//     "updatedAt": "2022-04-11T11:34:35.652Z",
//     "roles": [
//     {
//         "id": 2,
//         "value": "ADMIN",
//         "description": "Super Admin",
//         "createdAt": "2022-04-11T11:17:47.281Z",
//         "updatedAt": "2022-04-11T11:17:47.281Z",
//         "UserRoles": {
//             "id": 1,
//             "roleId": 2,
//             "userId": 4
//         }
//     }
// ]

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
    roles: IRoles
}