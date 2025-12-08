'use client'

import Link from "next/link";
import SliderProduct from "./cards/sliderproduct";
import { ProductDetails } from "@/app/lib/types";
import { Usable, use, useState } from "react";
import { Suspense } from "react";
import { useParams, useRouter } from "next/navigation";

type props={
    category: string
    productList:  {}[]
}


export default function Carousel({category, productList}:props) {
    const [ searchInput, setSearchInput] = useState('');
    const searchParams = useParams();
    const { replace } = useRouter();
    const handleSearch = () =>
        {
            const parameters = new URLSearchParams(searchParams);
            parameters.set('query', searchInput);
            replace(`/products?${parameters.toString()}`);
        }

  return (
    <div>
        <div className="w-full flex flex-col h-fit border-2 border-gray-100 shadow-sm">
            <div className="w-full h-fit flex flex-row justify-between   border-b-2 border-b-gray-200 p-5">
                <h3 className="text-xl font-semibold">{category}</h3>

                <button onClick={handleSearch}
                        type="submit" 
                        className="text-white 
                                bg-black hover:bg-black focus:ring-4 
                                focus:outline-none focus:ring-blue-300
                                font-medium rounded-lg text-sm px-4 py-2
                                cursor-pointer">
                    {`VIEW ALL`}
                </button>

            </div>
            <div className="flex flex-row">
                {
                    productList.slice(0, 6).map((prod, idx)=>(
                        <div key={"Product" + idx} className="w-[300px]">
                            <SliderProduct
                                id={idx}
                                name={prod.title}
                                numberOfRatings={875}
                                rating={4}
                                price={prod.price}
                                salePrice={prod.price}
                                imgUrl={prod.images[0]}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
