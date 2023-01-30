import React, { FC } from 'react'
import { IProduct } from '../../types/product.interface'
import { Carousel } from './carousel/Carousel'

export const Catalog: FC<{products: IProduct[]}> = ({products}) => {
  return (
    <div>
        <Carousel products={products}/>
    </div>
  )
}
