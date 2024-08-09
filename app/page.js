import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home({ products }) {
  return (
    <main className="">
      homepage
      <HeroSection />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            What is Lorem Ipsum?
          </div>
          <div className="text-md md:text-xl">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}
