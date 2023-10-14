
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/Banner'
import ProductCard from '@/app/components/Product'


// Get and display som products on the home page


const getProductsByCategory =  async (name) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
  return res.json()

}


export default async function ProductsByCategory({ params }) {  

  const products =  await getProductsByCategory(params.name);
  
  
  let title = params.name

  title = title[0].toUpperCase() + title.slice(1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
   
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
