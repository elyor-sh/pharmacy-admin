import {makeAutoObservable} from "mobx";
import * as React from "react";

export class ThemeStore {

    accentColor: string = '#81de8c'
    bgColor: string = '#202B33'
    textColor: string = '#738491'
    btnBgColor: string = 'rgba(255,255,255,0.04)'
    tableCellBorder: string = 'rgb(255 255 255 / 15%)'

    openMenu: boolean = true
    settingsDrawer: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setOpenMenu (open: boolean) {
        this.openMenu = open
    }

    // setSettingsDrawer (open: boolean) {
    //     this.settingsDrawer = open
    // }

    setSettingsDrawer(event: React.KeyboardEvent | React.MouseEvent, open: boolean){
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                this.settingsDrawer = open
            };
}