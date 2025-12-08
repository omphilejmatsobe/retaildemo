
import { ProductDetails } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Icon, source } from "../../icons";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SliderProduct({name, numberOfRatings, rating, price, salePrice, imgUrl}:ProductDetails) {

  const sale = Math.floor((1 - (salePrice/price)) * 100)

  const [ searchInput, setSearchInput] = useState('')
  const searchParams = useParams()
  const { replace } = useRouter()
  

  const handleSearch = () =>
  {
    const parameters = new URLSearchParams(searchParams)
    parameters.set('query', searchInput)
    replace(`/products/product?${parameters.toString()}`);
  }

  return (
    <div className="rounded-lg   p-6 ">
      <div className="h-56 w-full">
        <div onClick={handleSearch} className="cursor-pointer">
          <Image height={500} width={500} className="mx-auto h-full pointer-events-none" src={imgUrl} alt="" />
        </div>
      </div>
      <div className="pt-6 flex flex-col items-center">


        <div className="text-base font-semibold leading-tight text-gray-900 hover:underline cursor-pointer" onClick={handleSearch}>{name}</div>


          <div className="mt-4 flex flex-row gap-x-2 items-center h-fit">
            <h2 className="text-2xl font-extrabold text-gray-900 ">{`$${Intl.NumberFormat().format(salePrice)}`}</h2>
            <h2 className={`text-base font-medium  text-gray-400 line-through ${sale > 0 ? "block" : "hidden"}`}>{`$${Intl.NumberFormat().format(price)}`}</h2>
          </div>
        
        <div className={`mt-2 flex items-center gap-2 ${rating > 0 ? "block" : "hidden" }`}>
          <div className="flex items-center">
            {
              Array(5).fill(1).map((star, idx) =>
              (
                <svg key={`Star-${idx}`} className={`h-4 w-4 ${idx < rating ? "text-yellow-400" : "text-gray-300 "}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg> 
              )
              )
            }
          </div>

          <p className="text-sm font-medium text-gray-900 ">{rating}</p>
          <p className="text-sm font-medium text-gray-500">({numberOfRatings})</p>
        </div>
          
      </div>
    </div>
  )
}
