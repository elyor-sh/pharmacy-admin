import * as React from 'react';
import {Outlet} from 'react-router-dom'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import {Box, CssBaseline} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";
import HeaderPh from "./HeaderPh";
import {SidebarPh} from "./SidebarPh";
import {Wrapper} from "./ui";

const drawerWidth = 240;

const openedMixin = (theme: Theme, bgcolor: string): CSSObject => ({
    width: drawerWidth,
    background: bgcolor,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme, bgcolor: string): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    background: bgcolor,
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')<{bgcolor: string}>(({ theme, bgcolor }) => ({
    background: bgcolor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<{bgcolor: string}>(
    ({ theme, open, bgcolor}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme, bgcolor),
            '& .MuiDrawer-paper': openedMixin(theme, bgcolor),
        }),
        ...(!open && {
            ...closedMixin(theme, bgcolor),
            '& .MuiDrawer-paper': closedMixin(theme, bgcolor),
        })
    }),
);


export const LayoutPh = observer(() => {

    const {themeStore} = useStore()

    return (
        <Wrapper bgColor={themeStore.bgColor}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HeaderPh/>
            <Drawer variant="permanent" open={themeStore.openMenu} bgcolor={themeStore.bgColor}>
                <SidebarPh />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, flex: '1 1 auto' }}>
                <DrawerHeader bgcolor={themeStore.bgColor}/>
               <Outlet />
            </Box>
        </Box>
        </Wrapper>
    );
})