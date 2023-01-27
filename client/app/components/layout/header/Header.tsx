import React, { FC } from 'react'

import styles from './Header.module.scss'
import { Cart } from './cart/Cart'
import { Menu } from './menu/Menu'
import { Search } from './search/Search'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</div>
	)
}
