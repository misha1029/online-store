import { EnumSorting, ISortingItem } from './sorting.interface'

export const sortingData: ISortingItem[] = [
	{
		name: 'Newest',
		value: EnumSorting.NEWEST,
	},
	{
		name: 'Oldest',
		value: EnumSorting.OLDEST,
	},
	{
		name: 'Price: low to high',
		value: EnumSorting.LOW_TO_HIGH_PRICE,
	},
	{
		name: 'Price: high to low',
		value: EnumSorting.HICH_TO_LOW_PRICE,
	},
]
