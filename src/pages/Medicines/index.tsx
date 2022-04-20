import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";
import {Grid} from "@mui/material";
import {AddButtonPh} from "../../components/ButtonsPh/AddButtonPh";
import {TablePh} from "../../components/UniversalComponents/TablePh";
import {useNavigate} from "react-router-dom";

const Medicines = observer(() => {

    const {medicinesStore} = useStore()
    const navigate = useNavigate()

    const handleCreate = () => {
       navigate('/medicines/create')
    }

    useEffect(() => {
        (
            async () => {
                await medicinesStore.getAll()
            }
        )()
    }, [medicinesStore.page, medicinesStore.rowsPerPage])

    useEffect(() => {
        medicinesStore.resetActiveMedicine()
    }, [])

    return (
        <>
            <Grid container sx={{justifyContent: 'flex-end', marginBottom: '20px'}}>
                <AddButtonPh
                    onClick={handleCreate}
                >
                    Dori qo'shish
                </AddButtonPh>
            </Grid>
            <TablePh
                baseUrl={'/medicines'}
                data={medicinesStore.medicines}
                handleDelete={medicinesStore.delete}
                page={medicinesStore.page}
                setPage={medicinesStore.page}
                rowsPerPage={medicinesStore.rowsPerPage}
                setRowsPerPage={medicinesStore.setRowsPerPage}
                count={medicinesStore.count}
                rowCells={[
                    {contentKey: 'image', align: 'left', type: 'image'},
                    {contentKey: 'name', align: 'left', type: 'text'},
                    {contentKey: 'price', align: 'left', type: 'text'},
                    {contentKey: 'priceWithDiscount', align: 'left', type: 'text'},
                    {contentKey: 'totalCount', align: 'left', type: 'text'},
                    {contentKey: 'createdAt', align: 'left', type: 'date'},
                    {contentKey: 'updatedAt', align: 'left', type: 'date'},
                    {contentKey: 'baseActions', align: 'center', type: 'baseActions'},
                ]}
                headCells={[
                    {title: 'Rasmi', align: 'left'},
                    {title: 'Nomi', align: 'left'},
                    {title: 'Narxi', align: 'left'},
                    {title: 'Chegirma bilan', align: 'left'},
                    {title: 'Umumiy soni', align: 'left'},
                    {title: 'Hosil qilingan vaqti', align: 'left'},
                    {title: 'Yangilangan vaqti', align: 'left'},
                    {title: 'Harakatlar', align: 'center'},
                ]}
            />
        </>
    );
});

export { Medicines };