import {makeAutoObservable, runInAction} from "mobx";
import {ICategory, IPostCategoryParams, IPutCategoryParams} from "../types";
import {
    apiDeleteCategory,
    apiGetAllCategories,
    apiGetOneCategory,
    apiPostCategory,
    apiPutCategory
} from "../../api/utils";

export class CategoriesStore {
    categories: ICategory[] = []
    activeCategory: ICategory | null = null
    newCategory:IPostCategoryParams | null = null
    openModal: boolean = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setOpenModal (open: boolean) {
        this.openModal = open
    }

    setNewCategory (category: IPostCategoryParams | null) {
        this.newCategory = category
    }

    setActiveCategory(active: ICategory | null) {
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


    // Дальше КРУД по категориям

    async getAll() {
        try {

            const response = await apiGetAllCategories()

            runInAction(() => {
                this.categories = response.data
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