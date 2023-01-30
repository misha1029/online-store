import { Button } from '@chakra-ui/react'
import cn from 'clsx'
import Image from 'next/image'
import React, { FC, useState } from 'react'

import { COLORS } from '../../../../../config/color.config'
import useActions from '../../../../../hooks/useActions'
import { TypeSize } from '../../../../../store/types'
import { IProduct } from '../../../../types/product.interface'
import styles from '../Carousel.module.scss'

import { CarouselButton } from './CarouselButton'
import { CarouselVariation } from './CarouselVariation'

export const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const isActive = product.id === 2

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive,
			})}
		>
			<div>
				<div className={styles.image}>
					<Image
						alt={product.name}
						src={product.images[0]}
						width={300}
						height={300}
					/>
				</div>

				<div className={styles.heading}>
					<div>{product.name}</div>
				</div>
				{isActive ? (
					<>
						<CarouselVariation
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<CarouselButton product={product} selectedSize={selectedSize} />
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</div>
	)
}
