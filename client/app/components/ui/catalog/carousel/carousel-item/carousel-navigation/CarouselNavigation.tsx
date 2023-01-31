import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'

import useActions from '../../../../../../hooks/useActions'
import { useCarousel } from '../../../../../../hooks/useCarousel'
import { products } from '../../../../../data/product.data'
import { ICarouselNavigation } from '../carousel.interface'

import styles from './CarouselNavigation.module.scss'

export const CarouselNavigaation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	onSelectedSlide,
}) => {
	const { prevSlide, nexSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<Button onClick={() => prevSlide()} className={styles.arrow}>
						<ChevronLeftIcon fontSize={46} />
					</Button>
					<Button
						onClick={() => nexSlide({ carouselLength: products.length })}
						className={styles.arrow}
					>
						<ChevronRightIcon fontSize={46} />
					</Button>
				</div>
			)}
			<button onClick={onSelectedSlide}>
				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]}
					width={300}
					height={300}
					draggable={false}
				/>
			</button>
		</div>
	)
}
