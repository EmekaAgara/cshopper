"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const Category = () => {
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {products.id} Category
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-7 px-5 md:px-0">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
