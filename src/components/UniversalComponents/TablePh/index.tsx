import React, {FC} from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {TableHeadPh} from "./TableHeadPh/TableHeadPh";
import {TableBodyPh} from "./TableBodyPh/TableBodyPh";
import {observer} from "mobx-react-lite";

export interface IHeadCells {
    title: string
    align?: 'center' | 'right' | 'left'
}

export interface IRowCells {
    contentKey: string
    align: 'center' | 'right' | 'left'
    type: string
    onClick?: () => void
}

interface ITablePh {
    baseUrl: string
    data: any
    rowCells: IRowCells[]
    headCells: IHeadCells[]
    handleDelete: (id: number) => any
}

export const TablePh: FC<ITablePh> = observer(({baseUrl, data, rowCells, headCells, handleDelete}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeadPh headCells={headCells} />
                <TableBodyPh rowCells={rowCells} rows={data} baseUrl={baseUrl} handleDelete={handleDelete}/>
            </Table>
        </TableContainer>
    );
})