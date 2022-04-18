import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store";
import {toast} from "react-toastify";
import {ModalPh} from "../../../components/UniversalComponents/ModalPh/ModalPh";
import {TextField} from "@mui/material";

const AddCategory = observer(() => {

    const {categoriesStore} = useStore()

    const handleClose = () => {
        categoriesStore.setOpenModal(false)
        categoriesStore.setNewCategory(null)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const params = {
            name: e.target.value
        }

        categoriesStore.setNewCategory(params)
    }

    const handleAddCategory = async () => {
        if(!categoriesStore.newCategory?.name){
            toast.error(`Kategoriya nomini kiriting`, {
                toastId: 'AddCategoryId'
            })
            return
        }

        await categoriesStore.postCategory(categoriesStore.newCategory)
        handleClose()
    }

    return (
        <>
            {
                categoriesStore.openModal &&
                <ModalPh
                    open={categoriesStore.openModal}
                    title={`Kategoriya qo'shish`}
                    handleClose={handleClose}
                    handleSave={handleAddCategory}
                >
                    <TextField
                        fullWidth
                        autoFocus
                        label={'Kategoriya nomini kiriting!'}
                        value={categoriesStore.newCategory?.name ? categoriesStore.newCategory?.name : ''}
                        onChange={handleChange}
                    />
                </ModalPh>
            }
        </>
    );
});

export { AddCategory };