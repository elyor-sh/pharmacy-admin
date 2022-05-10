import * as React from "react";
import {Link} from 'react-router-dom'
import {List, ListItemButton, ListItemIcon} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store";
import {sidebarLinks} from "./links";
import classes from './SidebarPh.module.scss'
import {ItemText} from "../ui";

export const SidebarPh = observer(() => {

    const {themeStore} = useStore()

    const {openMenu: open} = themeStore

    return (
        <List sx={{marginTop: '60px'}}>
            {sidebarLinks.map((link, index) => (
                <Link to={link.href} key={link.text} className={classes.link}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            color: themeStore.navBarTextColor,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                color: themeStore.navBarAssetColor
                            }}
                        >
                            {link.icon}
                        </ListItemIcon>
                        <ItemText open={open}>
                            {link.text}
                        </ItemText>
                    </ListItemButton>
                </Link>
            ))}
        </List>
    );
})