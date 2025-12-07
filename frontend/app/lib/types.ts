export type ProductDetails = 
{
    id: number
    name: string
    numberOfRatings: number
    rating: number
    price: number
    salePrice: number
    imgUrl: string
}

export type UserInfo = 
{
  id: string;
  name: string;
  email: string;
  password: string;
  cart: ProductDetails[];
  wishlists: ProductDetails[];
};