import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Bars, Close, Document, Dollar, Money, Sales, Search } from "./Icons";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Product } from "./Product";

export const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 h-screen bg-slate-900 transition overflow-hidden">
        <ul className="text-center text-[white] text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Dashboard
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Product
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Costumers
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Income
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Help
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-auto">
        <Sidebar />
        <section className="lg:bg-[#f5f3f3] bg-[white] w-full h-full lg:px-12 px-4 py-2">
          <div className="flex flex-row justify-between pb-5">
            <span className="font-semibold lg:text-xl text-sm">
              Hello Shahrukh 👋,
            </span>
            <div>{click && content}</div>

            <button className="block sm:hidden transtion" onClick={handleClick}>
              {click ? <Close /> : <Bars />}
            </button>
            <div className="lg:bg-[white] bg-[#f5f3f3] w-52 h-10 lg:flex hidden gap-1 items-center p-1 rounded-md">
              <Search />
              <span className="text-sm text-[grey]">Search</span>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-14 w-[80px]">
            <section>
              <div className="lg:bg-[white] bg-[#f5f3f3]  lg:w-[260px] w-[330px] h-36 rounded-md py-2 px-1">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex justify-center align-middle rounded-full bg-[#d6fbe6] h-32 w-32 pt-8">
                    <Dollar />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[grey]">Earning</span>
                    <h1 className="font-bold text-xl">$198k</h1>
                    <span className="text-sm flex">
                      <h6 className="text-[green] font-bold">37.8%</h6>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="lg:bg-[white] bg-[#f5f3f3]  lg:w-[260px] w-[330px] h-36 rounded-md py-2 px-1">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex justify-center align-middle rounded-full bg-[#ebd3ff] h-32 w-32 pt-8">
                    <Document />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[grey]">Orders</span>
                    <h1 className="font-bold text-xl">$2.4k</h1>
                    <span className="text-sm flex">
                      <h6 className="text-[red] font-bold">2%</h6>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="lg:bg-[white] bg-[#f5f3f3]  lg:w-[260px] w-[330px] h-36 rounded-md py-2 px-1">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex justify-center align-middle rounded-full bg-[#d4efff] h-32 w-32 pt-8">
                    <Money />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[grey]">Balance</span>
                    <h1 className="font-bold text-xl">$2.4k</h1>
                    <span className="text-sm flex">
                      <h6 className="text-[red] font-bold">2%</h6>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="lg:bg-[white] bg-[#f5f3f3]  lg:w-[260px] w-[330px] h-36 rounded-md py-2 px-1">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex justify-center align-middle rounded-full bg-[#ffdff6] h-32 w-32 pt-8">
                    <Sales />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[grey]">Total sales</span>
                    <h1 className="font-bold text-xl">$89k</h1>
                    <span className="text-sm flex">
                      <h6 className="text-[green] font-bold">↑ 11%</h6>
                      this week
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="flex lg:flex-row flex-col gap-12 pb-6">
            <BarChart />
            <PieChart />
          </div>

          <Product />
        </section>
      </div>
    </>
  );
};
