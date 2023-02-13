import { IProductsPage } from '..'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { products } from '../../app/components/data/product.data'
import { ProductDetails } from '../../app/components/screens/product-datails/ProductDetails'
import {
	IProduct,
	IProductDetails,
} from '../../app/components/types/product.interface'
import { ProductService } from '../../app/service/ProductService'

const ProductDatailsPage: NextPage<IProductDetails> = ({ product }) => {
	return <ProductDetails product={product || []} />
}


export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const data = await ProductService.getProducts()
		
		const paths = data.map((product) => {
			return {
				params: { slug: product.slug },
			}
		})
		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({
	params
}) => {
	try {
		
		const product = await ProductService.bySlug(String(params?.slug)) 

		return {
			props: {
				product
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ProductDatailsPage
