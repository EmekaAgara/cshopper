import Image from "next/image";
import { products } from "@/lib/data";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";
import ReactMarkdown from "react-markdown";
import SendTransaction from "@/components/SendTransaction";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetails({ params }) {
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {/* <ProductDetailsCarousel images={product.images} />
             */}
            {product?.images && (
              <ProductDetailsCarousel images={product.images} />
            )}
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.name}
            </div>
            <div className="text-lg font-semibold mb-5">{product.subtitle}</div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                {" "}
                {product.currency} {product.newPrice}
              </p>

              <>
                <p className="text-base  font-medium line-through">
                  {product.oldPrice}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  {product.discount} off
                </p>
              </>
            </div>

            <div className="text-md cursor-pointer underline font-medium text-black/[0.5]">
              Vendor: {product.vendorName}
            </div>

            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(incl. of taxes and Also includes all applicable duties)`}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black/[0.1] opacity-50`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black/[0.1] opacity-50`}
                >
                  UK 6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black/[0.1] opacity-50`}
                >
                  UK 6
                </div>
              </div>
            </div>

            {/* <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Buy Now
            </button> */}

            <SendTransaction key={product.id} data={product} />
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{product.description}</ReactMarkdown>
              </div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{product.description}</ReactMarkdown>
                Edit the question to include desired behavior, a specific
                problem or error, and the shortest code necessary to reproduce
                the problem. This will help others answer the question. Closed
                last year.
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
}
