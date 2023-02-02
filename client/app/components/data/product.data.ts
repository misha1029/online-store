import { IProduct } from "../types/product.interface";

export const products: IProduct[] = [
    {
        id: 1,
        description: 'discourse intended to give a mental image of something experienced',
        name: 'Frappuccino Blended Beverages',
        slug: 'frappuccino-blended-beverages',
        images: [
            '/images/products/peppermint.png',
            '/images/products/caramel.png',
            '/images/products/pistachio.png'
        ],
        price: 9,
        review: []
    },
    {
        id: 2,
        description: 'discourse 2222 intended to give a mental image of something experienced',
        
        name: 'Cold Brew Coffee Beverages',
        slug: 'cold-brew-coffee-beverages',
        images: [
            '/images/products/coldbrew.png'
        ],
        price: 5,
        review: []
    },
    {
        id: 3,
        description: 'discourse 333 intended to give a mental image of something experienced',
        
        name: 'Matcha Crème Frappuccino® Blended Beverage',
        slug: 'matcha-crème-frappuccino®-blended-beverage',
        images: [
            '/images/products/matcha.png'
        ],
        price: 7,
        review: []
    },
    {
        id: 4,
        description: 'discourse 444 intended to give a mental image of something experienced',
        
        name: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
        slug: 'mango-dragonfruit-lemonade-starbucks-refreshers®-beverage',
        images: [
            '/images/products/mango.png'
        ],
        price: 8,
        review: []
    },
    {
        id: 5,
        description: 'discourse 555 intended to give a mental image of something experienced',
        
        name: 'Peppermint Hot Chocolate',
        slug: 'peppermint-hot-chocolate',
        images: [
            '/images/products/pepperminthot.png'
        ],
        price: 10,
        review: []
    },
]