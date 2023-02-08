import { useQuery } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { ProductService } from '../../../service/ProductService'

import { IProduct } from '../../types/product.interface'
import { Loader } from '../loader/Loader'

import { Carousel } from './carousel/Carousel'
import { Sorting } from './sorting/Sorting'
import { EnumSorting } from './sorting/sorting.interface'

export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {

	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	const {data, isLoading} = useQuery({
		queryKey: ['products', sortType],
		queryFn: () => ProductService.getProducts(sortType),
		initialData: products
	})

	return (
		<div>
			<div className="text-right mt-8">
				<Sorting sortType= {sortType} setSortType={setSortType}/>
			</div>
			{
				isLoading ? <Loader/> : <Carousel products={data} />
			}
			
		</div>
	)
}
