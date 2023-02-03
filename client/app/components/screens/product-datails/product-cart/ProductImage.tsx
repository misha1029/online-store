import Image from 'next/image'
import React, { FC } from 'react'

import { formatToCurrency } from '../../../../utils/format-to-currency'
import { IProductDetails } from '../../../types/product.interface'

import styles from './ProductCard.module.scss'

interface IProductImage extends IProductDetails {
	currentImageIndex: number
}

export const ProductImage: FC<IProductImage> = ({ product, currentImageIndex }) => {
	return (
		<div className={styles.image}>
			<div className={styles.main}>
				<div>
					<Image
						src={product.images[currentImageIndex]}
						alt={product.name}
						width={260}
						height={260}
					/>
				</div>
			</div>

			<div className={styles.price}>{formatToCurrency(product.price)}</div>
		</div>
	)
}
