import React, {FC} from 'react';
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {drawCell} from "../drawCell/drawCell";
import {IRowCells} from "../index";
import {observer} from "mobx-react-lite";

interface ITableBodyPh {
    rowCells: IRowCells[]
    rows: any
    baseUrl: string
    handleDelete: (id: number) => any
}

export const TableBodyPh:FC<ITableBodyPh> = observer(({rowCells, rows, baseUrl, handleDelete}) => {
    return (
        <TableBody>

            { rows.length && rows.length > 0 ?

                rows.map((row :any) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {
                        rowCells.map(cell => (
                            <TableCell
                                key={cell.contentKey}
                                align={cell.align ? cell.align : 'left'}
                            >
                                {drawCell(row, cell, baseUrl, handleDelete)}
                            </TableCell>
                        ))
                    }
                </TableRow>
            ))
                :
                <div>Topilmadi</div>
            }
        </TableBody>
    );
});