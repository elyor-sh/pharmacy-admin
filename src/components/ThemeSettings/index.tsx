import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";


const ThemeSettings = observer(() =>  {

    const {themeStore} = useStore()

    return (
        <>
            <Button onClick={(e: React.KeyboardEvent | React.MouseEvent) => themeStore.setSettingsDrawer(e,true)}>left</Button>
            <Drawer
                anchor={'left'}
                open={themeStore.settingsDrawer}
                onClose={(e: React.KeyboardEvent | React.MouseEvent) => themeStore.setSettingsDrawer(e,false)}
                sx={{zIndex: 100000000}}
            >
                xyz
            </Drawer>
        </>
    );
})

export {ThemeSettings}