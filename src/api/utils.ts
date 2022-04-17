import {pharmApiInstance, pharmApiInstanceAuth} from "./axios";

// Auth
export const apiAuthLogin = (param: any) => pharmApiInstanceAuth.post('/auth/login', param)

// Categories
export const apiGetAllCategories = () => pharmApiInstance.get('/categories')
export const apiGetOneCategory = (id: number) => pharmApiInstance.get(`/categories/${id}`)
export const apiPostCategory = (param: any) => pharmApiInstance.post(`/categories`, param)
export const apiPutCategory = (param: any) => pharmApiInstance.put(`/categories/edit`, param)
export const apiDeleteCategory = (id: number) => pharmApiInstance.delete(`/categories/delete/${id}`)