'use server'

import { ProductDetails } from "./types"

export async function getProducts ()
{
    try
    {
        const ProductList:ProductDetails[] = [
            {
                id: 1,
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 1000,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 2,
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 19,
                rating: 3,
                price: 2399,
                salePrice: 1699,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 3,
                name: `Dove Men+Care Advanced Care Hand and Body Cream 400ml`,
                numberOfRatings: 482,
                rating: 4,
                price: 1850,
                salePrice: 1850,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 4,
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 853,
                rating: 5,
                price: 200,
                salePrice: 170,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 5,
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 278,
                rating: 2,
                price: 200,
                salePrice: 170,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 6,
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 382,
                rating: 4,
                price: 1699,
                salePrice: 1000,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 7,
                name: `Dove Men+Care Advanced Care Hand and Body Cream 400ml`,
                numberOfRatings: 251,
                rating: 4,
                price: 1850,
                salePrice: 1850,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                id: 8,
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 754,
                rating: 5,
                price: 2399,
                salePrice: 1699,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
        ]

        return ProductList
    }

    catch (error)
    {
        console.error("error")
        throw new Error("Failed to fetch product list.")
    }
}

export async function fetchLatestProducts()
{

}

export async function fetchFilterdProducts()
{
    
}

export async function fetchUserData()
{

}