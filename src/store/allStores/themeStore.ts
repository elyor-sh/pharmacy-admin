import {makeAutoObservable} from "mobx";
import * as React from "react";
import {Colors} from "../../helpers/colors";
import {encryptLocalStorage} from "../../helpers/storage";
import {IThemesSchema} from "../../models/schemas/themesSchema"

const {dark, white} = Colors

const theme = encryptLocalStorage.getItem<IThemesSchema | undefined>('theme')

export class ThemeStore {

    darkMode: boolean = theme?.darkMode !== 'false'

    accentColor: string = theme?.accentColor || this.darkMode ? dark.accentColor : white.accentColor
    bgColor: string = theme?.bgColor || this.darkMode ? dark.bgColor : white.bgColor
    textColor: string = theme?.textColor || this.darkMode ? dark.textColor : white.textColor
    btnBgColor: string = theme?.btnBgColor || this.darkMode ? dark.btnBgColor : white.btnBgColor

    tableCellBorder: string = theme?.tableCellBorder || this.darkMode ?  dark.tableCellBorder : white.tableCellBorder
    tableFontColor: string = theme?.tableFontColor || this.darkMode ? dark.tableFontColor : white.tableFontColor
    tableAssetColor: string = theme?.tableAssetColor || this.darkMode ? dark.tableAssetColor : white.tableAssetColor

    headerBgColor: string = theme?.headerBgColor || this.darkMode ? dark.headerBgColor : white.headerBgColor
    headerTextColor: string = theme?.headerTextColor || this.darkMode ? dark.headerTextColor : white.headerTextColor
    headerAssetColor: string = theme?.headerAssetColor || this.darkMode ? dark.headerAssetColor : white.headerAssetColor

    navBarBgColor: string = theme?.navBarBgColor || this.darkMode ? dark.navBarBgColor : white.navBarBgColor
    navBarTextColor: string = theme?.navBarTextColor || this.darkMode ? dark.navBarTextColor : white.navBarTextColor
    navBarAssetColor: string = theme?.navBarAssetColor || this.darkMode ? dark.navBarAssetColor : white.navBarAssetColor

    openMenu: boolean = true
    settingsDrawer: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    save () {
        this.saveToLocalStorage()
    }

    private saveToLocalStorage () {
        const theme = {
            darkMode: this.darkMode,
            bgColor: this.bgColor,
            accentColor: this.accentColor,
            textColor: this.textColor,
            btnBgColor: this.btnBgColor,
            tableCellBorder: this.tableCellBorder,
            tableFontColor: this.tableFontColor,
            tableAssetColor: this.tableAssetColor,
            headerBgColor: this.headerBgColor,
            headerTextColor: this.headerTextColor,
            headerAssetColor: this.headerAssetColor,
            navBarBgColor: this.navBarBgColor,
            navBarTextColor: this.navBarTextColor,
            navBarAssetColor: this.navBarAssetColor
        }

        encryptLocalStorage.setItem('theme', JSON.stringify(theme))
    }

    private setDarkColors () {
        this.accentColor = dark.accentColor
        this.bgColor = dark.bgColor
        this.textColor = dark.textColor
        this.btnBgColor = dark.btnBgColor

        this.tableCellBorder = dark.tableCellBorder
        this.tableFontColor = dark.tableFontColor
        this.tableAssetColor = dark.tableAssetColor

        this.headerBgColor = dark.headerBgColor
        this.headerTextColor = dark.headerTextColor
        this.headerAssetColor = dark.headerAssetColor

        this.navBarBgColor = dark.navBarBgColor
        this.navBarTextColor = dark.navBarTextColor
        this.navBarAssetColor = dark.navBarAssetColor
    }

    private setWhiteColors () {
        this.accentColor = white.accentColor
        this.bgColor = white.bgColor
        this.textColor = white.textColor
        this.btnBgColor = white.btnBgColor

        this.tableCellBorder = white.tableCellBorder
        this.tableFontColor = white.tableFontColor
        this.tableAssetColor = white.tableAssetColor

        this.headerBgColor = white.headerBgColor
        this.headerTextColor = white.headerTextColor
        this.headerAssetColor = white.headerAssetColor

        this.navBarBgColor = white.navBarBgColor
        this.navBarTextColor = white.navBarTextColor
        this.navBarAssetColor = white.navBarAssetColor
    }

    setDarkMode (mode: boolean) {
        this.darkMode = mode

        if(mode){
            this.setDarkColors()
        }else{
            this.setWhiteColors()
        }

        this.saveToLocalStorage()
    }

    setOpenMenu (open: boolean) {this.openMenu = open}

    setTextColor (color: string) {this.textColor = color}
    setBgColor (color: string) {this.bgColor = color}
    setAccentColor (color: string) {this.accentColor = color}
    setBtnBgColor (color: string) {this.btnBgColor = color}

    setTableCellBorder (color: string) { this.tableCellBorder = color }
    setTableFontColor (color: string) { this.tableFontColor = color }
    setTableAssetColor (color: string) { this.tableAssetColor = color }

    setHeaderBgColor (color: string){ this.headerBgColor = color }
    setHeaderTextColor (color: string){ this.headerTextColor = color }
    setHeaderAssetColor (color: string){ this.headerAssetColor = color }

    setNavBarBgColor (color: string){ this.navBarBgColor = color }
    setNavBarTextColor (color: string){ this.navBarTextColor = color }
    setNavBarAssetColor (color: string){ this.navBarAssetColor = color }

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