import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProductDetails } from '../../../../types/product.interface'
import styles from '../ProductCard.module.scss'

export const ProductRating: FC<IProductDetails> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.review.reduce((acc, review) => acc + review.rating, 0) /
				product.review.length
		) || 0
	)

	// Catch Rating value
	const handleRating = (rate: number) => {
		setRating(rate)

		// other logic
	}

	const onPointerEnter = () => console.log('Enter')
	const onPointerLeave = () => console.log('Leave')
	const onPointerMove = (value: number, index: number) =>
		console.log(value, index)
	return (
		<div className={styles.rating}>
			<span>Review: </span>
			<Rating
				onClick={handleRating}
				onPointerEnter={onPointerEnter}
				onPointerLeave={onPointerLeave}
				onPointerMove={onPointerMove}
				SVGstyle={{
					display: 'inline-block',
				}}
				initialValue={rating}
				size={32}
				allowFraction
			/>
		</div>
	)
}
