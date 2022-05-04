import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useNavigate} from "react-router-dom";
import {useStore} from "../../../store";
import {styled} from "@mui/material/styles";

const settings = [
    {text: `Shaxsiy kabinet`, href: '/profile'},
    {text: `Chiqish`, href: '/login'},
]

const WrapperIcons = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100px'
}))

const HeaderActions = () => {

    const navigate = useNavigate()

    const {themeStore, currentUserStore} = useStore()

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = (href: string) => {
        setAnchorElUser(null);

        if(href === '/login'){
            currentUserStore.logout()
        }

        navigate(href)
    };

    return (
        <>
            <WrapperIcons>
            <IconButton onClick={(e: React.KeyboardEvent | React.MouseEvent) => themeStore.setSettingsDrawer(e, !themeStore.settingsDrawer)}>
                <SettingsOutlinedIcon sx={{color: themeStore.textColor}}/>
            </IconButton>

            <IconButton onClick={handleOpenUserMenu}>
                <AccountCircleOutlinedIcon sx={{color: themeStore.textColor}}/>
            </IconButton>
            </WrapperIcons>


            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.href} onClick={() => handleCloseUserMenu(setting.href)}>
                        <Typography textAlign="center">{setting.text}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export { HeaderActions };