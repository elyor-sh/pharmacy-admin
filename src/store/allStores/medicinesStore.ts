import {makeAutoObservable, runInAction} from "mobx";
import {
    apiDeleteMedicine,
    apiGetAllMedicines,
    apiGetOneMedicine,
    apiPostMedicine, apiPutMedicine
} from "../../api/utils";
import {IMedicinesSchema, IPostMedicinesSchema, IPutMedicinesSchema} from "../../models/schemas/medicinesSchema";

export class MedicinesStore {

    medicines: IMedicinesSchema[] = []
    activeMedicine: IMedicinesSchema | null = null
    newMedicine: IPostMedicinesSchema | null = null

    openModal: boolean = false

    // для пагинации
    page: number = 0
    rowsPerPage: number = 5
    count: number = 0

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setPage(page: number) {
        this.page = page
    }

    setRowsPerPage(page: number) {
        this.rowsPerPage = page
    }


    setOpenModal(open: boolean) {
        this.openModal = open
    }

    setNewMedicine(medicine: IPostMedicinesSchema | null) {
        this.newMedicine = medicine
    }

    setActiveMedicine(active: IMedicinesSchema | null) {
        this.activeMedicine = active
    }

    setActiveNameMedicine(name: string) {
        this.activeMedicine = this.activeMedicine !== null
            ?
            {
                ...this.activeMedicine,
                name: name
            }
            :
            null
    }


    // Дальше КРУД по категориям

    async getAll() {
        try {

            const params = {
                page: this.page + 1,
                rowsPerPage: this.rowsPerPage
            }

            const response = await apiGetAllMedicines({params})

            runInAction(() => {
                this.medicines = response.data.items
                this.count = response.data.count
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getOne(id: number) {
        try {

            const response = await apiGetOneMedicine(id)

            runInAction(() => {
                this.activeMedicine = response.data.items
            })

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: number) {
        try {

            await apiDeleteMedicine(id)

            runInAction(() => {
                this.medicines = this.medicines.filter(item => item.id !== id)
            })

        } catch (e) {
            console.log(e)
        }
    }

    async create(params: FormData) {
        try {

            const response = await apiPostMedicine(params)

            runInAction(() => {
                this.medicines = [
                    response.data.items,
                    ...this.medicines
                ]
            })

        } catch (e) {
            console.log(e)
        }
    }

    async update(params: FormData) {
        try {

            const response = await apiPutMedicine(params)

            runInAction(() => {
                const id = Number(params.get('id'))
                this.medicines = this.medicines.map(item => {
                    if (item.id !== id) {
                        return item
                    }

                    return response.data.items
                })
            })

        } catch (e) {
            console.log(e)
        }
    }
}