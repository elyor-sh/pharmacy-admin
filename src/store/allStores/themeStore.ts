import {makeAutoObservable} from "mobx";

export class ThemeStore {

    openMenu: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    setOpenMenu (open: boolean) {
        this.openMenu = open
    }
}