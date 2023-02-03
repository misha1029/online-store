import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

import { COLORS } from '../../../../../config/color.config'
import useActions from '../../../../../hooks/useActions'
import { useCart } from '../../../../../hooks/useCart'
import { TypeSize } from '../../../../../store/cart/cart.types'
import { IProduct } from '../../../../types/product.interface'

interface IAddToCartButton {
	product: IProduct
	selectedSize: TypeSize
	variant?: 'small' | 'medium'
}

export const AddToCartButton: FC<IAddToCartButton> = ({
	product,
	selectedSize,
	variant = 'small'
}) => {
	const { addFromCart, removeFromCart } = useActions()

	const { cart } = useCart()

	const currentElement = cart.find(
		(cartItem) =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)

	const isSmall = variant === 'small'
	
	return (
		<div className="text-center">
			<Button
				onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addFromCart({ product, quantity: 1, size: selectedSize })}
				backgroundColor={isSmall ? undefined : COLORS.green}
				color={isSmall ? COLORS.green : COLORS.white}
				_hover={{
					backgroundColor: isSmall ? undefined: COLORS['dark-green']
				}}
				className="tracking-widest"
				fontWeight={500}
				borderRadius={20}
				marginTop={8}
				textTransform="uppercase"
				fontSize={isSmall ? 12 : 16}
			>
				{currentElement ? 'remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}
