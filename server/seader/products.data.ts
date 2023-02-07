import { Product } from '.prisma/client';

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
  {
    name: 'Frappuccino Blended Beverages',
    images: [
      '/uploads/images/products/peppermint.png',
      '/uploads/images/products/caramel.png',
      '/uploads/images/products/pistachio.png',
    ],
  },
  {
    name: 'Cold Brew Coffee Beverages',
    images: ['/uploads/images/products/coldbrew.png'],
  },
  {
    name: 'Matcha Crème Frappuccino® Blended Beverage',
    images: ['/uploads/images/products/matcha.png'],
  },
  {
    name: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
    images: ['/uploads/images/products/mango.png'],
  },
  {
    name: 'Peppermint Hot Chocolate',
    images: ['/uploads/images/products/pepperminthot.png'],
  },
];
