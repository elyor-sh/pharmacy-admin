import React, {useEffect, useState} from 'react';
import {useStore} from "../../store";
import {observer} from "mobx-react-lite";
import {Grid} from "@mui/material";
import {TablePh} from "../../components/UniversalComponents/TablePh";
import {AddButtonPh} from "../../components/ButtonsPh/AddButtonPh";
import {AddCategory} from "./Add";

const Categories = observer(() => {

    const {categoriesStore} = useStore()

    const handleOpenModal = () => {
        categoriesStore.setOpenModal(true)
    }

    useEffect(() => {
        (async () => {
            await categoriesStore.getAll()
        })()
    }, [])

    return (
        <>
            <AddCategory />
            <Grid container sx={{justifyContent: 'flex-end', marginBottom: '20px'}}>
                <AddButtonPh
                    onClick={handleOpenModal}
                >
                    Kategoriya qo'shish
                </AddButtonPh>
            </Grid>
            <TablePh
                baseUrl={'/categories'}
                data={categoriesStore.categories}
                handleDelete={categoriesStore.deleteCategory}
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