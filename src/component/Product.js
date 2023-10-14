import React from "react";
import { ChevronDown, Search } from "./Icons";

export const Product = () => {
  return (
    <div className="lg:bg-[white] bg-[#f5f3f3] w-full rounded-lg lg:p-5 p-2 h-48">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold">Product Sell</h2>
        <div className="flex flex-row gap-2">
          <div className="bg-[#e9e6e6] w-44 lg:flex hidden gap-1 items-center p-1 rounded-md">
            <Search />
            <span className="text-sm text-[grey]">Search</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs">last 30 days</span>
            <ChevronDown stroke="black" />
          </div>
        </div>
      </div>

      <section className="flex flex-row justify-between py-4">
        <span className="text-xs text-[grey]">Product Name</span>
        <div className="flex flex-row lg:gap-24 gap-5">
          <span className="text-xs text-[grey]">Stock</span>
          <span className="text-xs text-[grey]">Price</span>
          <span className="text-xs text-[grey]">Total Sale</span>
        </div>
      </section>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-3 text-base">
            <img
              alt="sea"
              className="h-8 w-12"
              src="https://hbr.org/resources/images/article_assets/2004/10/SEPT15_03_535621603.jpg"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Abstract 3D</span>
              <p className="text-xs text-[grey] lg:block hidden">
                Lorem jdhsdh hdshd hdhjhasd juhufehwi jjhcjncjn
              </p>
            </div>
          </div>

          <div className="flex flex-row lg:gap-28 gap-4">
            <span className="text-xs text-[grey]">32 in Stock</span>
            <span className="text-xs text-[grey] font-bold">$45.99</span>
            <span className="text-xs text-[grey]">20</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-3 text-base">
            <img
              alt="sea"
              className="h-8 w-12"
              src="https://hbr.org/resources/images/article_assets/2004/10/SEPT15_03_535621603.jpg"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                Sarphens illustration
              </span>
              <p className="text-xs text-[grey] lg:block hidden">
                Lorem jdhsdh hdshd hdhjhasd juhufehwi jjhcjncjn
              </p>
            </div>
          </div>

          <div className="flex flex-row lg:gap-28 gap-4">
            <span className="text-xs text-[grey]">32 in Stock</span>
            <span className="text-xs text-[grey] font-bold">$45.99</span>
            <span className="text-xs text-[grey]">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};
