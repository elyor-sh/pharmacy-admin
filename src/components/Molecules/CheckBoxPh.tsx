import React from 'react';
import {FormControlLabel, FormControlLabelProps, Switch, SwitchProps} from "@mui/material";
import {styled} from "@mui/material/styles";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";


interface CheckBoxPhProps extends SwitchProps {
    label?: string
}

interface IStyledFormLabel extends FormControlLabelProps{
    textcolor?: string
    accentcolor?: string
}

const StyledFormControlLabel = styled(FormControlLabel)<IStyledFormLabel>(({textcolor, accentcolor}) => ({
    color: textcolor,
    '& span.MuiFormControlLabel-label': {
        color: textcolor
    },
    '& span.Mui-checked span.MuiSwitch-thumb': {
        background: accentcolor
    },
    '& span.Mui-checked+span.MuiSwitch-track': {
        background: accentcolor
    }
}))

const CheckBoxPh: React.FC<CheckBoxPhProps> = observer(({...props}) => {

    const {themeStore} = useStore()

    return (
        <StyledFormControlLabel
            textcolor={themeStore.textColor}
            accentcolor={themeStore.accentColor}
            control={
            <Switch
                {...props}
            />
        }
                          label={props.label}
        />
    );
});

export {CheckBoxPh};