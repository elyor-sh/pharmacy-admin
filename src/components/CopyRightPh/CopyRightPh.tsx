import React from 'react';
import {Link, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import {TypographyPh} from "../Molecules/TypographyPh";

const CopyRightPh = observer((props: any) => {
    return (
        <TypographyPh variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" target="_blank" href="https://github.com/prElyor">
                Github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </TypographyPh>
    );
});

export { CopyRightPh };