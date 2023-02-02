import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'

import { sortingData } from './sorting.data'
import { EnumSorting } from './sorting.interface'

interface ISorting{
    sortType: EnumSorting
    setSortType: Dispatch<SetStateAction<EnumSorting>>
}

export const Sorting: FC<ISorting> = ({sortType, setSortType}) => {
	return (
		<Menu direction='ltr'>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {sortingData.find(sort => sort.value === sortType)?.name}
			</MenuButton>
			<MenuList>
				{sortingData.map((sort) => (
					<MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>{sort.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
