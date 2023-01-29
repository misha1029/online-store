import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProduct } from './product.types'

export const productApi = createApi({
	reducerPath: 'api/products', // уникальный ключ для редюсера
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: build => ({ // с помощью билда создаём запросы
		getProducts: build.query<IProduct[], number>({
			query: (limit = 5) => `products?limit=${limit}`,
		}),
	}),
})

export const { useGetProductsQuery} = productApi
