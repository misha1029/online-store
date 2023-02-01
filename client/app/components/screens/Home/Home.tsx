import React, { FC } from 'react'

import { products } from '../../data/product.data'
import Layout from '../../layout/Layout'
import { Catalog } from '../../ui/catalog/Catalog'
import { Heading } from '../../ui/heading/Heading'

export const Home: FC = () => {
	return (
		<Layout title="Home" description="More than just great coffee">
			<Heading className='text-right' > The happies hour of the year</Heading>
			<Catalog products={products} />
		</Layout>
	)
}
