import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {useStore} from "../../../store";
import {EditPh} from "../../../components/UniversalComponents/EditPh";

const EditMedicine = observer(() => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [image, setImage] = useState<File | null>(null)
    const [imgValue, setImgValue] = useState('')

    const {medicinesStore} = useStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        const value = e.target.type === 'number' ?  +e.target.value : e.target.value

        if(medicinesStore.activeMedicine){
            medicinesStore.setActiveMedicine({
                ...medicinesStore.activeMedicine,
                [name]: value
            })
        }
    }

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(medicinesStore.activeMedicine){
            medicinesStore.setActiveMedicine({
                ...medicinesStore.activeMedicine,
                hasDiscount: e.target.checked
            })
        }
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target?.files){
            setImage(e.target?.files[0])
        }

        setImgValue(e.target.value)
    }

    const handleSave = async () => {

        let formData = new FormData()

       formData.append('id', medicinesStore.activeMedicine?.id.toString() || '')
       formData.append('price', medicinesStore.activeMedicine?.price.toString() || '')
       formData.append('priceWithDiscount', medicinesStore.activeMedicine?.priceWithDiscount.toString() || '')
       formData.append('totalCount', medicinesStore.activeMedicine?.totalCount.toString() || '')
       formData.append('hasDiscount', medicinesStore.activeMedicine?.hasDiscount.toString() || '')
       formData.append('description', medicinesStore.activeMedicine?.description || '')
       formData.append('name', medicinesStore.activeMedicine?.name || '')
        if(image){
            formData.append('image', image)
        }

        await medicinesStore.update(formData)

        navigate(-1)

    }

    useEffect(() => {

        if(!id){
            return
        }

        (async () => {
            await medicinesStore.getOne(Number(id))
        })()
    }, [id])

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
                        elementType: 'textarea'
                    },
                    {
                        value: medicinesStore.activeMedicine?.hasDiscount ? medicinesStore.activeMedicine?.hasDiscount : false,
                        name: 'hasDiscount', onChange: (e) => handleChangeCheckbox(e as React.ChangeEvent<HTMLInputElement>),
                        elementType: 'checkbox',
                        label: `Chegirma qo'shish yoki qo'shmaslik`
                    },
                    {
                        value: imgValue,
                        name: 'image', onChange: (e) => handleChangeImage(e as React.ChangeEvent<HTMLInputElement>),
                        type: 'file',
                        attrs: {accept: 'image/*'}
                    },
                ]}
                onSaveClick={handleSave}
            />
        </div>
    );
});

export { EditMedicine };