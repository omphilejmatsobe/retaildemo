'use client'

import Product from "./cards/product";
import { getProducts } from "@/app/lib/products";
import { ProductDetails } from "@/app/lib/types";
import { use, useState } from "react";

type props =
{
  productList: Promise<ProductDetails[]>
}

export default function Cardscontainer({productList}:props) {

  const productsData:ProductDetails[] =  use(productList)
  const size = productsData.length
  const [displayLimit, setDisplayLimit] = useState(8)
  const [showMore, setShowMore] = useState(true)

  const setMore = () =>
  {
      if ((displayLimit + 8) < size) setDisplayLimit(displayLimit + 8)
      else 
      {
        setDisplayLimit(size)
        setShowMore(false)
      }
  }

  return (
    <>
    
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {
        productsData.slice(0, displayLimit).map((product, idx)=>
        (
            <Product
                id={idx}
                key={`${product.name} ${idx}`}
                name={product.name}
                numberOfRatings={product.numberOfRatings}
                rating={product.rating}
                price={product.price}
                salePrice={product.salePrice}
                imgUrl={product.imgUrl}/>
        ))
      }
    </div>
    <div className={`${showMore && size > 8 ? "block" : "hidden"} w-full text-center`}>
      <button onClick={setMore} type="button" className="rounded-lg cursor-pointer border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">Show more</button>
    </div>
    </>
  )
}