import Link from 'next/link'
import React, { FC } from 'react'

import { IMenuLink } from './menu-item.interface'

interface IMenuItem {
	item: IMenuLink
}

export const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	)
}
