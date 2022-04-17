import React, {FC} from 'react';
import {Button, ButtonProps} from "@mui/material";
import {styled} from "@mui/material/styles";

const CancelButton = styled(Button)(() => ({
    backgroundColor: '#969595',
    borderRadius: 0,
    padding: '6px 16px 4px',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#fd7c7c'
    }
}))

interface ICancelButtonPh extends ButtonProps {
    children?: React.ReactNode
}

const CancelButtonPh:FC<ICancelButtonPh> = ({children, ...props}) => {
    return (
        <CancelButton
            variant={'contained'}
            {...props}
        >
            {children}
        </CancelButton>
    );
};

export { CancelButtonPh };