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
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
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