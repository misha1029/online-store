import Image from 'next/image'
import React, { FC, useState } from 'react'
import { formatToCurrency } from '../../../../../utils/format-to-currency'

import { ICartItem } from '../../../../types/cart.interface'

import styles from '../Cart.module.scss'
import { CartActions } from './cart-actions/CartActions'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={styles.name}> {item.product.name}</div>
				<div className={styles.price}>
					{formatToCurrency(item.product.price)}
				</div>
				<div className={styles.variation}>
					{item.size}
				</div>
				<CartActions  item ={item}/>
			</div>
		</div>
	)
}
