import React, { FC } from 'react'
import { products } from '../../data/product.data'

import Layout from '../../layout/Layout'
import { Catalog } from '../../ui/catalog/Catalog'

export const Home: FC = () => {
	return (
		<Layout title="Home" description='More than just great coffee'>
			<Catalog products={products}/>
		</Layout>
	)
}
