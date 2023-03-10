import React, {FC, useState } from 'react'

import { TypeSize } from '../../../../store/cart/cart.types'
import { IProductDetails } from '../../../types/product.interface'
import { AddToCartButton } from '../../../ui/catalog/carousel/carousel-item/AddToCartButton'
import { SizelVariation } from '../../../ui/catalog/carousel/carousel-item/SizelVariation'

import styles from './ProductCard.module.scss'
import { ProductRating } from './product-variations/ProductRating'


export const ProductVariations: FC<IProductDetails> = ({
	product
}) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')
	return (
		<div className={styles.variations}>
			<ProductRating product={product} />
			<SizelVariation
				variant="medium"
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<AddToCartButton
				product={product}
				variant="medium"
				selectedSize={selectedSize}
			/>
		</div>
	)
}
