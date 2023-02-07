import React, { FC, useState } from 'react'

import { products } from '../../data/product.data'
import Layout from '../../layout/Layout'
import { IProductDetails } from '../../types/product.interface'
import { Catalog } from '../../ui/catalog/Catalog'
import { Heading } from '../../ui/heading/Heading'

import { Breadcrumbs } from './product-breadcrumb/Breadcrumbs'
import { ProductCard } from './product-cart/ProductCard'
import { ProductNavigation } from './product-navigation/ProductNavigation'

export const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading>Product Details</Heading>
			<div>
				<Breadcrumbs product={product} />
				<ProductNavigation productId={product.id} />
			</div>
			<ProductCard product={product} />

			<Catalog products={products} />
		</Layout>
	)
}
