import {styled as styledMUI} from "@mui/material/styles";
import {Paper, PaperProps, TableCell, TableCellProps, TablePaginationProps} from "@mui/material";
import React from "react";
import {useStore} from "../../../../store";
import {observer} from "mobx-react-lite";

interface IStyledCell {
    textcolor: string,
    fw?: number,
    bordercolor?: string,
    h?: number
}

const StyledCell = styledMUI(TableCell)<IStyledCell>(({textcolor, fw, bordercolor, h}) => ({
    color: textcolor,
    fontWeight: fw ? fw : 400,
    borderBottom: `1px solid ${bordercolor || 'rgba(255,255,255,0.75)'}`,
    height: `${h || 90}px`,
}))

interface ITableCellPh extends TableCellProps {
    children?: React.ReactNode,
    fw?: number
    h?: number
}

export const TableCellPh: React.FC<ITableCellPh> = observer(({children, ...props}) => {

    const {themeStore} = useStore()

    return (
        <StyledCell bordercolor={themeStore.tableCellBorder} textcolor={themeStore.textColor} {...props}>
            {children}
        </StyledCell>
    )
})


interface IStyledTableContainer extends PaperProps{
    bgcolor?: string
    bordercolor?: string
    textcolor?: string
}

export const StyledTableContainer = styledMUI(Paper)<IStyledTableContainer>(({bgcolor, bordercolor, textcolor}) => ({
    borderBottom: `1px solid ${bordercolor}`,
    borderTop: `1px solid ${bordercolor}`,
    background: bgcolor,
    color: textcolor,
    boxShadow: 'none',
    borderRadius: 0
}))
