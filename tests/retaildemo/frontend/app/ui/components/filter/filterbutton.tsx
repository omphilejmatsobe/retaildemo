"use client"

import { MouseEventHandler, useState } from "react"
import { Icon, source } from "../../icons"

type props =
{
    typeOf: string
    icon: source
}
export default function Filterbutton({typeOf, icon}: props) {

    const [popUp, setPopUp] = useState(false)

    const toggleSort = () => setPopUp(!popUp)
  
  return (
    <div className="relative flex z-[5]">
        <button onClick={toggleSort} data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="cursor-pointer flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto">
            <Icon w={16} h={16} icon={icon} name="Filter Icon" className="-ms-0.5 me-2 "/>
            {typeOf}
            <Icon w={16} h={16} icon={source.dropdown} name="Filter Icon" className="-me-0.5 ms-2 "/>
        </button>
        <div className={`${popUp ? "block" : "hidden"} absolute w-60 h-fit py-5 px-5 gap-4 text-gray-600 bg-white border-2 border-gray-200 shadow-md mt-12 -translate-x-36 rounded-md flex flex-col`}>
          <h3 onClick={toggleSort} className="cursor-pointer">Price: Low to High</h3>
          <h3 onClick={toggleSort} className="cursor-pointer">Price: High to Low</h3>
          <h3 onClick={toggleSort} className="cursor-pointer">Best selling</h3>
          <h3 onClick={toggleSort} className="cursor-pointer">Oldest to Newest</h3>
          <h3 onClick={toggleSort} className="cursor-pointer">Newest to Oldest</h3>
        </div>
     </div>
  )
}
