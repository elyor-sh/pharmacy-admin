import {Grid} from "@mui/material";
import {IRowCells} from "../index";
import {EditButtonTable} from "../actions/EditButtonTable";
import {DeleteButtonTable} from "../actions/DeleteButtonTable";
import {baseURL} from "../../../../api/axios";
import {noImage} from "../../../../assets/images";


export const drawCell = (row: any, cell: IRowCells, baseUrl: string, handleDelete: (id: number) => any) => {
    switch (cell.type){
        case 'text':
            return row[cell.contentKey]
        case 'date':
            let timeStamp = new Date(row[cell.contentKey]);
            const addZero = (datePart: number) => datePart.toString().padStart(2, '0');
            let dateValue = `${addZero(timeStamp.getDate())}.${addZero(timeStamp.getMonth() + 1)}.${timeStamp.getFullYear()}`;
            let timeValue = `${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}`;

            return dateValue + ' ' + timeValue;

        case 'baseActions':
            return <>
                <EditButtonTable
                    baseUrl={baseUrl}
                    id={row.id}
                />
                <DeleteButtonTable
                    id={row.id}
                    handleDelete={handleDelete}
                />
            </>
        case 'image':

            if(!row[cell.contentKey]){
                return <>
                    <img src={noImage} width={'50px'} height={'50px'} alt="img"/>
                </>
            }

            return <>
                <img src={`${row[cell.contentKey]}`} width={'50px'} height={'50px'} alt="img"/>
            </>

        default:
            return null
    }
}