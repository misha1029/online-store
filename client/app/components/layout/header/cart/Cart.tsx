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

export const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector(state => state.cart.items)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>1</span>
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
							{cart.map((item) => (
								<CartItem item={item} key={item.id} />
							))}
						</div>
					</DrawerBody>

					<DrawerFooter justifyContent='space-between' borderTopColor={'#F7F4F0'} borderTopWidth={1} >
						<div className={styles.footer}>
							<div>Total:</div>
							<div>$100</div>
						</div>

						<Button colorScheme="green">Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
