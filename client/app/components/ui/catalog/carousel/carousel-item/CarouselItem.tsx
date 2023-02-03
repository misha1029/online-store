import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Dispatch, FC, useState } from 'react'

import useActions from '../../../../../hooks/useActions'
import { useCarousel } from '../../../../../hooks/useCarousel'
import { TypeSize } from '../../../../../store/cart/cart.types'
import styles from '../Carousel.module.scss'

import { AddToCartButton } from './AddToCartButton'
import { SizelVariation } from './SizelVariation'
import { CarouselNavigaation } from './carousel-navigation/CarouselNavigation'
import { ICarouselItem } from './carousel.interface'

export const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: isActive,
			})}
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.12 } : {}}
			transition={{ duration: 0.6, type: 'tween' }}
			area-lable="Select item"
			role="button"
		>
			<div>
				<CarouselNavigaation
					onSelectedSlide={() => selectSlide(index)}
					product={product}
					isActive={isActive}
				/>

				<button className={styles.heading} onClick={() => selectSlide(index)}>
					<span>{product.name}</span>
				</button>
				{isActive ? (
					<>
						<SizelVariation
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<div className={styles.link}>
							<Link href={`/product/${product.slug}`} >
								More information
							</Link>
						</div>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}
