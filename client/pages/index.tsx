import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../app/components/screens/Home/Home'
import { IProduct } from '../app/components/types/product.interface'
import { ProductService } from '../app/service/ProductService'



export interface IProductsPage {
  products: IProduct[]
}

const HomePage: NextPage<IProductsPage> = ({products}) => {
  return (
    <div >
{/*       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Home products ={products}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
  const products = await ProductService.getProducts()

  return {
    props: {
      products
    }
  }
}

export default HomePage;