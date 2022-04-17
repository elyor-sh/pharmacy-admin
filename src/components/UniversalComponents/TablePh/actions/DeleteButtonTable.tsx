import {FC} from "react";
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface IBaseActions {
    id: number
    handleDelete: (id: number) => any
}

export const DeleteButtonTable: FC<IBaseActions> = ({ id, handleDelete})  => {

    return (
        <Tooltip title="O'chirib yuborish">
        <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon />
        </IconButton>
        </Tooltip>
    )
}