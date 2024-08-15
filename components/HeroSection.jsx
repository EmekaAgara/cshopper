"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function HeroSection() {
  const { open, close } = useWeb3Modal();

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0">
      <Wrapper>
        <div className="flex flex-col items-center justify-center py-14 h-full">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span className="z-10 py-2.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
              ⚡️ Cshopper Web3 Multi-Vendor Ecommerce App
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>

          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text  from-gray-50 to-gray-50 ">
              Shop with Multiple vendors and pay with Crypto
            </h1>
            <p className="text-base mb-5 md:text-lg text-foreground/80 mt-6 text-center">
              CShopper lets you Get onboarded in seconds to Shop with Multiple
              vendors and pay with Crypto. .
            </p>

            <button
              onClick={() => open()}
              className="w-[200px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:opacity-75"
            >
              Get Started
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default HeroSection;
