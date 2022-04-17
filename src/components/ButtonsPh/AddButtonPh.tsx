import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import {Button, ButtonProps} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddButton = styled(Button)(() => ({
    backgroundColor: '#9757fa',
    borderRadius: 0,
    padding: '6px 16px 4px',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#9757fa'
    }
}))

interface IAddButtonPh extends ButtonProps {
    children?: React.ReactNode
}

const AddButtonPh:FC<IAddButtonPh> = ({children, ...props}) => {
    return (
        <AddButton
         startIcon={<AddIcon />}
         variant={'contained'}
         {...props}
        >
            {children}
        </AddButton>
    );
};

export { AddButtonPh };