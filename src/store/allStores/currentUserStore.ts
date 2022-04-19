import {makeAutoObservable, runInAction} from "mobx";
import {apiAuthLogin} from "../../api/utils";
import {IUserSchema} from "../../models/schemas/userSchema";

export interface ILoginParams {
    email: string
    password: string
    username: string
}

export class CurrentUserStore {

    user: IUserSchema | null = localStorage.getItem('currentUserPh') ? JSON.parse(localStorage.getItem('currentUserPh') || '{}') : null
    token: string = localStorage.getItem('token') || ''

    constructor() {
        makeAutoObservable(this)
    }

    async login (params: ILoginParams) {
        try {
            const response = await apiAuthLogin(params)

            runInAction(() => {
                this.user = response.data.user
                this.token = response.data.token
                localStorage.setItem('currentUserPh', JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)
            })
        }catch (e: any) {
            console.log(e?.response)
        }
    }

    logout () {
        localStorage.clear()
        sessionStorage.clear()

        this.user = null
        this.token = ''
    }
}