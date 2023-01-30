import cn from 'clsx'
import React, { Dispatch, FC, SetStateAction } from 'react'

import { useCart } from '../../../../../hooks/useCart'
import { TypeSize } from '../../../../../store/types'
import styles from '../Carousel.module.scss'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariation {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

export const CarouselVariation: FC<ICarouselVariation> = ({
	selectedSize,
	setSelectedSize,
}) => {
	const { cart } = useCart()
	return (
		<div className={styles.variations}>
			{SIZES.map((size) => (
				<button
					key={size}
					className={cn({
						[styles.active]: selectedSize === size,
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}
