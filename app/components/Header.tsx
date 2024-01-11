"use client";
import React, { useState } from "react";

import { useStateContext } from "@/app/context/ContextProvider";

const Header = () => {
  const [openProfile, setopenProfile] = useState(false);
  const { collapsed, setCollapsed } = useStateContext();

  const handleProfile = () => {
    setopenProfile(!openProfile);
  };
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="fixed justify-between inset-x-0 flex items-center px-4 py-2 bg-white border-b border-indigo-100 shadow-b">
      <button onClick={handleCollapsed}>
        <span className="sr-only">Toggle sidebar</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>

      <a href="#">
        <img
          className="w-10 h-auto"
          src="https://raw.githubusercontent.com/kamona-ui/dashboard-alpine/main/public/assets/images/logo.png"
          alt="K-UI"
        />
      </a>

      <div className="relative flex items-center flex-shrink-0 p-2">
        <button
          className="transition-opacity rounded-lg opacity-80 hover:opacity-100 "
          onClick={handleProfile}
        >
          <img
            className="w-8 h-8 rounded-lg shadow-md"
            src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
          />
          <span className="sr-only">User menu</span>
        </button>
        <div
          className={`absolute w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg right-0 top-10 focus:outline-none ${
            openProfile ? "block" : "hidden"
          }`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Your Profile
          </a>

          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>

          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
