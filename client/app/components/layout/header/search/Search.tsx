import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { isDataView } from 'util/types'

import { ProductService } from '../../../../service/ProductService'
import { MenuItem } from '../menu/menu-item/MenuItem'

import styles from './Search.module.scss'
import { useSearch } from './usуSearch'

export const Search: FC = () => {
	const [searchTesrm, setSearchTerm] = useState<string>('')

	const { data, isLoading, handleSearch } = useSearch()

	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.500" />}
				/>
				<Input
					variant="flushed"
					type="search"
					onInput={handleSearch}
					placeholder="Search"
					_focus={{
						boxShadow: 'none',
					}}
					_focusVisible={{
						borderColor: '#008D64',
					}}
				/>
			</InputGroup>
			<div>
				{data && data.length ? (
					<ul>
						{data.map((item) => (
							<li key={item.name}>
								<Link href={`/product/${item.slug}`}>{item.name}</Link>
							</li>
						))}
					</ul>
				) : <></>}
			</div>
		</div>
	)
}
