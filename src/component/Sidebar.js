import React from "react";
import {
  ChevronDown,
  ChevronRight,
  DashboardIcon,
  Help,
  Icon,
  Income,
  Product,
  Promote,
  User,
} from "./Icons";

export const Sidebar = () => {
  return (
    <>
      <div className="h-screen bg-blue-950 hidden lg:flex lg:flex-col w-64 sticky">
        <div className="flex items-center pb-10 gap-2 m-auto w-52 font-sans px-4">
          <DashboardIcon />
          <h3 className="text-[white] text-2xl">Dashboard</h3>
        </div>

        <div className="flex flex-col gap-4">
          <section className="bg-gray-500 bg-opacity-50 w-48 m-auto cursor-pointer rounded-md px-2">
            <div className="flex items-center w-52 rounded-lg h-10 m-auto gap-3">
              <Icon />
              <span className="text-[white]">Dashboard</span>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-48 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer rounded-lg h-10 m-auto gap-3 px-2">
              <div className="flex flex-row gap-3">
                <Product />
                <span className="text-[grey]">Product</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-48 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer rounded-lg h-10 m-auto gap-3 px-2">
              <div className="flex flex-row gap-3">
                <User />
                <span className="text-[grey]">Costumers</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-48 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer rounded-lg h-10 m-auto gap-3 px-2">
              <div className="flex flex-row gap-3">
                <Income />
                <span className="text-[grey]">Income</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-48 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer rounded-lg h-10 m-auto gap-3 px-2">
              <div className="flex flex-row gap-3">
                <Promote />
                <span className="text-[grey]">Promote</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-48 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer rounded-lg h-10 m-auto gap-3 px-2">
              <div className="flex flex-row gap-3">
                <Help />
                <span className="text-[grey]">Help</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="flex flex-row justify-between items-center w-52 rounded-lg gap-3 mt-60 mb-10 bg-slate-600 opacity-80 h-11 p-3">
            <div className="flex flex-row items-center gap-2">
              <img
                alt="user"
                className="h-8 w-8 rounded-full "
                src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&f"
              />
              <div className="flex flex-col gap-0 py-4">
                <span className="text-[white] text-sm font-bold">Evano</span>
                <span className="text-[white] text-xs">Product Manager</span>
              </div>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
