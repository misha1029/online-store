import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

import { COLORS } from '../../../../../config/color.config'
import useActions from '../../../../../hooks/useActions'
import { TypeSize } from '../../../../../store/cart/cart.types'
import { IProduct } from '../../../../types/product.interface'

interface ICarouselButton {
    product: IProduct
    selectedSize: TypeSize
}

export const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
	const { addItem } = useActions()
	return (
		<div className="text-center">
			<Button
				onClick={() => addItem({ product, quantity: 1, size:  selectedSize})}
				color={COLORS.green}
				className="tracking-widest"
				fontWeight={500}
				borderRadius={20}
				marginTop={8}
				textTransform="uppercase"
				fontSize={12}
			>
				Add to basket
			</Button>
		</div>
	)
}
