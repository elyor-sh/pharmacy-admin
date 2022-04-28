import React from 'react';
import { IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {useStore} from "../../../store";
import {observer} from "mobx-react-lite";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    bgcolor?: string
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, bgcolor }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background: bgcolor,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `100%`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const HeaderPh = observer(() => {

    const {themeStore} = useStore()

    const {openMenu: open} = themeStore

    const handleDrawer = () => {
        themeStore.setOpenMenu(!open)
    }

    return (
        <>
            <AppBar position="fixed" open={open} bgcolor={themeStore.bgColor}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: 5,
                        }}
                    >
                        <MenuIcon sx={{color: themeStore.textColor}}/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{color: themeStore.textColor}}>
                        Logotip
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
});

export default HeaderPh;