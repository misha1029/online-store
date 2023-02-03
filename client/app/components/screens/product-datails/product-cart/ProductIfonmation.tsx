import Image from 'next/image'
import React, { FC } from 'react'

import { IProductDetails } from '../../../types/product.interface'

import styles from './ProductCard.module.scss'

export const ProductIfonmation: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.information}>
			<h2>{product.name}</h2>
			<div>
				<p>{product.description}</p>
			</div>
			{product.images.map((image) => (
				<button key={image}>
					<Image src={image} alt="" width={50} height={50} />
				</button>
			))}
		</div>
	)
}
