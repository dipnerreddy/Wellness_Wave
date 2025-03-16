"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
            <svg
  className="w-10 h-auto"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  <rect width="100" height="100" rx="10" fill="black" />
  

  <path
    d="M20 30 L35 70 L50 40 L65 70 L80 30"
    stroke="white"
    stroke-width="8"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

              WellnessWave
            </span>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        <div className={`sm:block ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium text-gray-600 hover:text-gray-400" href="/">
              Home
            </a>
            <a className="font-medium text-gray-600 hover:text-gray-400" href="/">
              Abbout Us
            </a>
            <a className="font-medium text-gray-600 hover:text-gray-400" href="/">
            Testimonials
            </a>
            <a className="font-medium text-blue-500" href="/login">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
