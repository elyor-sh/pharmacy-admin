import React from 'react';
import {FormControl, InputLabel, InputLabelProps, Select, SelectProps} from "@mui/material";
import {styled} from "@mui/material/styles";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";

interface SelectPhProps extends SelectProps {
    fullWidth?: boolean
}

interface IStyledSelect extends SelectProps {
    textcolor?: string
}

const StyledSelect = styled(Select)<IStyledSelect>(({textcolor}) => ({
    color: textcolor,
    '& fieldset.MuiOutlinedInput-notchedOutline, &:hover fieldset.MuiOutlinedInput-notchedOutline, &:focus fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: textcolor,
        borderWidth: '1px'
    },
    '& svg.MuiSelect-icon': {
        color: textcolor,
    }
}))

interface IInputLabel extends InputLabelProps {
    textcolor?: string
}

const StyledLabel = styled(InputLabel)<IInputLabel>(({textcolor}) => ({
    color: textcolor,
    '&.Mui-focused': {
        color: `${textcolor}`,
    }
}))


const SelectPh: React.FC<SelectPhProps> = observer(({fullWidth,...props}) => {

    const {themeStore} = useStore()

    return (
            <FormControl fullWidth={!fullWidth}>
                <StyledLabel textcolor={themeStore.textColor}>{props.label}</StyledLabel>
                <StyledSelect
                    textcolor={themeStore.textColor}
                    {...props}
                >
                    {
                       props.children
                    }
                </StyledSelect>
            </FormControl>
    );
});

export { SelectPh };