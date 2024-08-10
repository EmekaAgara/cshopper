// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }) => {
  return (
    <Link
      href={`/product/${data?.id}`}
      className="transform  overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        className="rounded-lg"
        width={500}
        height={500}
        src={data?.mainimage}
        alt={data?.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{data?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            {data?.currency} {data?.newPrice}
          </p>

          <>
            <p className="ml-auto text-base font-medium text-green-500">
              {data?.discount} off
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
