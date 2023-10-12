import HeroImage from '../assets/images/hero.png'
import Image from 'next/image'

export default function Banner({name}){
    return (
        <section className="w-full bg-pink-200 dark:bg-gray-900">
            <div className="grid w-full px-4 grid-cols-1 py-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h2>
                </div>               
            </div>
        </section>
    )
}