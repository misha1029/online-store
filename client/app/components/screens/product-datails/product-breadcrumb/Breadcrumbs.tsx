import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'

import { IProductDetails } from '../../../types/product.interface'

export const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<>
			<Breadcrumb
				display="flex"
				marginTop={8}
				justifyContent="end"
				color="#444"
			>
				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href="/">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink
						_hover={{
							textDecoration: 'none',
						}}
						cursor="default"
						color="#666"
					>
						{product.name}
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</>
	)
}
