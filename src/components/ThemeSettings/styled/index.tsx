import {styled} from "@mui/material/styles";
import Drawer, {DrawerProps} from "@mui/material/Drawer";
import {alpha, Typography, TypographyProps} from "@mui/material";

interface MuiDrawerProps extends DrawerProps{
    bgcolor: string
    textcolor?: string
}

export const MuiDrawer = styled(Drawer)<MuiDrawerProps>(({bgcolor, textcolor}) => ({
    zIndex: 100000000,
    '& .MuiPaper-root': {
        background: alpha(bgcolor, 1),
        width: '320px',
        color: textcolor,
        padding: '5px 10px'
    }
}))

interface TextProps extends TypographyProps {
    textcolor: string
}

export const Text = styled(Typography)<TextProps>(({textcolor}) => ({
    color: textcolor
}))