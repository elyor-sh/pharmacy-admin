import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {FormControlLabel, Grid, Switch, TextField} from "@mui/material";
import classes from './EditPh.module.scss'
import {SaveButtonPh} from "../../ButtonsPh/SaveButtonPh";
import {CancelButtonPh} from "../../ButtonsPh/CancelButtonPh";

interface IInputs {
    elementType?: string
    type?: string
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    value: any
    label?: string
    placeholder?: string
    attrs?: any
}

interface IEditPh {
    width?: string | number
    inputs: IInputs[]
    onSaveClick?: () => void
}

const EditPh: FC<IEditPh> = ({width, inputs, onSaveClick}) => {

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate(-1)
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