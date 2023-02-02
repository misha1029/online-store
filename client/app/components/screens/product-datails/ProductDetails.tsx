import React, { FC } from 'react'
import { IProductDetails } from '../../../../pages/product/[slug]'

import { products } from '../../data/product.data'
import Layout from '../../layout/Layout'

import { Catalog } from '../../ui/catalog/Catalog'
import { Heading } from '../../ui/heading/Heading'
import { Breadcrumbs } from './product-breadcrumb/Breadcrumbs'
import { ProductNavigation } from './product-navigation/ProductNavigation'

export const ProductDetails: FC<IProductDetails> = ({product}) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading className='text-end' >{product.name}</Heading>
            <div>
                <Breadcrumbs product= {product}/>
				<ProductNavigation productId={product.id}/>
            </div>
		</Layout>
	)
}