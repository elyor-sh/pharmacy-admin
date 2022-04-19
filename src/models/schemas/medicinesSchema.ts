
export interface IPostMedicinesSchema {
    name: string
    price: number
    description: string
    image: any
    totalCount: number
    hasDiscount: boolean
    priceWithDiscount: number
    currency: string
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
}

export interface IMedicinesSchema {
    id: number
    name: string
    price: number
    description: string
    image: string
    totalCount: number
    hasDiscount: boolean
    priceWithDiscount: number
    currency: string
}