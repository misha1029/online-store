import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './Menu.module.scss'
import { MenuItem } from './menu-item/MenuItem'
import { menu } from './menu.data'

export const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href="/" passHref>
				<Image src="/images/logo.png" width={100} height={100} alt='' />
			</Link>
			<nav>
				<ul>
					{menu.map((item) => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}
