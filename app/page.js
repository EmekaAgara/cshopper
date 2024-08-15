import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { products } from "@/lib/data";
export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-7 px-5 md:px-0">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
