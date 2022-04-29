import React from 'react';
import {TextField, TextFieldProps} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";

interface ITextFieldPh {}

type TextFieldPhProps = ITextFieldPh & TextFieldProps


const TextFieldPh: React.FC<TextFieldPhProps> = observer(({...props}) => {

    const {themeStore} = useStore()

    return (
        <TextField
            sx={[
                {
                    color: themeStore.textColor,
                    '& .MuiOutlinedInput-root.Mui-focused fieldset, & .MuiInputBase-root:hover fieldset, & .MuiInputBase-root fieldset': {
                        border: `1px solid ${themeStore.tableCellBorder}`,
                    },
                    '& label.Mui-focused, & label, & input': {
                        color: `${themeStore.textColor}`
                    },
                }
            ]}
            {...props}
        />
    );
});

export { TextFieldPh };