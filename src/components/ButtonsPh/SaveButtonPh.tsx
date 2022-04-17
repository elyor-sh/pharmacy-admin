import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import {Button, ButtonProps} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";


const SaveButton = styled(Button)<{accentcolor?: string}>(({accentcolor}) => ({
    backgroundColor: accentcolor,
    borderRadius: 0,
    padding: '6px 16px 4px',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: accentcolor
    }
}))

interface ISaveButtonPh extends ButtonProps {
    children?: React.ReactNode
}

const SaveButtonPh:FC<ISaveButtonPh> = observer(({children, ...props}) => {

    const {themeStore} = useStore()

    return (
        <SaveButton
            variant={'contained'}
            {...props}
          accentcolor={themeStore.accentColor}
        >
            {children}
        </SaveButton>
    );
});

export { SaveButtonPh };