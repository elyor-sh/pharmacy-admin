import React, {FC, ReactNode} from 'react';
import {Typography, TypographyProps} from "@mui/material";
import {styled} from "@mui/material/styles";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";

interface TypographyPhProps extends TypographyProps{
    children?: ReactNode,
    component?: React.ReactNode;
}

interface StyledPhProps extends TypographyProps{
    textcolor: string
}

const StyledTypography = styled(Typography)<StyledPhProps>(({textcolor}) => ({
    color: textcolor
}))

const TypographyPh:FC<TypographyPhProps> = observer(({children, ...props}) => {
    const {themeStore} = useStore()
    return (
        <StyledTypography
            textcolor={themeStore.textColor}
            {...props}
        >
            {children}
        </StyledTypography>
    );
});

export { TypographyPh};