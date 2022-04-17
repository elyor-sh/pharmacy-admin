import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

interface IBaseActions {
    baseUrl: string
    id: number
}

export const EditButtonTable: FC<IBaseActions> = ({baseUrl, id})  => {

    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`${baseUrl}/${id}`)
    }

    return (
        <Tooltip title="Tahrirlash">
        <IconButton onClick={handleClick}>
            <EditIcon />
        </IconButton>
        </Tooltip>
    )
}

