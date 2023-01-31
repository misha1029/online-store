import React, { FC, useState } from 'react'

import { IProduct } from '../../../types/product.interface'

import styles from './Carousel.module.scss'
import { CarouselItem } from './carousel-item/CarouselItem'

export const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem product={product} key={product.id} index={index} />
			))}
		</section>
	)
}
