
export interface IPostMedicinesSchema {
    name: string
    price: number
    description: string
    image: any
    totalCount: number
    hasDiscount: boolean
    priceWithDiscount: number
    currency: string
    categoryId: number
}

export interface IPutMedicinesSchema {
    id: number
    name?: string
    price?: number
    description?: string
    image?: any
    totalCount?: number
    hasDiscount?: boolean
    priceWithDiscount?: number
    currency?: string
    categoryId: number
}

export interface IMedicinesSchema {
    id: number |  string
    name: string
    price: number
    description: string
    image: string
    totalCount: number
    hasDiscount: boolean
    priceWithDiscount: number
    currency: string
    categoryId: string | number
}