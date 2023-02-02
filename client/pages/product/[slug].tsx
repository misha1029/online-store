import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { products } from '../../app/components/data/product.data'
import { ProductDetails } from '../../app/components/screens/product-datails/ProductDetails'
import { IProduct } from '../../app/components/types/product.interface'

export interface IProductDetails {
	product: IProduct
}

const ProductDatailsPage: NextPage<IProductDetails> = ({ product }) => {
	return <ProductDetails product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = products.map(product => {
        return {
            params: {slug: product.slug}
        }
    })

    return {paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params,
}) => {
	const product =
		products.find((product) => product.slug === params?.slug) ||
		({} as IProduct) // или пустой обьект заглушка
	return {
		props: {
			product: product,
		},
	}
}

export default ProductDatailsPage
