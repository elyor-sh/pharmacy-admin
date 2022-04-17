import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import { Grid, TextField} from "@mui/material";
import {SaveButtonPh} from "../../ButtonsPh/SaveButtonPh";
import {CancelButtonPh} from "../../ButtonsPh/CancelButtonPh";

interface IInputs {
    type?: string
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: any
    label: string
    placeholder?: string
}

interface IEditPh {
    width?: string | number
    inputs: IInputs[]
    onSaveClick?: () => void
}

const EditPh:FC<IEditPh> = ({width, inputs, onSaveClick}) => {

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <Grid container sx={{width: width ? width : '100%'}}>
            <Grid container spacing={2}>
                {
                    inputs.map(input => {
                        return (
                            <Grid key={input.name} item xs={6} sx={{marginBottom: '20px'}}>
                                <TextField
                                    fullWidth
                                    value={input.value}
                                    name = {input.name}
                                    onChange={input.onChange}
                                    type={input.type ? input.type : 'string'}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    autoFocus={true}
                                 />
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

export { EditPh };