import Advert from "./ui/home/advert";
import Carousel from "./ui/components/carousel";
import Brands from "./ui/components/brands";
import { getProducts } from "./lib/products";

export default function Home() {

  const latestProduct = getProducts()
  const listTools = getProducts()
  const listRenovations = getProducts()
  const listDIY = getProducts()

  return (
	<main className="min-h-screen px-24 flex flex-col gap-10 bg-gray-50">
	    <Advert/>
      <Carousel category={`Latest Products`} productList={latestProduct}/>
      <Brands/>
      <Carousel category={`Hand Tools`} productList={listTools}/>
      <Advert/>
      <Carousel category={`Home & Renovations`} productList={listRenovations}/>
      <Carousel category={`DIY`} productList={listDIY}/>
	</main>
  );
}