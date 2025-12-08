'use server'

import Product from "../ui/components/cards/product";
import { ProductDetails } from "./types"

export async function getProducts():Promise<ProductDetails[]>
{
    let result:string = '';
    const url = 'https://api.escuelajs.co/api/v1/products';
    const options = {
    method: 'GET',
    };

    try {
        const response = await fetch(url);
        result = await response.text();
        
    } catch (error) {
        console.error(error);
    }
    finally
    {

    }
    
    let obj = JSON.parse(result);
    const output:ProductDetails[] = obj
    console.log(output)
    return output
}

export async function getSpecificProduct(param:string):Promise<ProductDetails>
{
    let result:string = '';
    const url = 'https://api.escuelajs.co/api/v1/products';
    const options = {
    method: 'GET',

    };

    try {
        const response = await fetch(url);
        result = await response.text();
        
    } catch (error) {
        console.error(error);
    }
    finally
    {

    }
    
    let obj = JSON.parse(result);
    const output:ProductDetails[] = obj
    return output[parseInt(param)]
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
