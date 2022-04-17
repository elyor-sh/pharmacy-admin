import {makeAutoObservable} from "mobx";

export class ThemeStore {

    openMenu: boolean = true
    accentColor: string = '#81de8c'

    constructor() {
        makeAutoObservable(this)
    }

    setOpenMenu (open: boolean) {
        this.openMenu = open
    }
}