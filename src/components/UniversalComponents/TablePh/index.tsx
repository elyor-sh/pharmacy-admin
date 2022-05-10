import React, {FC} from 'react';
import Table from '@mui/material/Table';
import {TableHeadPh} from "./TableHeadPh/TableHeadPh";
import {TableBodyPh} from "./TableBodyPh/TableBodyPh";
import {observer} from "mobx-react-lite";
import {TablePaginationPh} from "./TablePaginationPh";
import {useStore} from "../../../store";
import {StyledTableContainer} from "./ui";

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
    rowsPerPage: number
    count: number
    page: number
    setPage: (param: number) => void
    setRowsPerPage: (param: number) => void
}

export const TablePh: FC<ITablePh> = observer(({baseUrl, data, rowCells, headCells, handleDelete, rowsPerPage, count, page, setPage, setRowsPerPage}) => {

    const {themeStore} = useStore()

    return (
        <StyledTableContainer
            textcolor={themeStore.tableFontColor}
            bgcolor={themeStore.bgColor}
            bordercolor={themeStore.tableCellBorder}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeadPh headCells={headCells} />
                <TableBodyPh rowCells={rowCells} rows={data} baseUrl={baseUrl} handleDelete={handleDelete}/>
            </Table>
            <TablePaginationPh
                rowsPerPage={rowsPerPage}
                page={page}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                count={count}
            />
        </StyledTableContainer>
    );
})