import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Grid} from "@mui/material";
import {useStore} from "../../store";
import {TablePh} from "../../components/UniversalComponents/TablePh";
import {AddButtonPh} from "../../components/ButtonsPh/AddButtonPh";
import {useNavigate} from "react-router-dom";

const Categories = observer(() => {

    const {categoriesStore} = useStore()

    const navigate = useNavigate()

    const handleAdd = () => {
        navigate('/categories/create')
    }

    useEffect(() => {
        (async () => {
            await categoriesStore.getAll()
        })()
    }, [categoriesStore.page, categoriesStore.rowsPerPage])

    return (
        <>
            <Grid container sx={{justifyContent: 'flex-end', marginBottom: '20px'}}>
                <AddButtonPh
                    onClick={handleAdd}
                >
                    Kategoriya qo'shish
                </AddButtonPh>
            </Grid>
            <TablePh
                baseUrl={'/categories'}
                data={categoriesStore.categories}
                handleDelete={categoriesStore.deleteCategory}
                count={categoriesStore.count}
                page={categoriesStore.page}
                setPage={categoriesStore.page}
                rowsPerPage={categoriesStore.rowsPerPage}
                setRowsPerPage={categoriesStore.setRowsPerPage}
                rowCells={[
                    {contentKey: 'name', align: 'left', type: 'text'},
                    {contentKey: 'createdAt', align: 'left', type: 'date'},
                    {contentKey: 'updatedAt', align: 'left', type: 'date'},
                    {contentKey: 'baseActions', align: 'center', type: 'baseActions'},
                ]}
                headCells={[
                    {title: 'Nomi', align: 'left'},
                    {title: 'Hosil qilingan vaqti', align: 'left'},
                    {title: 'Yangilangan vaqti', align: 'left'},
                    {title: 'Harakatlar', align: 'center'},
                ]}
            />
        </>
    );
});

export { Categories };