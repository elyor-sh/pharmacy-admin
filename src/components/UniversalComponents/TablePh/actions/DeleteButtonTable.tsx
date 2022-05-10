import {FC} from "react";
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useStore} from "../../../../store";
import {observer} from "mobx-react-lite";

interface IBaseActions {
    id: number
    handleDelete: (id: number) => any
}

export const DeleteButtonTable: FC<IBaseActions> = observer(({ id, handleDelete})  => {

    const {themeStore} = useStore()

    return (
        <Tooltip title="O'chirib yuborish">
        <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon sx={{color: themeStore.tableAssetColor}}/>
        </IconButton>
        </Tooltip>
    )
})