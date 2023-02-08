import { IReview } from "./reviews.interface"

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    review: IReview[]
    images: string[]
}

export interface IProductDetails {
	product: IProduct
}
