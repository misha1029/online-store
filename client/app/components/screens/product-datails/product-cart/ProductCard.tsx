import React, { FC } from 'react'
import { IProductDetails } from '../../../types/product.interface'

import styles from './ProductCard.module.scss'
import { ProductIfonmation } from './ProductIfonmation'
import { ProductImage } from './ProductImage'
import { ProductVariations } from './ProductVariations'

export const ProductCard: FC<IProductDetails> = ({product}) => {
	return (
		<div className={styles.card}>
			<ProductIfonmation product={product}/>
            <ProductImage product={product}/>
            <ProductVariations product={product}/>
		</div>
	)
}
