import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react'
import React, { FC, useRef, useState } from 'react'

import { cart } from '../../../data/cart.data'

import styles from './Cart.module.scss'
import { CartItem } from './cart-item/CartItem'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { formatToCurrency } from '../../../../utils/format-to-currency'
import { useCart } from '../../../../hooks/useCart'

export const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const {cart, total} = useCart()

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>{cart.length}</span>
				<span className={styles.text}>my basket</span>
			</button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>MY Basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.length ? cart.map((item) => (
								<CartItem item={item} key={item.id} />
							)) : <div>Basket is emty</div>}
						</div>
					</DrawerBody>

					<DrawerFooter justifyContent='space-between' borderTopColor={'#F7F4F0'} borderTopWidth={1} >
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{formatToCurrency(total)}</div>
						</div>

						<Button colorScheme="green">Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
