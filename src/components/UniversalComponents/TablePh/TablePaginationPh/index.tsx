import React, {FC} from "react";
import {TablePagination,} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store";
import {TablePaginationActions} from "./actions";


interface ITablePagination {
    rowsPerPage: any
    count: number
    page: number
    setPage: (param: number) => void
    setRowsPerPage: (param: number) => void
}

export const TablePaginationPh: FC<ITablePagination> = observer(({
                                                                     rowsPerPage,
                                                                     count,
                                                                     page,
                                                                     setPage,
                                                                     setRowsPerPage
                                                                 }) => {

    const {themeStore} = useStore()

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component={'div'}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'Qatorlar soni',
                    },
                    native: true,
                }}
                labelRowsPerPage={`Qatorlar soni`}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                sx={[
                    {
                        color: themeStore.textColor,
                        borderTop: `1px solid ${themeStore.tableCellBorder}`,
                        height: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        '& svg.MuiTablePagination-selectIcon': {
                            color: themeStore.textColor
                        }
                    }
                ]}
            />
        </>
    )
})