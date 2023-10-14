import Link from "next/link"
import Image from "next/image";
  const arrangedCategory = (categories) =>{
    const newCategory = [];
    for(let i = 0; i < categories.length; i++){
        if(categories[i] == 'electronics'){
            newCategory.push(  {
                name: 'Electronics',
                description: 'Essentials home appliances',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
                imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                href: '/products/category/electronics',
              })
        }else if(categories[i] == 'jewelery'){
            newCategory.push(  {
                name: 'Jeweleries',
                description: 'Jeweleries that look good on you',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
                imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                href: '/products/category/jewelery',
              })
        }else if(categories[i] == 'men\'s clothing'){
            newCategory.push(  {
                name: 'Men\'s clothing',
                description: 'Essentials home appliances',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                href: '/products/category/men\'s clothing',
              })
        }else if(categories[i] == 'women\'s clothing'){
            newCategory.push(  {
                name: 'Women\'s',
                description: 'Awesome women clothing',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg',
                imageAlt: 'Collection of women clothing that looks great shelf.',
                href: '/products/category/women\'s clothing',
              })
        }else{
            newCategory.push(  {
                name: 'Default',
                description: 'All Category',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
                imageAlt: 'Collection of all.',
                href: '#',
              })
        }
    }
    return newCategory
  }
  
  export default function Categories({categories}) {
    const callouts = arrangedCategory(categories)
    
    return (
      <div className="w-full mt-4">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full py-3 sm:py-24 lg:max-w-none lg:py-5">
                <h1 className="flex py-5 px-5 font-bold text-lg text-gray-800">
                    Categories
                </h1>
  
                <div className="mt-6 grid gap-6 mb-8 md:grid-cols-2">
                    {callouts.map((callout) => (
                        <div key={callout.name} className="group relative">
                        <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-32">
                            <Image
                            fill={true}
                            src={callout.imageSrc}
                            alt={callout.imageAlt}
                            className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                            <Link href={callout.href}>
                            <span className="absolute inset-0" />
                            {callout.name}
                            </Link>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                        </div>
                    ))}
                </div>
          </div>
        </div>

 
      </div>
    )
  }
  