import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import cn from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './ProductNavigation.module.scss'
import { useProductNavigation } from './useProductNavigation'

export const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { nestProductSlug, prevProductSlug } = useProductNavigation(productId)
	return (
		<div className={styles.nav}>
			<div className={cn({ [styles.disabled]: !prevProductSlug })}>
				<Link href={`/product/${prevProductSlug}`}>
					<ChevronLeftIcon fontSize={46} color="#222" />
				</Link>
			</div>
			<div className={cn({ [styles.disabled]: !nestProductSlug })}>
				<Link href={`/product/${nestProductSlug}`}>
					<ChevronRightIcon fontSize={46} color="#222" />
				</Link>
			</div>
		</div>
	)
}
