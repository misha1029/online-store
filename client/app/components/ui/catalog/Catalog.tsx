import React, { FC, useState } from 'react'

import { IProduct } from '../../types/product.interface'

import { Carousel } from './carousel/Carousel'
import { Sorting } from './sorting/Sorting'
import { EnumSorting } from './sorting/sorting.interface'

export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {

	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	return (
		<div>
			<div className="text-right mt-8">
				<Sorting sortType= {sortType} setSortType={setSortType}/>
			</div>
			<Carousel products={products} />
		</div>
	)
}
