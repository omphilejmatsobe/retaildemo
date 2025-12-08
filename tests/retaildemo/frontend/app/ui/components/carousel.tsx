'use client'

import Link from "next/link";
import SliderProduct from "./cards/sliderproduct";
import { ProductDetails } from "@/app/lib/types";
import { use } from "react";
import { Suspense } from "react";

type props={
    category: string
    productList: Promise<ProductDetails[]>
}


export default function Carousel({category, productList}:props) {

    const products:ProductDetails[]  = use(productList)

  return (
    <div>
        <div className="w-full flex flex-col h-fit border-2 border-gray-100 shadow-sm">
            <div className="w-full h-fit flex flex-row justify-between   border-b-2 border-b-gray-200 p-5">
                <h3 className="text-xl font-semibold">{category}</h3>
                <Link href={``}>
                    <button 
                            type="submit" 
                            className="text-white 
                                    bg-black hover:bg-black focus:ring-4 
                                        focus:outline-none focus:ring-blue-300
                                        font-medium rounded-lg text-sm px-4 py-2
                                        cursor-pointer">
                                            {`VIEW ALL`}
                    </button>
                </Link>
            </div>
            <div className="flex flex-row">
                {
                    products.map((prod, idx)=>(
                        <div key={"Product" + idx} className="w-[300px]">
                            <SliderProduct
                                id={idx}
                                name={prod.name}
                                numberOfRatings={prod.numberOfRatings}
                                rating={prod.rating}
                                price={prod.price}
                                salePrice={prod.salePrice}
                                imgUrl={prod.imgUrl}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
