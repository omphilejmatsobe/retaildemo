import Image from "next/image";

export default function Advert() {
  return (
    <div className="w-full h-[300px] bg-gray-300">
      <Image src={`/images/banner.webp`} objectFit="cover" width={10000} height={2000} alt=""/>
    </div>
  )
}
