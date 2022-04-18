import React, {FC} from 'react';
import {Grid, Box, Modal, Typography} from "@mui/material";
import {CancelButtonPh} from "../../ButtonsPh/CancelButtonPh";
import {SaveButtonPh} from "../../ButtonsPh/SaveButtonPh";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

interface IModalPh {
    open: boolean
    title: string
    handleClose: () => void
    handleSave: () => void
    children?: React.ReactNode
}

export const ModalPh:FC<IModalPh> = ({ open,title, handleClose, handleSave, children}) => {

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                   <Typography component="div" sx={{margin: '20px 0px'}} >
                       {children}
                   </Typography>
                    <Grid container sx={{justifyContent: 'flex-end'}}>
                       <CancelButtonPh
                           sx={{margin: '0px 10px'}}
                        onClick={handleClose}
                       >
                           Bekor qilish
                       </CancelButtonPh>
                        <SaveButtonPh
                            onClick={handleSave}
                        >
                            Qo'shish
                        </SaveButtonPh>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}