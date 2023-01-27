import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

import styles from './Search.module.scss'

export const Search: FC = () => {
	const [searchTesrm, setSearchTerm] = useState('')
	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.300" />}
				/>
				<Input
					type="search"
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTesrm}
					placeholder="Search"
				/>
			</InputGroup>
		</div>
	)
}
