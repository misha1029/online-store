import React, { FC, useState } from 'react'

import { IProductDetails } from '../../../types/product.interface'

import styles from './ProductCard.module.scss'
import { ProductIfonmation } from './ProductIfonmation'
import { ProductImage } from './ProductImage'
import { ProductVariations } from './ProductVariations'

export const ProductCard: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	return (
		<div className={styles.card}>
			<ProductIfonmation
				product={product}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
			<ProductImage product={product} currentImageIndex={currentImageIndex} />
			<ProductVariations product={product} />
		</div>
	)
}
