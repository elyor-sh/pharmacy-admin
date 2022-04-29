import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import {Button, ButtonProps} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useStore} from "../../store";

interface AddButtonProps {
    bgcolor?: string
    textcolor?: string
}

const AddButton = styled(Button)<AddButtonProps>(({textcolor, bgcolor}) => ({
    backgroundColor: bgcolor ? bgcolor : 'rgba(255,255,255,0.04)',
    borderRadius: 0,
    padding: '6px 16px 4px',
    boxShadow: 'none',
    color: textcolor ? textcolor : '#738491',
    '&:hover': {
        backgroundColor: bgcolor ? bgcolor : 'rgba(255,255,255,0.04)'
    }
}))

interface IAddButtonPh extends ButtonProps {
    children?: React.ReactNode
}

const AddButtonPh:FC<IAddButtonPh> = ({children, ...props}) => {

    const {themeStore} = useStore()

    return (
        <AddButton
         startIcon={<AddIcon />}
         variant={'contained'}
         textcolor={themeStore.textColor}
         bgcolor={themeStore.btnBgColor}
         {...props}
        >
            {children}
        </AddButton>
    );
};

export { AddButtonPh };