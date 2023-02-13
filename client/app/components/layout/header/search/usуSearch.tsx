import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'


import { ProductService } from '../../../../service/ProductService'

import { useDebounce } from './useDebounce'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 1000)

	const queryData = useQuery(
		['products search', debouncedSearch],
		() => ProductService.bySerchTerm(debouncedSearch),
		{
			onError: (error) => {
				console.log(error, 'error')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
		}),
		[queryData, searchTerm]
	)
}
