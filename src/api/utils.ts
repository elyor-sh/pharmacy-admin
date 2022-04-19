import {pharmApiInstance, pharmApiInstanceAuth, pharmApiInstanceUpload} from "./axios";
import {IPostMedicinesSchema, IPutMedicinesSchema} from "../models/schemas/medicinesSchema";

// Auth
export const apiAuthLogin = (param: any) => pharmApiInstanceAuth.post('/auth/login', param)

// Categories
export const apiGetAllCategories = (params: any) => pharmApiInstance.get('/categories', params)
export const apiGetOneCategory = (id: number) => pharmApiInstance.get(`/categories/${id}`)
export const apiPostCategory = (param: any) => pharmApiInstance.post(`/categories`, param)
export const apiPutCategory = (param: any) => pharmApiInstance.put(`/categories/edit`, param)
export const apiDeleteCategory = (id: number) => pharmApiInstance.delete(`/categories/delete/${id}`)

//Medicines
export const apiGetAllMedicines = (params: any) => pharmApiInstance.get('/medicines', params)
export const apiGetOneMedicine = (id: number) => pharmApiInstance.get(`/medicines/${id}`)
export const apiPostMedicine = (params: FormData) => pharmApiInstanceUpload.post(`/medicines`, params)
export const apiPutMedicine = (params: FormData) => pharmApiInstanceUpload.put(`/medicines/edit`, params)
export const apiDeleteMedicine = (id: number) => pharmApiInstance.put(`/medicines/delete/${id}`)