import {makeAutoObservable, runInAction} from "mobx";
import {
    apiDeleteMedicine,
    apiGetAllMedicines,
    apiGetOneMedicine,
    apiPostMedicine, apiPutMedicine
} from "../../api/utils";
import {IMedicinesSchema, IPostMedicinesSchema, IPutMedicinesSchema} from "../../models/schemas/medicinesSchema";


const createMedicine: IMedicinesSchema = {
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
    totalCount: 0,
    hasDiscount: false,
    priceWithDiscount: 0,
    currency: 'UZS',
    categoryId: ''
}

export class MedicinesStore {

    medicines: IMedicinesSchema[] = []
    activeMedicine: IMedicinesSchema | null = {...createMedicine}
    image: FileList | null = null

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

    resetActiveMedicine () {
        this.activeMedicine = createMedicine
    }


    setActiveMedicine(active: IMedicinesSchema | null) {
        this.activeMedicine = active
    }

    setImage (image: FileList) {
        this.image = image
    }

    getPostOrPutParams (id: string | number) {
        let formData = new FormData()

        if(id !== 'create'){
            formData.append('id',  id as string)
        }
        formData.append('price', this.activeMedicine?.price.toString() || '')
        formData.append('priceWithDiscount', this.activeMedicine?.priceWithDiscount.toString() || '')
        formData.append('totalCount', this.activeMedicine?.totalCount.toString() || '')
        formData.append('hasDiscount', this.activeMedicine?.hasDiscount.toString() || '')
        formData.append('description', this.activeMedicine?.description || '')
        formData.append('name', this.activeMedicine?.name || '')
        formData.append('currency', this.activeMedicine?.currency || '')
        formData.append('categoryId', this.activeMedicine?.categoryId.toString() || '')
        if(this.image){
            formData.append('image', this.image[0])
        }

        return formData
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

    async create() {
        try {

            const params = this.getPostOrPutParams('create')

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

    async update(id: number) {
        try {

            const params = this.getPostOrPutParams(id)

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