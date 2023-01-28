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
					children={<SearchIcon color="gray.500" />}
				/>
				<Input
				variant='flushed'
					type="search"
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTesrm}
					placeholder="Search"
					_focus={{
						boxShadow: 'none'
					}}
					_focusVisible={{
						borderColor: '#008D64'
					}}
				/>
			</InputGroup>
		</div>
	)
}
