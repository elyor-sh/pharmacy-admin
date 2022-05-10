import React, {FC} from 'react';
import {Grid} from "@mui/material";
import {TypographyPh} from "../Molecules/TypographyPh";
import {TextFieldPh} from "../Molecules/TextFieldPh";

interface SettingsItemProps {
    title: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SettingsItem: FC<SettingsItemProps> = ({title, value, onChange}) => {
    return (
        <Grid item xs={6} sx={{marginBottom: '10px'}}>
            <TypographyPh sx={{marginBottom: '10px', fontSize: '12px'}}>
                {title}
            </TypographyPh>
            <TextFieldPh
                fullWidth
                type="color"
                value={value}
                onChange={onChange}
            />
        </Grid>
    );
};

export default SettingsItem;