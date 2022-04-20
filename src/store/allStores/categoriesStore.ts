import {makeAutoObservable, runInAction} from "mobx";
import {
    apiDeleteCategory,
    apiGetAllCategories,
    apiGetOneCategory,
    apiPostCategory,
    apiPutCategory
} from "../../api/utils";
import {ICategoriesSchema, IPostCategoryParams, IPutCategoryParams} from "../../models/schemas/categoriesSchema";

const activeCategory: ICategoriesSchema = {
    id: '',
    name: '',
    createdAt: '',
    updatedAt: ''
}

export class CategoriesStore {
    categories: ICategoriesSchema[] = []
    activeCategory: ICategoriesSchema | null = {...activeCategory}
    newCategory:IPostCategoryParams | null = null
    openModal: boolean = false
    page: number = 0
    rowsPerPage: number = 5
    count: number = 0

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setPage (page: number) {
        this.page = page
    }

    setRowsPerPage (page: number) {
        this.rowsPerPage = page
    }


    setOpenModal (open: boolean) {
        this.openModal = open
    }

    setNewCategory (category: IPostCategoryParams | null) {
        this.newCategory = category
    }

    setActiveCategory(active: ICategoriesSchema | null) {
        this.activeCategory = active
    }

    setActiveNameCategory(name: string) {
        this.activeCategory = this.activeCategory !== null
            ?
            {
            ...this.activeCategory,
            name: name
            }
            :
            null
    }

    reset () {
        this.activeCategory = {...activeCategory}
    }


    // Дальше КРУД по категориям

    async getAll() {
        try {

            const params = {
                page: this.page + 1,
                rowsPerPage: this.rowsPerPage
            }

            const response = await apiGetAllCategories({params})

            runInAction(() => {
                this.categories = response.data.items
                this.count = response.data.count
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getOneCategory(id: number) {
        try {

            const response = await apiGetOneCategory(id)

            runInAction(() => {
                this.activeCategory = response.data
            })

        } catch (e) {
            console.log(e)
        }
    }

    async deleteCategory(id: number) {
        try {

            await apiDeleteCategory(id)

            runInAction(() => {
                this.categories = this.categories.filter(item => item.id !== id)
            })

        } catch (e) {
            console.log(e)
        }
    }

    async postCategory(params: IPostCategoryParams) {
        try {

            const response = await apiPostCategory(params)

            runInAction(() => {
                this.categories = [
                    response.data,
                    ...this.categories
                ]
            })

        } catch (e) {
            console.log(e)
        }
    }

    async putCategory(params: IPutCategoryParams) {
        try {

            const response = await apiPutCategory(params)

            runInAction(() => {
                this.categories = this.categories.map(item => {
                    if (item.id !== params.id) {
                        return item
                    }

                    return response.data
                })

                this.activeCategory = response.data
            })

        } catch (e) {
            console.log(e)
        }
    }
}