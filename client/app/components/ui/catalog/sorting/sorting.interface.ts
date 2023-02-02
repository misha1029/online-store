export enum EnumSorting {
    LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
    HICH_TO_LOW_PRICE = 'HICH_TO_LOW_PRICE',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST'
}

export interface ISortingItem{
    name: 'Price: high to low' | 'Price: low to high' | 'Newest' | 'Oldest'
    value: EnumSorting
}