import { products } from '../../../data/product.data'

export const useProductNavigation = (productId: number) => {
	const nestProductSlug = products.find(prod => prod.id === productId + 1)?.slug
    const prevProductSlug = products.find(prod => prod.id === productId - 1)?.slug

	return {
        nestProductSlug,
        prevProductSlug
	}
}
