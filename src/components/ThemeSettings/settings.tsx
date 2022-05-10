import React from 'react';
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";
import SettingsItem from "./item";

const Settings = observer(() => {

    const {themeStore} = useStore()

    const setAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setAccentColor(e.target.value)
    }

    const setBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setBgColor(e.target.value)
    }

    const setTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setTextColor(e.target.value)
    }

    const setBtnBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setBtnBgColor(e.target.value)
    }

    const setTableCellBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setTableCellBorder(e.target.value)
    }

    const setTableFontColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setTableFontColor(e.target.value)
    }

    const setTableAssetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setTableAssetColor(e.target.value)
    }

    const setHeaderBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setHeaderBgColor(e.target.value)
    }

    const setHeaderTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setHeaderTextColor(e.target.value)
    }

    const setHeaderAssetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setHeaderAssetColor(e.target.value)
    }

    const setNavBarBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setNavBarBgColor(e.target.value)
    }

    const setNavBarTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setNavBarTextColor(e.target.value)
    }

    const setNavBarAssetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setNavBarAssetColor(e.target.value)
    }

    return (
        <Grid container spacing={2}>
            <SettingsItem
                title="Matnlar rangi:"
                value={themeStore.textColor}
                onChange={setTextColor}
            />
            <SettingsItem
                title="Asosiy orqa fon rangi:"
                value={themeStore.bgColor}
                onChange={setBgColor}
            />
            <SettingsItem
                title="Tugmalar rangi:"
                value={themeStore.btnBgColor}
                onChange={setBtnBgColor}
            />
            <SettingsItem
                title="Jadvallar chegarasi:"
                value={themeStore.tableCellBorder}
                onChange={setTableCellBorder}
            />
            <SettingsItem
                title="Jadvallar harflari:"
                value={themeStore.tableFontColor}
                onChange={setTableFontColor}
            />
            <SettingsItem
                title="Jadvallar ikonkalari:"
                value={themeStore.tableAssetColor}
                onChange={setTableAssetColor}
            />
            <SettingsItem
                title="Bosh qism foni:"
                value={themeStore.headerBgColor}
                onChange={setHeaderBgColor}
            />
            <SettingsItem
                title="Bosh qism matnlari:"
                value={themeStore.headerTextColor}
                onChange={setHeaderTextColor}
            />
            <SettingsItem
                title="Bosh qism ikonkalari:"
                value={themeStore.headerAssetColor}
                onChange={setHeaderAssetColor}
            />
            <SettingsItem
                title="Yon qism foni:"
                value={themeStore.navBarBgColor}
                onChange={setNavBarBgColor}
            />
            <SettingsItem
                title="Yon qism matnlari:"
                value={themeStore.navBarTextColor}
                onChange={setNavBarTextColor}
            />
            <SettingsItem
                title="Yon qism ikonkalari:"
                value={themeStore.navBarAssetColor}
                onChange={setNavBarAssetColor}
            />
            <SettingsItem
                title="Asosiy rang:"
                value={themeStore.accentColor}
                onChange={setAccentColor}
            />
        </Grid>
    );
});

export default Settings;