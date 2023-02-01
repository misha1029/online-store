import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

import { COLORS } from '../../../../../config/color.config'
import useActions from '../../../../../hooks/useActions'
import { useCart } from '../../../../../hooks/useCart'
import { TypeSize } from '../../../../../store/cart/cart.types'
import { IProduct } from '../../../../types/product.interface'

interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
}

export const CarouselButton: FC<ICarouselButton> = ({
	product,
	selectedSize,
}) => {
	const { addFromCart, removeFromCart } = useActions()

	const { cart } = useCart()

	const currentElement = cart.find(
		(cartItem) =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)
	
	return (
		<div className="text-center">
			<Button
				onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addFromCart({ product, quantity: 1, size: selectedSize })}
				color={COLORS.green}
				className="tracking-widest"
				fontWeight={500}
				borderRadius={20}
				marginTop={8}
				textTransform="uppercase"
				fontSize={12}
			>
				{currentElement ? 'remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}
