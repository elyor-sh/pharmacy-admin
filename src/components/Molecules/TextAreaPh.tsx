import React, {TextareaHTMLAttributes} from 'react';
import {styled} from "@mui/material/styles";
import {useStore} from "../../store";
import {observer} from "mobx-react-lite";

interface TextAreaPhProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface IStyledTextArea extends TextAreaPhProps {
    color?: string
    bordercolor?: string
}

const StyledTextArea = styled('textarea')<IStyledTextArea>(({color, bordercolor}) => ({
    color: color,
    border: `1px solid ${bordercolor}`,
    outline: 'none',
    background: 'transparent',
    '&::placeholder': {
        color: color,
    }
}))

const TextAreaPh:React.FC<TextAreaPhProps> = observer(({...props}) => {

    const {themeStore} = useStore()

    return (
        <StyledTextArea
            bordercolor={themeStore.tableCellBorder}
            color={themeStore.textColor}
            {...props}
        />
    );
});

export { TextAreaPh };