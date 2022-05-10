import * as React from 'react';
import {observer} from "mobx-react-lite";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {Grid, IconButton, Button} from "@mui/material";
import {useStore} from "../../store";
import {MuiDrawer} from "./styled";
import {TypographyPh} from "../Molecules/TypographyPh";
import Settings from "./settings";


const ThemeSettings = observer(() =>  {

    const {themeStore} = useStore()

    return (
        <>
            <Button onClick={(e: React.KeyboardEvent | React.MouseEvent) => themeStore.setSettingsDrawer(e,true)}>left</Button>
            <MuiDrawer
                anchor={'left'}
                open={themeStore.settingsDrawer}
                onClose={(e: React.KeyboardEvent | React.MouseEvent) => themeStore.setSettingsDrawer(e,false)}
                bgcolor={themeStore.bgColor}
                textcolor={themeStore.textColor}
            >
                <Grid container
                      sx={{justifyContent: 'flex-end', margin: '10px 0px 0px'}}
                >
                    <IconButton
                        onClick={(e) => themeStore.setSettingsDrawer(e, false)}
                    >
                        <CloseOutlinedIcon sx={{color: themeStore.textColor}}/>
                    </IconButton>
                </Grid>
                <Grid
                    container
                    sx={{justifyContent: 'center', margin: '10px 0px'}}
                >

                    <TypographyPh
                        sx={{fontWeight: 600}}
                    >
                        Sozlamalar
                    </TypographyPh>
                </Grid>

                <Settings />
            </MuiDrawer>
        </>
    );
})

export {ThemeSettings}