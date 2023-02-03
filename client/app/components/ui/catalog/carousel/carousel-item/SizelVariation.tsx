import cn from 'clsx'
import React, { Dispatch, FC, SetStateAction } from 'react'

import { useCart } from '../../../../../hooks/useCart'
import { TypeSize } from '../../../../../store/cart/cart.types'
import styles from '../Carousel.module.scss'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariation {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
	variant?: 'small' | 'medium'
}

export const SizelVariation: FC<ICarouselVariation> = ({
	selectedSize,
	setSelectedSize,
	variant = 'small',
}) => {
	const { cart } = useCart()
	return (
		<div className={cn(styles.variations, {
			[styles.medium]: variant === 'medium'
		})}>
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
