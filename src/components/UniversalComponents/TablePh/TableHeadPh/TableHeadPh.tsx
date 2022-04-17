import React, {FC} from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {IHeadCells} from "../index";

interface ITableHeadPh {
    headCells: IHeadCells[]
}

export const TableHeadPh:FC<ITableHeadPh> = ({headCells}) => {
    return (
        <TableHead>
            <TableRow>
                {
                   headCells.map(cell => {
                       return (
                           <TableCell
                             key={cell.title}
                             align={cell?.align ? cell.align : 'left'}
                           >
                               {cell.title}
                           </TableCell>
                       )
                   })
                }
            </TableRow>
        </TableHead>
    );
};
