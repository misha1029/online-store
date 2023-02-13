import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../../service/ProductService'
import { products } from '../../../data/product.data'

export const useProductNavigation = (productId: number) => {

    const {data} = useQuery({
		queryKey: ['products navigation'],
		queryFn: () => ProductService.getProducts(),
	})
    const dataQuery = data || []

	const nestProductSlug = dataQuery.find(prod => prod.id === productId + 1)?.slug
    const prevProductSlug = dataQuery.find(prod => prod.id === productId - 1)?.slug

	return {
        nestProductSlug,
        prevProductSlug
	}
}
