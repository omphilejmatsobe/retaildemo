 
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb";
import { source } from "../icons";

import Cardscontainer from "./cardscontainer";
import Filterbutton from "./filter/filterbutton";
import { getProducts } from "@/app/lib/products";
import { ProductDetails } from "@/app/lib/types";

export default  function Products() {

  const products = getProducts()

    return (
      <section className=" py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/*<!-- Heading & Filters -->*/}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <Breadcrumb/>
              <h2 className="mt-3 text-xl font-semibold text-gray-900  sm:text-2xl">Electronics</h2>
            </div>
            <div className="flex items-center space-x-4">
              
              <Filterbutton typeOf="Sort" icon={source.sort}/>
            </div>
          </div>

          {/* Products */}
          <Cardscontainer productList={products}/>
      
        </div>
      </section>
    )
  }