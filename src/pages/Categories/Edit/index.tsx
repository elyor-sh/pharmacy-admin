import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {toast} from "react-toastify";
import {useStore} from "../../../store";
import {EditPh} from "../../../components/UniversalComponents/EditPh";
import {Validate} from "../../../helpers/validate";

const EditCategory = observer(() => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {categoriesStore} = useStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        categoriesStore.setActiveNameCategory(e.target.value)
    }

    const handleSave = async () => {
        const params = {
            id: Number(id),
            name: categoriesStore.activeCategory?.name || ''
        }

        if(!params.id || !Validate.text(params.name)) {
            toast.error(`Kategoriya nomini to'ldiring`, {
                toastId: 'editCategoryErrorId'
            })
            return
        }
        await categoriesStore.putCategory(params)
        navigate(-1)
    }

    useEffect(() => {

        if(!id){
            return
        }

        (async () => {
            await categoriesStore.getOneCategory(Number(id))
        })()
    }, [id])

    return (
        <>
            <EditPh
                width={'50%'}
                inputs={[
                    {
                        value: categoriesStore.activeCategory?.name,
                        name: 'name', onChange: (e) => handleChange(e),
                        label: 'Kategoriya nomi'
                    }
                ]}
                onSaveClick={handleSave}
            />
        </>
    );
});

export { EditCategory };