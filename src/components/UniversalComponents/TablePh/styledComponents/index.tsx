import {styled} from "@mui/material/styles";
import {TableCell, TableCellProps} from "@mui/material";
import React from "react";
import {useStore} from "../../../../store";

interface IStyledCell {
    textcolor: string,
}

const StyledCell = styled(TableCell)<IStyledCell>(({textcolor}) => ({
    color: textcolor
}))

interface ITableCellPh extends TableCellProps {
    children?: React.ReactNode
}

export const TableCellPh: React.FC<ITableCellPh> = ({children, ...props}) => {

    const {themeStore} = useStore()

    return (
        <StyledCell textcolor={themeStore.textColor} {...props}>
            {children}
        </StyledCell>
    )
}