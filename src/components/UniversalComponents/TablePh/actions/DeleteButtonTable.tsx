import {FC} from "react";
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useStore} from "../../../../store";

interface IBaseActions {
    id: number
    handleDelete: (id: number) => any
}

export const DeleteButtonTable: FC<IBaseActions> = ({ id, handleDelete})  => {

    const {themeStore} = useStore()

    return (
        <Tooltip title="O'chirib yuborish">
        <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon sx={{color: themeStore.textColor ? themeStore.textColor : '#738491'}}/>
        </IconButton>
        </Tooltip>
    )
}