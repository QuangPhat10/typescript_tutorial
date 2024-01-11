"use client";

import React from "react";
import { useStateContext } from "@/app/context/ContextProvider";

import menu from "@/app/utils/menu";

const SideBar = () => {
  const { collapsed } = useStateContext();

  return (
    <div
      className={`fixed h-full inset-y-0 left-0 z-10 flex-shrink-0 w-64 bg-white border-r-2 border-indigo-100 shadow-lg sm:left-16 sm:w-72 lg:static lg:w-64 ${
        collapsed ? "hidden" : ""
      }`}
    >
      <nav className="flex flex-col">
        <div className="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto mt-5">
          {menu.map((item) => {
            return (
              <a
                href={item.link}
                className="flex items-center space-x-2 text-indigo-600 transition-colors rounded-lg group hover:bg-indigo-600 hover:text-white"
              >
                <span
                  aria-hidden="true"
                  className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
                >
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
