
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import ProductCard from '../components/Product';


// Get and display som products on the home page

const getProducts =  async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json()

}

const getCategories =  async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json()

}


export default async function AllProducts() {  

  const productsData =  getProducts();
  const categoriesData = getCategories();

  const [products, categories] = await Promise.all([productsData, categoriesData]);
  const title = 'All product'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
   
  return (
    
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
   
      <Banner name={title} />
     
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
