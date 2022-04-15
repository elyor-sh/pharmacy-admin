import {makeAutoObservable, runInAction} from "mobx";
import {IUser} from "../types";
import {apiAuthLogin} from "../../api/utils";

export interface ILoginParams {
    email: string
    password: string
    username: string
}

export class CurrentUserStore {

    user: IUser | null = localStorage.getItem('currentUserPh') ? JSON.parse(localStorage.getItem('currentUserPh') || '{}') : null
    token: string = localStorage.getItem('token') || ''
    error: string | null = null

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
            runInAction(() => {
                this.error = e?.response.data.message
            })
        }
    }

    logout () {
        localStorage.clear()
        sessionStorage.clear()

        this.user = null
        this.token = ''
    }

    setError (error: string | null){
        this.error = error
    }
}