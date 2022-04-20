import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material";
import classes from './EditPh.module.scss'
import {SaveButtonPh} from "../../ButtonsPh/SaveButtonPh";
import {CancelButtonPh} from "../../ButtonsPh/CancelButtonPh";

interface IInputs {
    elementType?: string
    type?: string
    name: string
    onChange: (e: any) => void
    value: any
    label?: string
    placeholder?: string
    attrs?: any
    options?:any
    valueKey?: string
    labelKey?: string
}

interface IEditPh {
    width?: string | number
    inputs: IInputs[]
    onSaveClick?: () => void
    resetClick?: () => void
}

const EditPh: FC<IEditPh> = ({width, inputs, onSaveClick, resetClick}) => {

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate(-1)
        if(resetClick){
            resetClick()
        }
    }

    const drawElements = (element: IInputs) => {
        switch (element.elementType) {
            case undefined:
                return <TextField
                    fullWidth
                    value={element.value}
                    name={element.name}
                    onChange={element.onChange}
                    type={element.type ? element.type : 'text'}
                    label={element.label}
                    placeholder={element.placeholder}
                    autoFocus={true}
                />
            case 'file':
                return <TextField
                    fullWidth
                    name={element.name}
                    onChange={element.onChange}
                    type={'file'}
                    label={element.label}
                    value={element.value}
                    {...element.attrs}
                />
            case 'textarea':
                return <textarea
                    name={element.name}
                    value={element.value}
                    onChange={element.onChange}
                    className={classes.textarea}
                    placeholder={element.placeholder}
                />
            case 'checkbox' :
                return <FormControlLabel control={
                    <Switch
                        name={element.name}
                        checked={element.value}
                        onChange={element.onChange}
                    />
                }
                 label={element.label}
                />
            case 'select':
               return <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{element.label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={element.value}
                        label={element.label}
                        onChange={element.onChange}
                        name={element.name}
                    >
                        {
                            element.options.map((option: any) => {
                                return  <MenuItem
                                    value={option[element?.valueKey || '']}
                                    key={option[element?.valueKey || '']}
                                >
                                    {option[element?.labelKey || '']}
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            default:
                return null
        }
    }

    return (
        <Grid container sx={{width: width ? width : '100%'}}>
            <Grid container spacing={2}>
                {
                    inputs.map(input => {
                        return (
                            <Grid key={input.name} item xs={6} sx={{marginBottom: '20px'}}>
                                {drawElements(input)}
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container sx={{justifyContent: 'flex-end', marginTop: '20px'}}>
                <CancelButtonPh
                    onClick={handleCancel}
                    sx={{margin: '0px 20px'}}
                >
                    Bekor qilish
                </CancelButtonPh>
                <SaveButtonPh
                    onClick={onSaveClick}
                >
                    Saqlash
                </SaveButtonPh>
            </Grid>
        </Grid>
    );
};

export {EditPh};