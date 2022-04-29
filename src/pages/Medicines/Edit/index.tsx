import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {useStore} from "../../../store";
import {EditPh} from "../../../components/UniversalComponents/EditPh";
import {toast} from "react-toastify";

const EditMedicine = observer(() => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [imgValue, setImgValue] = useState('')

    const {medicinesStore, categoriesStore} = useStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name

        const number = e.target.type === 'number'
            ?
            +e.target.value >= 0
                ?
                +e.target.value
                :
                0
            :
            0

        const value = e.target.type === 'number' ? number : e.target.value

        if (medicinesStore.activeMedicine) {
            medicinesStore.setActiveMedicine({

                ...medicinesStore.activeMedicine,
                [name]: value
            })
        }
    }

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (medicinesStore.activeMedicine) {
            medicinesStore.setActiveMedicine({
                ...medicinesStore.activeMedicine,
                hasDiscount: e.target.checked
            })
        }
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files) {
            medicinesStore.setImage(e.target?.files)
            setImgValue(e.target.value)
        }
    }

    const handleSave = async () => {

        if (!medicinesStore.activeMedicine?.name || !medicinesStore.activeMedicine.categoryId) {
            toast.error(`Barcha maydonni to'ldiring!`, {
                toastId: 'MedicineEditToast'
            })

            return
        }

        try {

            if (id === 'create') {
                await medicinesStore.create()
            } else if (id && typeof +id === 'number') {
                await medicinesStore.update(+id)
            }


            medicinesStore.resetActiveMedicine()

            navigate(-1)


        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {

        if (!id || id === 'create') {
            return
        }

        (async () => {
            await medicinesStore.getOne(Number(id))
        })()
    }, [id])

    useEffect(() => {
        (
            async () => {
                await categoriesStore.getAll()
            }
        )()
    }, [])


    return (
        <div>
            <EditPh
                width={'50%'}
                inputs={[
                    {
                        value: medicinesStore.activeMedicine?.name || '',
                        name: 'name', onChange: (e) => handleChange(e),
                        label: 'Dori nomi'
                    },
                    {
                        value: medicinesStore.activeMedicine?.price || 0,
                        name: 'price', onChange: (e) => handleChange(e),
                        label: 'Dori narxi',
                        type: 'number'
                    },
                    {
                        value: medicinesStore.activeMedicine?.priceWithDiscount || 0,
                        name: 'priceWithDiscount', onChange: (e) => handleChange(e),
                        label: 'Dori narxi chegirma bilan',
                        type: 'number'
                    },
                    {
                        value: medicinesStore.activeMedicine?.totalCount || 0,
                        name: 'totalCount', onChange: (e) => handleChange(e),
                        label: 'Dori umumiy soni',
                        type: 'number'
                    },
                    {
                        value: medicinesStore.activeMedicine?.description || '',
                        name: 'description', onChange: (e) => handleChange(e),
                        elementType: 'textarea',
                        placeholder: 'Dori tavsifi'
                    },
                    {
                        value: medicinesStore.activeMedicine?.hasDiscount ? medicinesStore.activeMedicine?.hasDiscount : false,
                        name: 'hasDiscount',
                        onChange: (e) => handleChangeCheckbox(e as React.ChangeEvent<HTMLInputElement>),
                        elementType: 'checkbox',
                        label: `Chegirma qo'shish yoki qo'shmaslik`
                    },
                    {
                        value: imgValue,
                        name: 'image', onChange: (e) => handleChangeImage(e as React.ChangeEvent<HTMLInputElement>),
                        type: 'file',
                        elementType: 'file',
                        attrs: {accept: 'image/*'}
                    },
                    {
                        value: medicinesStore.activeMedicine?.categoryId,
                        name: 'categoryId', onChange: (e) => handleChange(e),
                        elementType: 'select',
                        options: [...categoriesStore.categories],
                        valueKey: 'id',
                        labelKey: 'name',
                        label: 'Kategoriya'
                    },
                ]}
                onSaveClick={handleSave}
                resetClick={medicinesStore.resetActiveMedicine}
            />
        </div>
    );
});

export {EditMedicine};