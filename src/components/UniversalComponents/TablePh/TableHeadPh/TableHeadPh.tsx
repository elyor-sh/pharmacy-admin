import React, {FC} from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {IHeadCells} from "../index";
import {TableCellPh} from "../styledComponents";

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
                           <TableCellPh
                             key={cell.title}
                             align={cell?.align ? cell.align : 'left'}
                           >
                               {cell.title}
                           </TableCellPh>
                       )
                   })
                }
            </TableRow>
        </TableHead>
    );
};
