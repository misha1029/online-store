import { axiosClassic } from '../api/api'
import { IProduct, sortType } from '../components/types/product.interface'

const PRODUCTS = '/products'

export const ProductService = {
	async getProducts(type?: sortType) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}`, {
			params: {
				sortType: type,
			},
		})
	},
	async bySerchTerm(serchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: {
				serchTerm,
			},
		})
	},
	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`)
	},
	async bySlug(slug?: sortType) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`)
	},
	async byrelatives(withoutId?: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`)
	},
}
