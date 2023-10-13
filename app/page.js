
import Image from 'next/image'
import Link from 'next/link'
import Hero from './components/Hero'
import ProductCard from './components/Product';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';

// Get and display som products on the home page

const getProducts =  async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json()

}

const getCategories =  async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json()

}

const filterFeaturedProduct = (product, number) => {
  let filtered = [];
  for (var i = 0; i < number; i++) {
    var idx = Math.floor(Math.random() * product.length);
    filtered.push(product[idx]);
    product.splice(idx, 1);
  }
  return filtered;
}

export default async function Home() {  

  const productsData =  getProducts();
  const categoriesData = getCategories();

  const [products, categories] = await Promise.all([productsData, categoriesData]);

  const featured = filterFeaturedProduct(products, 7)
  
   
  return (
    
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
   
      <Hero/>
     
      <FeaturedProducts products={featured}/>
     
      <Categories categories={categories}/>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
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
